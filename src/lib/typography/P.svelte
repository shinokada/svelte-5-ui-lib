<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { PsizeType, PweightType, SpaceType } from '../types';

  interface Props {
    children: Snippet;
    color?: string | undefined;
    class?: string | undefined;
    height?: 'normal' | 'relaxed' | 'loose';
    align?: 'left' | 'center' | 'right';
    justify?: boolean;
    italic?: boolean;
    firstupper?: boolean;
    upperClass?: string | undefined;
    opacity?: number | undefined;
    whitespace?: 'normal' | 'nowrap' | 'pre' | 'preline' | 'prewrap';
    size?: PsizeType;
    space?: SpaceType;
    weight?: PweightType;
  }

  let {
    children,
    color = 'text-gray-900 dark:text-white',
    class: className,
    height = 'normal',
    align = 'left',
    justify = false,
    italic = false,
    firstupper = false,
    upperClass = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left',
    opacity,
    whitespace = 'normal',
    size = 'base',
    space,
    weight = 'normal',
    ...attributes
  }: Props = $props();

  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  };
  const weights = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };
  const spaces = {
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest'
  };

  const heights = {
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose'
  };

  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const whitespaces = {
    normal: 'whitespace-normal',
    nowrap: 'whitespace-nowrap',
    pre: 'whitespace-pre',
    preline: 'whitespace-pre-line',
    prewrap: 'whitespace-pre-wrap'
  };

  let colorAndopacity = $derived(color
    .split(' ')
    .map((element) => element.trim())
    .map((element) => element + '/' + String(opacity))
    .join(' '));

  let classP = $derived(twMerge(
    size && sizes[size],
    (opacity && colorAndopacity) || (color && color),
    height && heights[height],
    weight && weights[weight],
    space && spaces[space],
    align && aligns[align],
    justify && 'text-justify',
    italic && 'italic',
    firstupper && upperClass,
    whitespace && whitespaces[whitespace],
    className
  ));
</script>

<p {...attributes} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'text-gray-900 dark:text-white'
@prop pclass
@prop height = 'normal'
@prop align = 'left'
@prop justify = false
@prop italic = false
@prop firstupper = false
@prop upperClass = 'first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left'
@prop opacity
@prop whitespace = 'normal'
@prop size = 'base'
@prop space
@prop weight = 'normal'
@prop ...attributes
-->
