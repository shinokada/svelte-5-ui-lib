<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import Checkbox from './Checkbox.svelte';
  import type { FormColorType } from '../types';
  interface Props {
    children: Snippet;
    size?: 'small' | 'default' | 'large' | 'custom';
    group?: (string | number)[];
    value?: string | number;
    checked?: boolean | undefined;
    customSize?: string;
    spanclass?: string;
    color?: FormColorType;
  }

  let {
    children,
    size = 'default',
    group,
    value,
    checked,
    customSize,
    spanclass,
    color,
    ...attributes
  }: Props = $props();
  
  const common =
    "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";

  const colors = {
    primary:
      'peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600',
    secondary:
      'peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600',
    red: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
    green:
      'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
    purple:
      'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
    yellow:
      'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400',
    teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
    orange:
      'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
    blue: 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600'
  };

  const sizes = {
    small: 'w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4',
    default: 'w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5',
    large: 'w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6',
    custom: customSize
  };

  let divClass: string = twMerge(
    common,
    'dark:bg-gray-600 dark:border-gray-500',
    // background ? 'dark:bg-gray-600 dark:border-gray-500' : 'dark:bg-gray-700 dark:border-gray-600',
    colors[color ?? 'primary'],
    sizes[size],
    'relative',
    spanclass
  );
</script>

<Checkbox custom {...attributes} {value} bind:checked>
  <span class={divClass} />

    {@render children()}

</Checkbox>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:size?:  'small' | 'default' | 'large' | 'custom'; = 'default';
@props:group?: (string | number)[];
@props:value?: string | number;
@props:checked?: boolean | undefined;
@props:customSize?: string;
@props:spanclass?: string;
@props:color?: FormColorType;
-->
