import plugin from "tailwindcss/plugin";

export const MyPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": {
        "--neutral-white": "226,232,240",
        "--neutral-black": "30,41,59",
        "--primary": "100,100,230",
        "--card": "241,245,249",
        "--alert": "200,50,50",
        "--success": "110,231,183",//? emerald 300
        "--info": "8,145,178" //? cyan 600,
      },
    });
    addBase({
      "*": {
        " @apply border-border ": {},
      },
      body: {
        "@apply bg-neutral-white text-neutral-black": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',

      },
    });
    addUtilities({
      ".remove-scroll-bar": {
        "scroll-behavior": "smooth",
        "-ms-overflow-style": "none",
        "scrollbar-width": "none",
      },
      ".remove-scroll-bar::-webkit-scrollbar": {
        display: "none",
      },
      ".text-border": {
        "text-shadow":
          `-1px -1px 0 rgb(var(--neutral-white)),
            1px -1px 0 rgb(var(--neutral-white)),
           -1px 1px 0 rgb(var(--neutral-white)),
            1px 1px 0 rgb(var(--neutral-white))`
      },
      ".variant-success": {
        "@apply ![--variant:110,231,183]": {},
      },
      ".variant-alert": {
        "@apply ![--variant:200,0,0]": {},
      },
      ".variant-info": {
        "@apply ![--variant:8,145,178]": {},
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          neutral: {
            white: "rgb(var(--neutral-white),<alpha-value>)",
            black: "rgb(var(--neutral-black),<alpha-value>)",
          },
          primary: "rgb(var(--primary),<alpha-value>)",
          card: "rgb(var(--card),<alpha-value>)",
          variant: "rgb(var(--variant,0,0,0),<alpha-value>)",
          alert: "rgb(var(--alert),<alpha-value>)",
          success: "rgb(var(--success),<alpha-value>)",
        },
        screens: {
          mn: "420px",
          xs: "576px",
        },
        gridAutoColumns: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        gridAutoRows: {
          fluid: "repeat(auto-fit,minmax(0,1fr))",
        },
        aspectRatio: {
          square: "1",
        },

      },
    },
  });
export default MyPlugin;
