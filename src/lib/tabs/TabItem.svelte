<script lang="ts">
  import { type TabitemProps as Props, tabItem } from ".";
  import { getTabContext } from "./Tabs.svelte";

  let { children, titleSlot, open = false, title = "Tab title", class: className, disabled, ...restProps }: Props = $props();

  const ctx = getTabContext() ?? {};

  // Generate a unique ID for this tab button
  const tabId = `tab-${Math.random().toString(36).substring(2)}`;

  function init(node: HTMLElement) {
    ctx.selected = node;

    $effect(() => {
      if (ctx.selected !== node) {
        open = false;
      }
    });
  }

  const { base, button, content } = $derived(tabItem({ open, disabled }));
</script>

<li {...restProps} class={base({ class: className })} role="presentation">
  <button
    type="button"
    onclick={() => (open = true)}
    role="tab"
    id={tabId}
    aria-controls={ctx.panelId}
    aria-selected={open}
    {disabled}
    class={button({
      class: open ? ctx.activeClass : ctx.inactiveClass
    })}
  >
    {#if titleSlot}
      {@render titleSlot()}
    {:else}
      {title}
    {/if}
  </button>

  {#if open && children}
    <div class={content()}>
      <div use:init>
        {@render children()}
      </div>
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:titleSlot: Snippet;
@props:open: boolean = false;
@props:title: string = "Tab title";
@props:class: string;
@props:disabled: boolean;
-->
