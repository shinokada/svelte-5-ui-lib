<script lang="ts">
	import { setContext } from 'svelte';
	import { type PaginationProps as Props, pagination, PaginationItem } from '.';

	let {
		pages = [],
		previous,
		next,
		prevContent,
		nextContent,
		table,
		size,
		ariaLabel,
		...restProps
	}: Props = $props();

	setContext('group', true);
	setContext('table', table);
	setContext('size', size);

	const paginationClass = $derived(pagination({ table, size }));
</script>

<nav aria-label={ariaLabel}>
	<ul class={paginationClass}>
		{#if typeof previous === 'function'}
			<li {...restProps}>
				<PaginationItem
					{size}
					onclick={() => previous()}
					class={table ? 'rounded-none rounded-l' : 'rounded-none  rounded-s-lg'}
				>
					{#if prevContent}
						{@render prevContent()}
					{:else}
						Previous
					{/if}
				</PaginationItem>
			</li>
		{/if}
		{#each pages as { name, href, active, size }}
			<li {...restProps}>
				<PaginationItem {size} {active} {href}>
					{name}
				</PaginationItem>
			</li>
		{/each}
		{#if typeof next === 'function'}
			<li {...restProps}>
				<PaginationItem
					{size}
					onclick={() => next()}
					class={table ? 'rounded-none rounded-r' : 'rounded-none rounded-e-lg'}
				>
					{#if nextContent}
						{@render nextContent()}
					{:else}
						Next
					{/if}
				</PaginationItem>
			</li>
		{/if}
	</ul>
</nav>
