<script lang="ts">
  interface Props {
    divClass ?: string | undefined;
  }
  import { twMerge } from 'tailwind-merge';
  let { divClass  }: Props = $props();
  let divCls: string = twMerge(
    'p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700',
    divClass 
  );
</script>

<div role="status" class={divCls}>
  <div class="mb-2.5 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mb-10 h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
  <div class="mt-4 flex items-baseline space-x-6 rtl:space-x-reverse">
    <div class="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-56 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-64 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-72 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
    <div class="h-80 w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"></div>
  </div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop divClass 
-->
