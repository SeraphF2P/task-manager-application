import Link, { type LinkProps } from "next/link";
import type { FC, ReactNode } from "react";
import { cn, variants, type variantsType } from "~/lib/cva";

interface NextLinkProps extends LinkProps, variantsType {
	className?: string;
	children?: ReactNode;
}

const NextLink: FC<NextLinkProps> = ({
	className,
	variant,
	shape,
	deActivated,
	...props
}) => {
	return (
		<Link
			className={cn(
				variants({
					variant: variant ?? "fill",
					shape,
					deActivated,
				}),
				className
			)}
			{...props}
		/>
	);
};

export default NextLink;
