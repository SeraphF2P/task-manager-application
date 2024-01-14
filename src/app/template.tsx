"use client";

import { ReactNode } from "react";

export default function template({ children }: { children: ReactNode }) {
	return (
		<main className="flex h-screen justify-center items-center flex-col pt-24 ">
			{children}
		</main>
	);
}
