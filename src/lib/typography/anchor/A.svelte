<script lang="ts">
  import { type AnchorProps as Props, anchor } from './index';

  let { children, class: className, ...attributes }: Props = $props();
  let linkClass = $derived(anchor({ className }));
</script>

<a {...attributes} class={linkClass}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop ...attributes
-->
