<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { setContext } from 'svelte';
  import {
    accordionVariants,
    type AccordionCtxType,
    type AccordionProps as Props
  } from './accordion';

  let {
    children,
    flush = false,
    activeClass = '',
    inactiveClass = '',
    defaultClass = 'text-gray-500 dark:text-gray-400',
    class: className,
    transition = undefined,
    params,
    ...attributes
  }: Props = $props();

  const ctx: AccordionCtxType = {
    flush,
    activeClass: twMerge(
      'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800',
      activeClass
    ),
    inactiveClass: twMerge(
      'text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800',
      inactiveClass
    )
    // selected: multiple ? undefined : writable()
  };

  setContext<AccordionCtxType>('ctx', ctx);

  let accordionClass = $derived(
    twMerge(accordionVariants({ flush }), defaultClass, className)
  );
</script>

<div {...attributes} class={accordionClass} color="none">
  {@render children()}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop flush = false
@prop activeClass = ''
@prop inactiveClass = ''
@prop defaultClass = 'text-gray-500 dark:text-gray-400'
@prop class: className
@prop transition = undefined
@prop params
@prop ...attributes
-->
