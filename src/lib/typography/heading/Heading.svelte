<script lang="ts">
  import { type HeadingProps as Props, heading } from './index';

  let {
    children,
    tag = 'h1',
    class: className,
    ...attributes
  }: Props = $props();

  let headingClass = $derived(heading({ tag, className }));
</script>

<svelte:element this={tag} {...attributes} class={headingClass}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag = 'h1'
@prop class: className
@prop ...attributes
-->
