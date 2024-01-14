import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "~/lib/cva";

type TypeProps = {
	as?: ElementType;
};

const Typography = <T extends TypeProps>({
	className,
	as: Component = "div",
	...props
}: T &
	ComponentPropsWithoutRef<
		T["as"] extends ElementType ? T["as"] : "div"
	>): JSX.Element => {
	return (
		<Component
			{...props}
			className={cn(
				" prose  prose-slate prose-headings:mb-4 prose-headings:mt-2 prose-a:transition-colors prose-sm mn:prose-base prose-a:text-inherit prose-a:no-underline hover:prose-a:text-primary/90 ",
				className
			)}
		/>
	);
};

export default Typography;
