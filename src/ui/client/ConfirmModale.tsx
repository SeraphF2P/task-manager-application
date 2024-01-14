"use client";
import { FC, ReactNode } from "react";
import { Btn, BtnProps, Modale } from "~/ui/client";

interface ConfirmModaleProps extends BtnProps {
	title: string;
	content: string;
	onConfirm: () => void;
}

const ConfirmModale: FC<ConfirmModaleProps> = ({
	content,
	onConfirm,
	title,
	...props
}) => {
	return (
		<Modale.Root>
			<Modale.Trigger {...props} />
			<Modale.Portal>
				<Modale.Overlayer>
					<Modale.Content>
						<div className=" mx-2   w-full max-w-xs rounded bg-neutral-black text-neutral-white p-4 text-center">
							<h2>{title}</h2>
							<p className=" py-6 leading-6">{content}</p>
							<div className=" flex justify-between">
								<Modale.Close variant="ghost">close</Modale.Close>
								<Btn className=" variant-alert" onClick={onConfirm}>
									confirm
								</Btn>
							</div>
						</div>
					</Modale.Content>
				</Modale.Overlayer>
			</Modale.Portal>
		</Modale.Root>
	);
};

export default ConfirmModale;
