import { tv } from "tailwind-variants";

export const modal = tv({
  slots: {
    base: "fixed z-50 w-full p-4 pointer-events-none",
    div: "flex relative w-full max-h-full",
    content: "w-full divide-y text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800 bg-white dark:bg-gray-800 pointer-events-auto",
    backdrop: "fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 pointer-events-auto",
    header: "flex justify-between items-center p-4 md:p-5 rounded-t-lg",
    footer: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg",
    body: "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain",
    closeBtn: "absolute top-3 end-2.5",
    h3: "text-xl font-semibold text-gray-900 dark:text-white p-0"
  },
  variants: {
    position: {
      "top-left": { base: "" },
      "top-center": { base: "" },
      "top-right": { base: "" },
      "center-left": { base: "" },
      center: { base: "top-0 start-0 end-0 h-modal md:inset-0 md:h-full flex justify-center items-center" },
      "center-right": { base: "" },
      "bottom-left": { base: "" },
      "bottom-center": { base: "" },
      "bottom-right": { base: "" },
      default: { base: "top-0 start-0 end-0 h-modal md:inset-0 md:h-full flex justify-center items-center" }
    },
    size: {
      xs: { div: "max-w-md" },
      sm: { div: "max-w-lg" },
      md: { div: "max-w-2xl" },
      lg: { div: "max-w-4xl" },
      xl: { div: "max-w-7xl" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    },
    rounded: {
      true: { content: "rounded" }
    },
    shadow: {
      true: { content: "shadow-md" }
    }
  }
});