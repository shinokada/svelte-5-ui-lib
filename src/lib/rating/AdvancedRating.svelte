<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    rating?: Snippet;
    globalText?: Snippet;
    ratings: { label: string; rating: number }[];
    divClass?: string;
    spanClass?: string;
    div2class?: string;
    div3class?: string;
    span2class?: string;
    unit?: string;
  }
  let {
    rating,
    globalText,
    ratings,
    divClass,
    spanClass,
    div2class,
    div3class,
    span2class,
    unit
  }: Props = $props();
  
  let divCls: string = twMerge('flex items-center mt-4', divClass);
  let spanCls: string = twMerge(
    'text-sm font-medium text-gray-600 dark:text-gray-500',
    spanClass
  );
  let div2Cls: string = twMerge(
    'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700',
    div2class
  );
  let div3Cls: string = twMerge('h-5 bg-yellow-400 rounded', div3class);
  let span2Cls: string = twMerge(
    'text-sm font-medium text-gray-600 dark:text-gray-500',
    span2class
  );
</script>

{#if rating}
  {@render rating()}
{/if}
{#if globalText}
  {@render globalText()}
{/if}
{#each ratings as { label, rating }}
  <div class={divCls}>
    <span class={spanCls}>{label}</span>
    <div class={div2Cls}>
      <div class={div3Cls} style="width: {rating}%" ></div>
    </div>
    <span class={span2Cls}>{rating}{unit}</span>
  </div>
{/each}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop rating
@prop globalText
@prop ratings
@prop divClass
@prop spanClass
@prop div2class
@prop div3class
@prop span2class
@prop unit
-->
