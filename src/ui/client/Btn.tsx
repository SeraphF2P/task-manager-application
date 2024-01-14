"use client";

import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import { cn, variants, type variantsType } from "~/lib/cva";

export interface BtnProps
	extends ComponentPropsWithRef<"button">,
		variantsType {}

const Btn = forwardRef<HTMLButtonElement, BtnProps>(
	({ className, variant, shape, children, type = "button", ...props }, ref) => {
		return (
			<button
				ref={ref}
				type={type}
				{...props}
				className={cn(variants({ variant, shape }), className)}
			>
				{children}
			</button>
		);
	}
);
Btn.displayName = "Button";
export default Btn;
