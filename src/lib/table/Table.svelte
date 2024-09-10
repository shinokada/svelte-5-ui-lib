<script lang="ts" generics="T">
  import type { HTMLTableAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { twMerge, twJoin } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import { type TableColrType, type TableCtxType } from '.';
  import { writable } from 'svelte/store';

  interface Props extends HTMLTableAttributes {
    children: Snippet;
    header?: Snippet;
    footer?: Snippet;
    divClass?: string;
    striped?: boolean;
    hoverable?: boolean;
    noborder?: boolean;
    shadow?: boolean;
    color?: TableColrType;
    customeColor?: string;
    innerDivClass?: string;
    inputClass?: string;
    searchClass?: string;
    searchPlaceholder?: string;
    svgDivClass?: string;
    svgClass?: string;
    items?: T[];
    filter?: (item: T, searchTerm: string) => boolean;
    searchTerm?: string;
  }
  let { children, header, footer, divClass = 'relative overflow-x-auto', striped, hoverable, noborder, shadow, color = 'default', customeColor, innerDivClass = 'p-4', inputClass, searchClass = 'relative mt-1', searchPlaceholder, svgDivClass, svgClass = 'w-5 h-5 text-gray-500 dark:text-gray-400', items, searchTerm = $bindable(''), filter, ...restProps }: Props = $props();

  let inputCls = twMerge('bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500', inputClass);
  let svgDivCls = twMerge('absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none', svgDivClass);

  const colors = {
    default: 'text-gray-500 dark:text-gray-400',
    blue: 'text-blue-100 dark:text-blue-100',
    green: 'text-green-100 dark:text-green-100',
    red: 'text-red-100 dark:text-red-100',
    yellow: 'text-yellow-100 dark:text-yellow-100',
    purple: 'text-purple-100 dark:text-purple-100',
    indigo: 'text-indigo-100 dark:text-indigo-100',
    pink: 'text-pink-100 dark:text-pink-100',
    custom: customeColor
  };

  let itemStore: TableCtxType<T>["items"] = writable(items);
  let searchTermStore: TableCtxType<T>["searchTerm"] = writable(searchTerm);
  let filterStore: TableCtxType<T>["filter"] = writable(filter);
  let sorterStore: TableCtxType<T>["sorter"] = writable(undefined);
  $effect(() => itemStore.set(items));
  $effect(() => searchTermStore.set(searchTerm));
  $effect(() => filterStore.set(filter));

  let tableCtx: TableCtxType<T> = {
    striped,
    hoverable,
    noborder,
    color,
    items: itemStore,
    searchTerm: searchTermStore,
    filter: filterStore,
    sorter: sorterStore
  };

  setContext('tableCtx', tableCtx);
</script>

<div class={twJoin(divClass, shadow && 'shadow-md sm:rounded-lg')}>
  {#if filter}
    <div class={innerDivClass}>
      <label for="table-search" class="sr-only">Search</label>
      <div class={searchClass}>
        <div class={svgDivCls}>
          <svg class={svgClass} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
        <input bind:value={searchTerm} placeholder={searchPlaceholder} type="text" id="table-search" class={inputCls} />
      </div>
      {#if header}
        {@render header()}
      {/if}
    </div>
  {:else if header}
    {@render header()}
  {/if}
  <table {...restProps} class={twMerge('w-full text-left text-sm', colors[color])}>
    {@render children()}
  </table>
  {#if footer}
    {@render footer()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop header
@prop footer
@prop divClass = 'relative overflow-x-auto'
@prop striped
@prop hoverable
@prop noborder
@prop shadow
@prop color = 'default'
@prop customeColor
@prop innerDivClass = 'p-4'
@prop inputClass
@prop searchClass = 'relative mt-1'
@prop searchPlaceholder
@prop svgDivClass
@prop svgClass = 'w-5 h-5 text-gray-500 dark:text-gray-400'
@prop items
@prop searchTerm = $bindable('')
@prop filter
@prop ...restProps
-->
