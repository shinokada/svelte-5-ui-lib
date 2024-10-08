import { type VariantProps } from "tailwind-variants";
import Spinner from "./Spinner.svelte";
import type { SVGAttributes } from "svelte/elements";
import { spinner } from "./theme";

type ColorType = VariantProps<typeof spinner>["color"];
type SizeType = VariantProps<typeof spinner>["size"];

interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: ColorType;
  size?: SizeType;
  currentFill?: string;
  currentColor?: string;
}

export { Spinner, spinner, type SpinnerProps };
