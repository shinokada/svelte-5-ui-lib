<script lang="ts" generics="T">
  import { getContext, onMount, type Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { TableCtxType } from '.';

  interface Props extends HTMLAttributes<HTMLTableSectionElement> {
    children?: Snippet;
    class?: string;
    row?: Snippet<[{item: T, index: number}]>;
  }
  let { children, class: className, row, ...restProps }: Props = $props();

  let tableCtx: TableCtxType<T> = getContext('tableCtx');
  let { items, searchTerm, filter, sorter } = tableCtx;
  let sorted = $state($items);
  onMount(() => sorter.subscribe(sorter => {
    sorted = sorter ? sorted?.toSorted((a, b) => sorter.direction * sorter.sort(a, b)) : $items;
  }));
  let filtered = $derived($filter ? sorted?.filter(item => $filter(item, $searchTerm)) : sorted);
</script>

<tbody class={className} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
  {#if row && filtered}
    {#each filtered as item, index}
      {@render row({item, index})}
    {/each}
  {/if}
</tbody>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className
@prop row
@prop ...restProps
-->
