<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  type ImgType = {
    src: string;
    alt?: string;
  };

  interface Props {
    children?: Snippet;
    items?: ImgType[];
    imgclass?: string | undefined;
    divclass?: string | undefined;
  }

  let {
    children,
    items = [],
    imgclass,
    divclass,
    ...attributes
  }: Props = $props();
 
  const imgCls: string = 'h-auto max-w-full rounded-lg';

  let divCls = twMerge('grid', divclass);

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }
</script>

{#snippet figure(item)}
  <div>
    <img src={item.src} alt={item.alt} class={twMerge(imgCls, imgclass)} />
  </div>
{/snippet}

<div {...attributes} class={divCls} use:init>
  {#each items as item}
    {@render figure(item)}
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:items?:  ImgType[]; = [];
@props:imgclass?: string | undefined;
@props:divclass?: string | undefined;
-->
