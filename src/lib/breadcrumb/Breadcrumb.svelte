<script lang="ts">
  import { type BreadcrumbProps as Props, breadcrumb } from './index';

  let {
    children,
    solid = false,
    navClass,
    solidClass,
    olClass,
    ariaLabel = 'Breadcrumb',
    ...attributes
  }: Props = $props();
  const { base, list } = breadcrumb({ solid });
  let classNav = $derived(base({ class: navClass }));
  let classList = $derived(list({ class: olClass }));
</script>

<nav aria-label={ariaLabel} {...attributes} class={classNav}>
  <ol class={classList}>
    {@render children()}
  </ol>
</nav>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop solid = false
@prop navClass
@prop solidClass
@prop olClass
@prop ariaLabel = 'Breadcrumb'
@prop ...attributes
-->
