<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLUListElement> {
    children: Snippet;
    borderClass?: string | undefined;
    border?: boolean;
  }

  let {
    children,
    class: className = 'space-y-2',
    borderClass = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700',
    border = false,
    ...attributes
  }: Props = $props();
</script>

<ul {...attributes} class={border ? borderClass : className}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className = 'space-y-2'
@prop borderClass = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700'
@prop border = false
@prop ...attributes
-->
