<script lang="ts">
  import { type BreadcrumbProps as Props, breadcrumb } from "./index";

  let { children, solid = false, navClass, olClass, ariaLabel = "Breadcrumb", ...restProps }: Props = $props();
  const { base, list } = breadcrumb({ solid });
  let classNav = $derived(base({ class: navClass }));
  let classList = $derived(list({ class: olClass }));
</script>

<nav aria-label={ariaLabel} {...restProps} class={classNav}>
  <ol class={classList}>
    {@render children()}
  </ol>
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:solid: boolean = false;
@props:navClass: string;
@props:olClass: string;
@props:ariaLabel: string = "Breadcrumb";
-->
