<script lang="ts" module>
  const contextKey = Symbol("tab-context");
  const setTabContext = (ctx: TabCtxType) => setContext(contextKey, ctx);

  export const getTabContext = () => getContext(contextKey) as ReturnType<typeof setTabContext>;
</script>

<script lang="ts">
  import { getContext, setContext } from "svelte";
  import { type TabsProps as Props, type TabCtxType, tabs } from ".";

  let { children, tabStyle = "none", tabSize = "md", ulClass, contentClass, activeClass, inactiveClass, divider = true, ...restProps }: Props = $props();

  const { base, active, inactive, content, divider: dividerClass } = $derived(tabs({ tabStyle, tabSize, hasDivider: divider }));

  // Generate a unique ID for the tab panel
  const panelId = `tab-panel-${Math.random().toString(36).substring(2)}`;

  let selectedStore = $state.raw<HTMLElement>();

  setTabContext({
    get activeClass() {
      return active({ class: activeClass });
    },
    get inactiveClass() {
      return inactive({ class: inactiveClass });
    },
    get selected() {
      return selectedStore;
    },
    set selected(v: HTMLElement | undefined) {
      selectedStore = v;
    },
    panelId // Add panelId to the context
  });

  let dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);

  function init(node: HTMLElement) {
    $effect(() => {
      if (!selectedStore) return;
      node.replaceChildren(selectedStore);
    });
  }
</script>

<ul {...restProps} class={base({ class: ulClass })}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass()}></div>
{/if}
<div id={panelId} class={content({ class: contentClass })} role="tabpanel" aria-labelledby={panelId} use:init></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:tabStyle: "full" | "pill" | "underline" | "none" = "none";
@props:tabSize: "xs" | "sm" | "md" = "md";
@props:ulClass: string;
@props:contentClass: string;
@props:inactiveClass: string;
@props:activeClass: string;
@props:divider: boolean = true;
-->
