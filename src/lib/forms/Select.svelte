<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type SelectOptionType<T> = {
    name: string | number;
    value: T;
  };
  interface Props {
    children?: Snippet;
    items: SelectOptionType<any>[];
    value?: any;
    placeholder?: string | undefined;
    underline?: boolean;
    size?: 'sm' | 'md' | 'lg';
    selectclass?: string | undefined;
    underlineClass?: string | undefined;
  }

  let {
    children,
    items,
    value,
    placeholder = 'Choose option ...',
    underline,
    size = 'md',
    selectclass,
    underlineClass,
    ...attributes
  }: Props = $props();
  let defaultCls: string =
    'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  let underlineCls: string = twMerge(
    'text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer',
    underlineClass
  );

  const common = 'block w-full';
  const sizes = {
    sm: 'text-sm p-2',
    md: 'text-sm p-2.5',
    lg: 'text-base py-3 px-4'
  };

  let selectCls: string = $state(
    twMerge(
      common,
      underline ? underlineCls : defaultCls,
      sizes[size],
      underline && '!px-0',
      selectclass
    )
  );
</script>

<select
  {...attributes}
  bind:value
  class={selectCls}
  on:change
  on:contextmenu
  on:input
>
  {#if placeholder}
    <option disabled selected value="">{placeholder}</option>
  {/if}

  {#each items as { value, name }}
    <option {value}>{name}</option>
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</select>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:items: SelectOptionType<any>[];
@props:value?: any;
@props:placeholder?:  string | undefined; = 'Choose option ...';
@props:underline?: boolean;
@props:size?:  'sm' | 'md' | 'lg'; = 'md';
@props:selectclass?: string | undefined;
@props:underlineClass?: string | undefined;
-->
