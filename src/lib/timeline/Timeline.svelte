<script lang="ts">
	import { setContext } from 'svelte';
	import { type TimelineProps as Props, timeline } from '.';

	let { children, order = 'default', class: className, ...restProps }: Props = $props();

	setContext('order', order);
	const olCls = $derived(timeline({ order, className }));
</script>

<ol {...restProps} class={olCls}>
	{@render children()}
</ol>
