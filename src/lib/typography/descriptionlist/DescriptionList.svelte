<script lang="ts">
	import { type DescriptionListProps as Props, descriptionList } from './index';

	let { children, tag, class: className, ...restProps }: Props = $props();

	let classDesc = $derived(
		descriptionList({
			tag,
			class: className
		})
	);
</script>

<svelte:element this={tag} {...restProps} class={classDesc}>
	{@render children()}
</svelte:element>
