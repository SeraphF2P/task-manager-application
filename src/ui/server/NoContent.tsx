import type { FC } from "react";
import Icon from "./Icons";

interface NoContentProps {
	caption?: string;
}

const NoContent: FC<NoContentProps> = ({
	caption = "no content available",
}) => {
	return (
		<div className=" absolute inset-0 flex   flex-col items-center justify-center gap-2 rounded  bg-gray-300 shadow">
			<Icon.info name="info" className="  h-1/2 w-1/2" />
			<p>{caption}</p>
		</div>
	);
};

export default NoContent;
