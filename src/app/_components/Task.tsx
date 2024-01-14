"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import ZOD from "../../lib/ZOD";
import { toast } from "../../lib/myToast";
import { TaskType, tasksSlice, useSelector } from "../../lib/redux";
import { Btn, Modale } from "../../ui/client";
import { Input, NoContent, Typography } from "../../ui/server";
import { FormEvent } from "react";

export function Add() {
	const dispatch = useDispatch();
	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const formdata = new FormData(form);
		const data = Object.fromEntries(formdata.entries());
		const validData = ZOD.addTaskForm.safeParse(data);
		if (validData.success) {
			dispatch(tasksSlice.actions.add(validData.data));
			form.reset();
		} else {
			toast({
				type: "error",
				message: validData.error.errors[0].message,
			});
		}
	};
	return (
		<Typography
			as="section"
			className=" p-6 m-auto bg-neutral-white mx-2 shadow-md border-2 border-neutral-black  rounded-md  max-w-[420px] "
		>
			<form onSubmit={submitHandler} className=" grid text-center">
				<h1>add task</h1>
				<Input min={7} label="title" name="title" />
				<textarea
					className=" form-textarea h-40  resize-none w-full "
					name="description"
					placeholder="write a description here..."
				/>
				<Btn type="submit" className=" m-2">
					add
				</Btn>
			</form>
		</Typography>
	);
}
export function View() {
	const tasks = useSelector((state) => state.tasks);
	return (
		<Typography
			as="section"
			className=" mx-2 min-h-[320px] w-full max-w-[420px]"
		>
			<h1>my tasks</h1>
			<section className="relative divide-y-2 remove-scroll-bar min-h-[396px]  max-h-[420px]  overflow-y-scroll shadow-md border-2 border-neutral-black  rounded-md  ">
				{tasks?.map((task, index) => (
					<div key={task.id} className="  flex     bg-white">
						<div className=" w-20 mx-4 bg-primary/10 flex justify-center items-center text-3xl font-bold text-gray-400">
							#{index + 1}
						</div>
						<div className=" flex-1 ">
							<h2 className="line-clamp-1 ">{task.title}</h2>
							<p className=" line-clamp-3  ">{task.description}</p>
							<Link
								className=" not-prose text-sm text-center hover:text-primary  transition-colors text-gray-400"
								href={`/view-tasks/${task.id}`}
							>
								click here for more details
							</Link>
						</div>
					</div>
				))}
				{tasks.length === 0 && <NoContent />}
			</section>
		</Typography>
	);
}
export function Edit(props: TaskType) {
	const dispatch = useDispatch();

	return (
		<Modale.Root>
			<Modale.Trigger
				className="w-full variant-info "
				shape="rect"
				variant="mesh"
			>
				edit
			</Modale.Trigger>
			<Modale.Portal>
				<Modale.Overlayer>
					<Modale.Content>
						<Typography
							as="section"
							className=" p-6  bg-neutral-white  shadow-md border-2 border-neutral-black  rounded-md w-full max-w-[420px] "
						>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									const form = e.target as HTMLFormElement;
									const formdata = new FormData(form);
									const data = Object.fromEntries(formdata.entries());
									const validData = ZOD.updateTaskForm.safeParse(data);
									if (validData.success) {
										dispatch(tasksSlice.actions.update(validData.data));
									} else {
										toast({
											type: "error",
											message: validData.error.errors[0].message,
										});
									}
								}}
								className=" grid text-center"
							>
								<h1>edit task</h1>
								<Input label="title" name="title" defaultValue={props.title} />
								<textarea
									className=" form-textarea h-40  resize-none w-full "
									name="description"
									placeholder="write a description here..."
									defaultValue={props.description}
								/>
								<input name="id" type="hidden" value={props.id} />
								<div className="mt-4 flex">
									<Btn type="submit" className="  flex-1">
										save
									</Btn>
									<Modale.Close variant="ghost" className="  flex-1">
										close
									</Modale.Close>
								</div>
							</form>
						</Typography>
					</Modale.Content>
				</Modale.Overlayer>
			</Modale.Portal>
		</Modale.Root>
	);
}
