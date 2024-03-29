<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    btn?: boolean;
    current?: boolean;
    disabled?: boolean;
    href?: string;
    currentclass?: string;
    normalclass?: string;
    disabledclass?: string;
    focusclass?: string;
    hoverclass?: string;
    liclass?: string;
  }

  let {
    children,
    btn,
    current,
    disabled,
    href,
    currentclass,
    normalclass,
    disabledclass,
    focusclass,
    hoverclass,
    liclass,
    ...attributes
  }: Props = $props();
  
  btn = getContext('btn');
  const currentCls: string = twMerge(
    'text-white bg-primary-700 dark:text-white dark:bg-gray-800',
    currentclass
  );
  const disabledCls: string = twMerge(
    'text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400',
    disabledclass
  );
  const focusCls: string = twMerge(
    'focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white',
    focusclass
  );
  const hoverCls: string = twMerge(
    'hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white',
    hoverclass
  );
  const liCls: string = twMerge(
    'py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg',
    liclass
  );

  const states = {
    current: currentCls,
    normal: normalclass,
    disabled: disabledCls
  };

  let state: 'disabled' | 'current' | 'normal' = disabled
    ? 'disabled'
    : current
      ? 'current'
      : 'normal';

  let itemClass: string = twMerge(
    liCls,
    states[state],
    btn && state === 'disabled' && 'cursor-not-allowed',
    btn && state === 'normal' && hoverCls,
    btn && state === 'normal' && focusCls
  );
</script>

{#if !btn && children}
  <li class={itemClass}>
    {@render children()}
  </li>
{:else if href}
  <a {...attributes} {href} class="block {itemClass}" aria-current={current}>
    {attributes.name}
  </a>
{:else}
  <button
    type="button"
    {...attributes}
    class="flex items-center text-left {itemClass}"
    {disabled}
    aria-current={current}
  >
    {#if attributes.icon}
      <svelte:component this={attributes.icon} class="me-2.5 h-3 w-3" />
    {/if}
    {attributes.name}
  </button>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:btn?: boolean;
@props:current?: boolean;
@props:disabled?: boolean;
@props:href?: string;
@props:currentclass?: string;
@props:normalclass?: string;
@props:disabledclass?: string;
@props:focusclass?: string;
@props:hoverclass?: string;
@props:liclass?: string;
-->
