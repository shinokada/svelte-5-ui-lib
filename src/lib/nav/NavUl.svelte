<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { navbarType } from '$lib/types';
	import { writable } from 'svelte/store';
	import { type NavUlProps as Props, navUl } from '.';

	let { children, activeUrl = '', class: className, ...restProps }: Props = $props();

	let breakPoint: navbarType['breakPoint'];
	const context = getContext<navbarType>('navbarContext');
	breakPoint = context.breakPoint ?? 'md';

	const base = $derived(navUl({ breakPoint, className }));
	const activeUrlStore = writable('');
	$effect(() => {
		activeUrlStore.set(activeUrl);
	});
	setContext('activeUrl', activeUrlStore);
</script>

<ul {...restProps} class={base}>
	{@render children()}
</ul>
