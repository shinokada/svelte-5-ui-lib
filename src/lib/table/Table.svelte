<script context="module" lang="ts">
  type TableCtxType = {
    striped?: boolean;
    hoverable?: boolean;
    noborder?: boolean;
    color?: TableColrType;
  };

  type TableColrType =
    | 'blue'
    | 'green'
    | 'red'
    | 'yellow'
    | 'purple'
    | 'default'
    | 'indigo'
    | 'pink'
    | 'custom';
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge, twJoin } from 'tailwind-merge';
  import { setContext } from 'svelte';

  interface Props {
    children: Snippet;
    divClass?: string;
    striped?: boolean;
    hoverable?: boolean;
    noborder?: boolean;
    shadow?: boolean;
    color?: TableColrType;
    customeColor?: string;
  }
  let {
    children,
    divClass = 'relative overflow-x-auto',
    striped,
    hoverable,
    noborder,
    shadow,
    color = 'default',
    customeColor,
    ...attributes
  }: Props = $props();

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

  let tableCtx: TableCtxType = {
    striped,
    hoverable,
    noborder,
    color
  };

  setContext('tableCtx', tableCtx);
</script>

<div class={twJoin(divClass, shadow && 'shadow-md sm:rounded-lg')}>
  <table
    {...attributes}
    class={twMerge('w-full text-left text-sm', colors[color])}
  >
    
      {@render children()}
  
  </table>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass = 'relative overflow-x-auto'
@prop striped
@prop hoverable
@prop noborder
@prop shadow
@prop color = 'default'
@prop customeColor
@prop ...attributes
-->
