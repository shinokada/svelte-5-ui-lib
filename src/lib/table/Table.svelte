<script lang="ts">
	import { setContext } from 'svelte';
	import {
		type TableProps as Props,
		table as tableCls,
		type TableCtxType,
		TableHead,
		TableBody,
		type HeadItemType
	} from '.';

	let {
		children,
		footerSlot,
		captionSlot,
		tableItems,
		divClass = 'relative overflow-x-auto',
		striped,
		hoverable,
		noborder,
		shadow,
		color = 'default',
		class: className,
		...restProps
	}: Props = $props();

	const { base, table } = $derived(tableCls({ color, shadow }));

	let tableCtx: TableCtxType = {
		get striped() {
			return striped;
		},
		get hoverable() {
			return hoverable;
		},
		get noborder() {
			return noborder;
		},
		get color() {
			return color;
		}
	};

	setContext('tableCtx', tableCtx);
	let headItems: (string | HeadItemType)[] = $state([]);
	let bodyItems: (string | number | boolean)[][] = $state([]);
	if (tableItems) {
		headItems = Object.keys(tableItems[0]).map((key) => ({
			text: key.charAt(0).toUpperCase() + key.slice(1)
		}));
		bodyItems = tableItems.map((item) => Object.values(item));
	}
</script>

<div class={base({ class: divClass })}>
	<table {...restProps} class={table({ className })}>
		{#if captionSlot}
			{@render captionSlot()}
		{/if}
		{#if tableItems}
			<TableHead {headItems} />
			<TableBody {bodyItems} />
		{:else if children}
			{@render children()}
		{/if}
		{#if footerSlot}
			{@render footerSlot()}
		{/if}
	</table>
</div>
