<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLDialogAttributes } from 'svelte/elements'
  import { twMerge } from 'tailwind-merge';
  // import Frame from '../utils/Frame.svelte';
  // import { createEventDispatcher, type ComponentProps } from 'svelte';
  import CloseButton from '../utils/CloseButton.svelte';
  import focusTrap from '../utils/focusTrap';
  import type { SizeType, ModalPlacementType, FrameColor } from '../types';

  interface Props extends HTMLDialogAttributes {
    header: Snippet;
    open: boolean;
    title: string;
    size: SizeType;
    color: FrameColor;
    placement: ModalPlacementType;
    autoclose: boolean;
    outsideclose: boolean;
    dismissable: boolean;
    backdropClass: string;
    classBackdrop: string | undefined;
    dialogClass: string;
    classDialog: string | undefined;
    defaultClass: string;
    headerClass: string;
    classHeader: string | undefined;
    bodyClass: string;
    classBody: string | undefined;
    footerClass: string;
    classFooter: string | undefined;
    class: string | undefined;
  }
  
  let {
    header,
    open,
    title,
    size = 'md',
    color = 'default',
    placement = 'center',
    autoclose = false,
    outsideclose = false,
    dismissable = true,
    backdropClass = 'fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80',
    classBackdrop,
    dialogClass = 'fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex',
    classDialog,
    defaultClass = 'relative flex flex-col mx-auto',
    headerClass = 'flex justify-between items-center p-4 md:p-5 rounded-t-lg',
    classHeader,
    bodyClass = 'p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain',
    classBody,
    footerClass = 'flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg',
    classFooter,
    class: frameClass,
    ...attributes
  }: Props = $props();
  
  const dispatch = createEventDispatcher();
  $: dispatch(open ? 'open' : 'close');

  function prepareFocus(node: HTMLElement) {
    const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
    let n: Node | null;
    while ((n = walker.nextNode())) {
      if (n instanceof HTMLElement) {
        const el = n as HTMLElement;
        const [x, y] = isScrollable(el);
        if (x || y) el.tabIndex = 0;
      }
    }
    node.focus();
  }

  const getPlacementClasses = (placement: ModalPlacementType) => {
    switch (placement) {
      // top
      case 'top-left':
        return ['justify-start', 'items-start'];
      case 'top-center':
        return ['justify-center', 'items-start'];
      case 'top-right':
        return ['justify-end', 'items-start'];

      // center
      case 'center-left':
        return ['justify-start', 'items-center'];
      case 'center':
        return ['justify-center', 'items-center'];
      case 'center-right':
        return ['justify-end', 'items-center'];

      // bottom
      case 'bottom-left':
        return ['justify-start', 'items-end'];
      case 'bottom-center':
        return ['justify-center', 'items-end'];
      case 'bottom-right':
        return ['justify-end', 'items-end'];

      default:
        return ['justify-center', 'items-center'];
    }
  };

  const sizes = {
    xs: 'max-w-md',
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-7xl'
  };

  const onAutoClose = (e: MouseEvent) => {
    const target: Element = e.target as Element;
    if (autoclose && target?.tagName === 'BUTTON') hide(e); // close on any button click
  };

  const onOutsideClose = (e: MouseEvent) => {
    const target: Element = e.target as Element;
    if (outsideclose && target === e.currentTarget) hide(e); // close on click outside
  };

  const hide = (e: Event) => {
    e.preventDefault();
    open = false;
  };

  const isScrollable = (e: HTMLElement): boolean[] => [e.scrollWidth > e.clientWidth && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowX) >= 0, e.scrollHeight > e.clientHeight && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowY) >= 0];

  function handleKeys(e: KeyboardEvent) {
    if (e.key === 'Escape' && dismissable) return hide(e);
  }

  let backdropCls = $state(twMerge(backdropClass, classBackdrop));
  let dialogCls = $state(twMerge(dialogClass, classDialog, getPlacementClasses(placement)));
  let frameCls = $state(twMerge(defaultClass, 'w-full divide-y', frameClass));
  let headerCls = $state(twMerge(headerClass, classHeader));
  let bodyCls = $state(twMerge(bodyClass, classBody));
  let footerCls = $state(twMerge(footerClass, classFooter));
</script>

{#if open}
  <!-- backdrop -->
  <div class={backdropCls}></div>
  <!-- dialog -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div onkeydown={handleKeys} on:wheel|preventDefault|nonpassive use:prepareFocus use:focusTrap onclick={onAutoClose} onmousedown={onOutsideClose} class={dialogCls} tabindex="-1" aria-modal="true" role="dialog">
    <div class="flex relative {sizes[size]} w-full max-h-full">
      <!-- Modal content Frame-->
      <div rounded shadow {...attributes} class={frameCls} {color}>
        <!-- Modal header -->
         {#snippet header}
            Hi Header
         {/snippet}
        {#if $$slots.header || title}
        <!-- Frame  -->
          <div class={headerCls} {color}>
            <slot name="header">
              <h3 class="text-xl font-semibold {color === 'default' ? '' : 'text-gray-900 dark:text-white'} p-0">
                {title}
              </h3>
            </slot>
            {#if dismissable}<CloseButton name="Close modal" {color} on:click={hide} />{/if}
          </div>
        {/if}
        <!-- Modal body -->
        <div class={bodyCls} role="document" on:keydown|stopPropagation={handleKeys} on:wheel|stopPropagation|passive>
          {#if dismissable && !$$slots.header && !title}
            <CloseButton name="Close modal" class="absolute top-3 end-2.5" {color} on:click={hide} />
          {/if}
          <slot></slot>
        </div>
        <!-- Modal footer -->
        {#if $$slots.footer}
          <div class={footerCls} {color}>
            <slot name="footer"></slot>
          </div>
        {/if}
        </div>
    </div>
  </div>
{/if}