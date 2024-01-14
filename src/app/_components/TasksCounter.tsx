"use client";
import { useSelector } from "~/lib/redux";
import { Icon } from "~/ui/server";

export default function TasksCounter() {
	const counter = useSelector((state) => state.tasks.length);

	return (
		<div className=" relative  ml-auto  ">
			<Icon.tasks className="w-8 h-8" />
			<div className="w-6 pointer-events-none aspect-square translate-y-1/2 -translate-x-1/2 flex justify-center items-center text-sm text-white  absolute left-0 bottom-0 rounded-full bg-rose-500">
				{counter}
			</div>
		</div>
	);
}
