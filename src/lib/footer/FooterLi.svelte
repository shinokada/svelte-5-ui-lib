<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    liClass?: string | undefined;
    aclass?: string | undefined;
    href?: string | undefined;
    target?: string | undefined;
  }

  let { children, liClass, aclass, href, target, ...attributes }: Props =
    $props();

  let liCls: string = twMerge('me-4 last:me-0 md:me-6', liClass);
  let aCls: string = twMerge('hover:underline', aclass);
</script>


  <li class={liCls}>
    <a {...attributes} {href} class={aCls} {target}>
      {@render children()}
    </a>
  </li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop liClass
@prop aclass
@prop href
@prop target
@prop ...attributes
-->
