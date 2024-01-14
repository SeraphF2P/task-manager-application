import useClickOutside from "~/hooks/useClickOutside";
import Btn, { BtnProps } from "./Btn";
import {
	ComponentProps,
	ElementType,
	PropsWithChildren,
	ReactNode,
	createContext,
	useContext,
	useRef,
	useState,
} from "react";
import { createPortal } from "react-dom";

const Context = createContext<{
	isOpen: boolean;
	setIsOpen: (_val: boolean) => void;
}>({ isOpen: false, setIsOpen: () => {} });
function useModale() {
	return useContext(Context);
}
interface ModaleProps {
	children: ReactNode;
	open?: boolean;
}
export const Root = ({ children, open = false }: ModaleProps) => {
	const [isOpen, setOpen] = useState(open);
	const setIsOpen = (val: boolean) => {
		setOpen(val);
		if (val) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	};
	return (
		<Context.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</Context.Provider>
	);
};
export const Portal = ({ children }: PropsWithChildren) => {
	const { isOpen } = useModale();
	if (isOpen == false) return null;
	return createPortal(children, window.document.body);
};
export const Overlayer = ({ children, ...props }: ComponentProps<"div">) => {
	return (
		<div
			className=" bg-gray-700/30 flex  justify-center items-center backdrop-blur-lg fixed inset-0 z-50"
			{...props}
		>
			{children}
		</div>
	);
};
export const Close = ({ children, onClick, ...props }: BtnProps) => {
	const { setIsOpen } = useModale();
	return (
		<Btn
			{...props}
			onClick={() => {
				setIsOpen(false);
			}}
		>
			{children}
		</Btn>
	);
};
export const Trigger = ({ children, ...props }: BtnProps) => {
	const { setIsOpen } = useModale();
	return (
		<Btn {...props} onClick={() => setIsOpen(true)}>
			{children}
		</Btn>
	);
};
export const Content = ({ ...props }: ComponentProps<"div">) => {
	const { setIsOpen } = useModale();
	const ref = useRef(null);
	useClickOutside(ref, (e) => {
		e.stopPropagation();
		setIsOpen(false);
	});
	return <div ref={ref} {...props} />;
};
