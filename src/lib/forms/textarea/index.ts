import Textarea from "./Textarea.svelte";
import type { Snippet } from "svelte";
import type { HTMLTextareaAttributes } from "svelte/elements";
import { textarea } from "./theme";

interface TextareaProps extends HTMLTextareaAttributes {
  header?: Snippet;
  footer?: Snippet;
  value?: string;
  wrapped?: boolean;
  divClass?: string | null;
  innerClass?: string;
  headerClass?: string;
  footerClass?: string;
  cols?: number;
}

export { Textarea, type TextareaProps, textarea };
