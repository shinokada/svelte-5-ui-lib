<script lang="ts">
  import { type DescriptionListProps as Props, descriptionList } from './index';

  let {
    children,
    tag,
    dtClass,
    ddClass,
    class: className,
    ...attributes
  }: Props = $props();

  let classDesc = $derived(
    descriptionList({
      tag,
      class: className
    })
  );
</script>

<svelte:element this={tag} {...attributes} class={classDesc}>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag
@prop dtClass
@prop ddClass
@prop class: className
@prop ...attributes
-->
