<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
    src: string | undefined;
    type?: string | undefined;
    trackSrc?: string | undefined;
    srclang?: string | undefined;
    label?: string | undefined;
    class?: string | undefined;
  }

  let {
    children,
    src,
    type = 'video/mp4',
    trackSrc,
    srclang = 'en',
    label = 'english_captions',
    class: classname,
    ...attributes
  }: Props = $props();
</script>

<video {...attributes} class={classname}>
  <source {src} {type} />
    {#if children}
      {@render children()}
    {/if}
  <track src={trackSrc} kind="captions" {srclang} {label} />
  Your browser does not support the video tag.
</video>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:src: string | undefined;
@props:type?:  string | undefined; = 'video/mp4';
@props:trackSrc?: string | undefined;
@props:srclang?:  string | undefined; = 'en';
@props:label?:  string | undefined; = 'english_captions';
@props:class?: string | undefined;
-->
