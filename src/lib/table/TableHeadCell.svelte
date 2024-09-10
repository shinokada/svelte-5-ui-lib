<script lang="ts" generics="T">
  import { getContext, type Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLThAttributes } from 'svelte/elements';
  import type { TableCtxType } from '.';

  interface Props extends HTMLThAttributes {
    children?: Snippet;
    padding?: string;
    class?: string;
    btnClass?: string;
    sort?: (a: T, b: T) => number;
    defaultDirection?: 'asc' | 'desc';
    sortDirection?: 'asc' | 'desc' | null;
    defaultSort?: boolean;
  }
  let { children, padding = 'px-6 py-3', class: className, btnClass, sort, defaultDirection = 'asc', sortDirection = $bindable(), defaultSort, ...restProps }: Props = $props();
  let sortId = Math.random().toString(36).substring(2);

  let { sorter }: TableCtxType<T> = getContext('tableCtx');
  $effect(() => {
    sortDirection = $sorter?.id === sortId ? $sorter.direction === 1 ? 'asc' : 'desc' : null;
  });

  if(defaultSort) sortItems();

  function sortItems() {
    if(!sort) return;
    sorter.update(prev => {
      const direction = (prev?.id === sortId ? -prev.direction : defaultDirection === 'asc' ? 1 : -1) as -1 | 1;
      return {id: sortId, direction, sort};
    });
  }
</script>

{#if sort}
<th {...restProps} class={className} aria-sort={sortDirection ? `${sortDirection}ending` : undefined}>
  <button class={twMerge(padding, 'w-full text-left after:absolute after:pl-3', sortDirection === 'asc' && 'after:content-["▲"]', sortDirection === 'desc' && 'after:content-["▼"]', btnClass)} onclick={sortItems}>
    {#if children}
      {@render children()}
    {/if}
  </button>
</th>
{:else}
<th {...restProps} class={twMerge(padding, className)}>
  {#if children}
    {@render children()}
  {/if}
</th>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop padding = 'px-6 py-3'
@prop class: className
@prop btnClass
@prop sort
@prop defaultDirection = 'asc'
@prop sortDirection = $bindable()
@prop defaultSort
@prop ...restProps
-->
