<script lang="ts">
  import { setContext } from 'svelte';
  import { type ButtonGroupProps as Props, buttonGroup } from './index';

  let {
    children,
    size = 'md',
    class: className,
    ...attributes
  }: Props = $props();

  let groupClass = $derived(buttonGroup({ size, className }));
  setContext('group', { size });
</script>

<div {...attributes} class={groupClass} role="group">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop size = 'md'
@prop class: className
@prop ...attributes
-->
