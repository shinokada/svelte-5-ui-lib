<script lang="ts">
	import { getContext } from 'svelte';
	import { type BreadcrumbProps as Props, breadcrumb } from './index';

	let {
		children,
		solid = false,
		navClass,
		olClass,
		ariaLabel = 'Breadcrumb',
		...restProps
	}: Props = $props();

	// Get merged theme from context
	const context = getContext<Record<string, any>>('themeConfig');
	// Use context theme if available, otherwise fallback to default
	const usedBreadcrumb = context?.breadcrumb || breadcrumb;

	const { nav, list } = usedBreadcrumb({ solid });
	let classNav = $derived(nav({ class: navClass }));
	let classList = $derived(list({ class: olClass }));
</script>

<nav aria-label={ariaLabel} {...restProps} class={classNav}>
	<ol class={classList}>
		{@render children()}
	</ol>
</nav>
