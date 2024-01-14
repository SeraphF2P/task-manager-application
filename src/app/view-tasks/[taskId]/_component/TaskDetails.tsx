"use client";

import { notFound } from "next/navigation";
import { tasksSlice, useDispatch, useSelector } from "~/lib/redux";
import { ConfirmModale } from "~/ui/client";
import { Typography } from "~/ui/server";
import * as Task from "~/app/_components/Task";
type TaskDetailsProps = { taskId: string };

export default function TaskDetails({ taskId }: TaskDetailsProps) {
	const task = useSelector((state) =>
		state.tasks.find((task) => task.id === taskId)
	);
	const dispatch = useDispatch();
	if (task == undefined) return notFound();
	return (
		<Typography
			as="section"
			className="relative mx-2 h-full max-h-[420px] max-w-[420px]"
		>
			<h1>{task?.title}</h1>
			<section className=" flex flex-col  overflow-hidden   h-full   shadow-md border-2 border-neutral-black  rounded-md  ">
				<p className="  pointer-events-none flex-1 text-lg !my-0 bg-white overflow-y-scroll p-2 remove-scroll-bar">
					{task?.description}
				</p>
				<div className=" flex w-full ">
					<Task.Edit {...task} />
					<ConfirmModale
						onConfirm={() => {
							dispatch(tasksSlice.actions.delete(task.id));
						}}
						title={`delete ${task.title} task ?`}
						content="are you sure you want to delete this task ? this action cannot be undone."
						className=" w-full variant-alert "
						shape="rect"
						variant="mesh"
					>
						delete
					</ConfirmModale>
				</div>
			</section>
		</Typography>
	);
}
