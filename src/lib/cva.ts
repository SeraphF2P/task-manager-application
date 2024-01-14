
import { cva, type VariantProps } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const variants = cva(
  ` relative flex whitespace-nowrap  px-4 py-2 capitalize [--variant:--primary] text-neutral-white transition-[transform_background-color] duration-300 duration-300  justify-center items-center tracking-wider
    `,
  {
    variants: {
      variant: {
        fill: " bg-variant hover:-translate-y-1 transition-all   hover:[box-shadow:2px_2px_0px_rgb(var(--variant))] ",
        mesh: " bg-variant/30 text-variant  ",
        outline:
          " ring-solid  duration-700  ring-2 ring-variant hover:bg-variant active:bg-variant     ",
        ghost:
          "  hover:bg-variant/80   active:bg-variant  text-neutrial-black hover:text-neutral-white  ",
        none: "",
      },
      shape: {
        pill: "rounded-full",
        circle: "rounded-full aspect-square",
        rect: "",
      },
      deActivated: {
        default:
          " disabled:text-gray-700  disabled:bg-gray-500 disabled:ring-gray-500 ",
        skelaton:
          "disabled:text-gray-400 disabled:ring-4 disabled:bg-gray-400 disabled:active:bg-transparent",
        link: "text-gray-400 ring-gray-400 active:bg-transparent hover:scale-100 cursor-auto",
      },
      hover: {
        flicker: "before:absolute overflow-hidden before:inset-0 before:bg-white/10  before:opacity-0 before:transition-opacity hover:before:opacity-100",
        none: ""
      }
    },

    defaultVariants: {
      variant: "fill",
      shape: "pill",
      deActivated: "default",
      hover: "flicker"
    },
  }
);
export type variantsType = VariantProps<typeof variants>;
