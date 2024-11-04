<script lang="ts">
  import { computePosition, flip, shift, offset, type Placement } from '@floating-ui/dom';
  import type { ParamsType } from "$lib/types";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { type ModalProps as Props, modal } from ".";
  import { fade } from "svelte/transition";
  import { sineIn } from "svelte/easing";

  let { 
    children, 
    header, 
    footer, 
    title, 
    modalStatus, 
    dismissable = true, 
    closeModal, 
    divClass, 
    contentClass, 
    closeBtnClass, 
    h3Class, 
    headerClass, 
    bodyClass, 
    footerClass, 
    outsideClose = true, 
    size = "md", 
    backdrop = true, 
    backdropClass, 
    position = "center",
    class: className, 
    params = { duration: 100, easing: sineIn }, 
    transition = fade, 
    rounded = true, 
    ...restProps 
  }: Props = $props();

  const {
    base,
    div,
    content,
    backdrop: backdropCls,
    header: headerCls,
    footer: footerCls,
    body,
    closeBtn,
    h3
  } = $derived(
    modal({
      position,
      size,
      backdrop,
      rounded
    })
  );

  let modalElement = $state<HTMLDivElement | null>(null);
  let resizeObserver = $state<ResizeObserver | null>(null);

  // Convert position to Floating UI placement
  const getPlacement = (pos: string): Placement => {
    const placementMap: Record<string, Placement> = {
      'top-left': 'top-start',
      'top-center': 'top',
      'top-right': 'top-end',
      'center-left': 'left',
      'center-right': 'right',
      'bottom-left': 'bottom-start',
      'bottom-center': 'bottom',
      'bottom-right': 'bottom-end',
      'center': 'bottom', // fallback to bottom placement for center
      'default': 'bottom' // fallback to bottom placement for default
    };
    return placementMap[pos] || 'bottom';
  };

  const updatePosition = async () => {
    if (!modalElement || position === 'center' || position === 'default') return;

    const virtualElement = {
      getBoundingClientRect() {
        return {
          width: 0,
          height: 0,
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          top: window.innerHeight / 2,
          left: window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2
        };
      }
    };

    const { x, y } = await computePosition(virtualElement, modalElement, {
      placement: getPlacement(position),
      middleware: [
        offset(8),
        flip(),
        shift({ padding: 8 })
      ]
    });

    Object.assign(modalElement.style, {
      left: `${x}px`,
      top: `${y}px`,
      position: 'fixed', // Ensure modal stays fixed
      transform: 'none'  // Remove any transform that might interfere
    });
  };

  // Handle center positioning separately from Floating UI
  const setCenterPosition = () => {
    if (!modalElement || (position !== 'center' && position !== 'default')) return;
    
    Object.assign(modalElement.style, {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'fixed'
    });
  };

  function handleOutsideClick(event: MouseEvent) {
    if (outsideClose && modalElement && !modalElement.contains(event.target as Node)) {
      closeModal?.();
    }
  }

  $effect(() => {
    if (modalStatus && modalElement) {
      if (position === 'center' || position === 'default') {
        setCenterPosition();
      } else {
        resizeObserver = new ResizeObserver(updatePosition);
        resizeObserver.observe(document.body);
        updatePosition();
      }

      // Add click listener to handle outside clicks
      if (outsideClose) {
        document.addEventListener('mousedown', handleOutsideClick);
      }
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
      // Clean up click listener
      if (outsideClose) {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    };
  });
</script>

{#if modalStatus}
  <!-- Backdrop -->
  <div 
    role="presentation" 
    class={backdrop ? backdropCls({ class: backdropClass }) : "fixed inset-0 z-40"}
  />

  <!-- Modal -->
  <div 
    {...restProps} 
    bind:this={modalElement}
    class={base({ className })} 
    transition:transition={params as ParamsType} 
    tabindex="-1"
  >
    <div class={div({ class: divClass })}>
      <div class={content({ class: contentClass })}>
        {#if title || header}
          <div class={headerCls({ class: headerClass })}>
            {#if title}
              <h3 class={h3({ class: h3Class })}>
                {title}
              </h3>
            {:else if header}
              {@render header()}
            {/if}
            {#if dismissable}
              <CloseButton onclick={closeModal} class={closeBtn({ class: closeBtnClass })} />
            {/if}
          </div>
        {/if}
        <div class={body({ class: bodyClass })}>
          {#if dismissable && !title && !header}
            <CloseButton onclick={closeModal} class={closeBtn({ class: closeBtnClass })} />
          {/if}
          {@render children()}
        </div>
        {#if footer}
          <div class={footerCls({ class: footerClass })}>
            {@render footer()}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}