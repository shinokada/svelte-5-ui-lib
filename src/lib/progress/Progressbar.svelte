<script lang="ts">
  import type { ProgressBarColorType } from '$lib/types';

  interface Props {
    progress?: string | number;
    precision?: number;
    tweenDuration?: number;
    animate?: boolean;
    size?: string | undefined;
    labelInside?: boolean;
    labelOutside?: string | undefined;
    easing?: EasingFunction;
    color?: ProgressBarColorType;
    div2class?: string | undefined;
    labeloutsidedivclass?: string | undefined;
    divclass?: string | undefined;
    class?: string | undefined;
  }

  import { cubicOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';
  import type { EasingFunction } from 'svelte/transition';
  import { twMerge, twJoin } from 'tailwind-merge';

  let {
    progress = '45',
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = 'h-2.5',
    labelInside = false,
    labelOutside,
    easing = cubicOut,
    color = 'primary',
    div2class,
    labeloutsidedivclass,
    divclass,
    class: classname,
    ...attributes
  }: Props = $props();
  
  let labelInsideCls: string =
    'text-primary-100 text-xs font-medium text-center p-0.5 leading-none rounded-full';
  let divCls: string = 'w-full bg-gray-200 rounded-full dark:bg-gray-700';

  const _progress = tweened(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });

  // let barColor: string;
  const barColors = {
    primary: 'bg-primary-600',
    blue: 'bg-blue-600',
    gray: 'bg-gray-600 dark:bg-gray-300',
    red: 'bg-red-600 dark:bg-red-500',
    green: 'bg-green-600 dark:bg-green-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-600 dark:bg-purple-500',
    indigo: 'bg-indigo-600 dark:bg-indigo-500'
  };

  $effect(() => {
    _progress.set(Number(progress));
  });
</script>

{#if labelOutside}
  <div
    {...attributes}
    class={twMerge('mb-1 flex justify-between', labeloutsidedivclass)}
  >
    <span class="text-base font-medium text-blue-700 dark:text-white"
      >{labelOutside}</span
    >
    <span class="text-sm font-medium text-blue-700 dark:text-white"
      >{progress}%</span
    >
  </div>
{/if}
<div class={twMerge(divCls, size, divclass)}>
  {#if labelInside}
    <div
      class={twJoin(labelInsideCls, barColors[color], size, div2class)}
      style="width: {$_progress}%"
    >
      {$_progress.toFixed(precision)}%
    </div>
  {:else}
    <div
      class={twJoin(barColors[color], size, 'rounded-full', div2class)}
      style="width: {$_progress}%"
    />
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: progress?:  string | number; = '45';
@props:precision?:  number; = 0;
@props:tweenDuration?:  number; = 400;
@props:animate?:  boolean; = false;
@props:size?:  string | undefined; = 'h-2.5';
@props:labelInside?:  boolean; = false;
@props:labelOutside?: string | undefined;
@props:easing?:  EasingFunction; = cubicOut;
@props:color?:  ProgressBarColorType; = 'primary';
@props:div2class?: string | undefined;
@props:labeloutsidedivclass?: string | undefined;
@props:divclass?: string | undefined;
@props:class?: string | undefined;
-->
