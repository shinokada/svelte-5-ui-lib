<script lang="ts">
  interface Props {
    divclass?: string | undefined;
  }

  import { twMerge } from 'tailwind-merge';
  let { divclass, ...attributes }: Props = $props();
</script>

<div
  {...attributes}
  class={twMerge('my-1 h-px bg-gray-100 dark:bg-gray-600', divclass)}
/>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: divclass?: string | undefined;
-->
