<script lang="ts">
  import type { ParamsType } from '$lib/types';
  import CloseButton from '$lib/utils/CloseButton.svelte';
  import { type ModalProps as Props, modal } from '.';
  import { fade } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';

  let { children, header, footer, title, modalStatus, dismissable = true, closeModal, activateClickOutside = true, size = 'md', backdrop = true, backdropClass, position = 'center', class: className, params = { duration: 100, easing: sineIn }, transition = fade, ...restProps }: Props = $props();

  const { base, div, content, backdrop: backdropCls, header: headerCls, footer: footerCls, body } = $derived(
    modal({
      position,
      size,
      backdrop
    })
  );
</script>

{#if modalStatus}
  {#if backdrop && activateClickOutside}
    <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={closeModal}></div>
  {:else if backdrop && !activateClickOutside}
    <div role="presentation" class={backdropCls({ class: backdropClass })}></div>
  {:else if !backdrop && activateClickOutside}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeModal}></div>
  {:else if !backdrop && !activateClickOutside}
    <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
  {/if}
  <div {...restProps} class={base({ className })} transition:transition={params as ParamsType} tabindex="-1">
    <div class={div()}>
      <div class={content()}>
        {#if title || header}
          <div class={headerCls()}>
            {#if title}
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white p-0">
                {title}
              </h3>
            {:else if header}
              {@render header()}
            {/if}
            {#if dismissable}
              <CloseButton onclick={closeModal} />
            {/if}
          </div>
        {/if}
        <div class={body()}>
          {#if dismissable && !title && !header}
            <CloseButton onclick={closeModal} />
          {/if}
          {@render children()}
        </div>
        {#if footer}
          <div class={footerCls()}>
            {@render footer()}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop drawerStatus
@prop toggleDrawer
@prop closeDrawer
@prop activateClickOutside = true
@prop position
@prop width
@prop backdrop = true
@prop backdropClass
@prop placement = 'left'
@prop class: divClass
@prop transitionParams
@prop transitionType = 'fly'
@prop ...restProps
-->
