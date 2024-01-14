import MyPreset from "./src/lib/tw-plugins/MyPreset";
import type { Config } from "tailwindcss";

const config = {
  presets: [MyPreset],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;
export default config;