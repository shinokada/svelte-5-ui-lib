<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type LayoutProps as Props, layout } from './index';

  let { children, class: className, ...attributes }: Props = $props();

  let classDiv = $derived(layout({ className }));
</script>

<div {...attributes} class={classDiv}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
