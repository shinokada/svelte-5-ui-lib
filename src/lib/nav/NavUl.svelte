<script lang="ts">
  import { getContext } from "svelte";
  import type { navbarType } from "$lib/types";
  import { type NavUlProps as Props, navUl } from ".";

  let { children, class: className, ...restProps }: Props = $props();

  let breakPoint: navbarType["breakPoint"];
  const context = getContext<navbarType>("navbarContext");
  breakPoint = context.breakPoint ?? "md";

  const base = $derived(navUl({ breakPoint, className }));
</script>

<ul {...restProps} class={base}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string;
-->
