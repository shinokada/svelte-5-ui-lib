<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    class: string;
  }

  let { children, class: kbdclass }: Props = $props();
  
  let kbdCls: string =
    'text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500';
</script>

  <kbd class={twMerge(kbdCls, kbdclass)}>
    {@render children()}
  </kbd>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop kbdclass
-->
