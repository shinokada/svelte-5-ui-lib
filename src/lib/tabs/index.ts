import TabItem from "./TabItem.svelte";
import Tabs from "./Tabs.svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLLiAttributes } from "svelte/elements";
import { tabs, tabItem } from "./theme";

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: "full" | "pill" | "underline" | "none";
  tabSize?: "xs" | "sm" | "md";
  ulClass?: string;
  activeClass?: string;
  inactiveClass?: string;
  contentClass?: string;
  divider?: boolean;
  class?: string;
}

interface TabitemProps extends HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string;
  class?: string;
  disabled?: boolean;
}

interface TabCtxType {
  activeClass: string;
  inactiveClass: string;
  selected?: HTMLElement;
  panelId: string;
}

export { TabItem, tabItem, Tabs, tabs, type TabsProps, type TabitemProps, type TabCtxType };
