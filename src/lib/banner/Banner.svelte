<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { CloseButton } from '$lib';
  import type { ColorVariant } from './types';

  interface Props {
    children: Snippet;
    header?: Snippet;
    position?: 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
    dismissable?: boolean;
    color?: ColorVariant;
    bannerType: 'default' | 'bottom' | 'cta' | 'signup' | 'info';
    divclass: string | undefined;
    div2class: string | undefined;
  }

  let {
    children,
    header,
    position = 'sticky',
    dismissable = true,
    color = 'gray',
    bannerType = 'default',
    divclass,
    div2class,
    ...attributes
  }: Props = $props();
  let bannerStatus = $state(true);

  const divClasses = {
    default: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
    bottom: 'bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50',
    cta: 'flex-col md:flex-row  w-[calc(100%-2rem)] -translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl start-1/2 top-6',
    signup: 'top-0 start-0 w-full border-b border-gray-200 bg-gray-50',
    info: 'top-0 start-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50'
  };

  const insideDivClasses = {
    default: 'items-center mx-auto',
    bottom: 'items-center mx-auto',
    cta: 'flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0',
    signup: 'items-center flex-shrink-0 w-full mx-auto sm:w-auto',
    info: 'items-center flex-shrink-0'
  };

  let divCls = twMerge(
    position,
    'z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600',
    divClasses[bannerType],
    divclass
  );
  let innerCls = twMerge('flex', insideDivClasses[bannerType], div2class);
</script>

{#if bannerStatus}
  <div tabindex="-1" class={divCls} {...attributes}>
    {#if header}
      {@render header()}
    {/if}
  
    <div class={innerCls}>
      {@render children()}
    </div>
   
    {#if dismissable}
      <div class="flex items-center">
        <CloseButton
          divclass="-mx-1.5 -my-1.5"
          {color}
          ariaLabel="Remove badge"
          onclick={() => {
            bannerStatus = false;
          }}
        />
      </div>
    {/if}
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:header?: Snippet;
@props:position?:  'static' | 'fixed' | 'absolute' | 'relative' | 'sticky'; = 'sticky';
@props:dismissable?:  boolean; = true;
@props:color?:  ColorVariant; = 'gray';
@props:bannerType:  'default' | 'bottom' | 'cta' | 'signup' | 'info'; = 'default';
@props:divclass: string | undefined;
@props:div2class: string | undefined;
-->
