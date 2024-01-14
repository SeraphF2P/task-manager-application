import { type ComponentProps, forwardRef, useId } from "react";
import { cn } from "~/lib/cva";

interface InputProps extends ComponentProps<"input"> {
	label: string;
	errorMSG?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, errorMSG = "", type = "text", className, ...props }, ref) => {
		return (
			<div
				className={cn(
					"relative flex w-full flex-col justify-start  pb-5",
					className
				)}
			>
				<input
					ref={ref}
					className={cn("form-input  ", {
						"border-rose-500": !!errorMSG,
						"h-10 text-neutral-black placeholder:text-center placeholder:capitalize":
							["text", "email", "password", "number"].includes(type),
					})}
					placeholder={label}
					type={type}
					{...props}
				/>
				{errorMSG && (
					<span className="absolute top-10  w-full  text-center text-sm text-rose-500">
						{errorMSG}
					</span>
				)}
			</div>
		);
	}
);
Input.displayName = "Input";
export default Input;
