<script lang="ts">
  import { type CloseButtonProps as Props, closeButtonVariants } from './index';

  let {
    color = 'default',
    onclick,
    name = 'Close',
    ariaLabel,
    size = 'md',
    href,
    class: className,
    ...attributes
  }: Props = $props();

  const { base, svg } = closeButtonVariants({ color, size });
</script>

{#if href}
  <a
    {href}
    {...attributes}
    {onclick}
    class={base({ class: className })}
    aria-label={ariaLabel ?? name}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    <svg
      class={svg()}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </a>
{:else}
  <button
    type="button"
    {...attributes}
    class={base({ class: className })}
    {onclick}
    aria-label={ariaLabel ?? name}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    <svg
      class={svg()}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop color = 'default'
@prop onclick
@prop name = 'Close'
@prop ariaLabel
@prop size = 'md'
@prop href
@prop class: className
@prop ...attributes
-->
