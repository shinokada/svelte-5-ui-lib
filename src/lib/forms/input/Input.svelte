<script lang="ts">
	import type { SizeType } from '$lib/types';
	import { getContext } from 'svelte';
	import { CloseButton } from '$lib';
	import { type InputProps as Props, input, clampSize, type InputValue } from '.';

	let {
		children,
		left,
		right,
		value = $bindable<InputValue>(),
		clearable = false,
		size,
		color = 'default',
		class: className,
		classLeft,
		classRight,
		divClass,
		...restProps
	}: Props<InputValue> = $props();

	// tinted if put in component having its own background
	let background: boolean = getContext('background');

	let group: { size: SizeType } = getContext('group');
	let isGroup = !!group;
	let _size = $derived(size || clampSize(group?.size) || 'md');
	const _color = $derived(color === 'default' && background ? 'tinted' : color);

	const {
		base,
		input: inputCls,
		left: leftCls,
		right: rightCls
	} = $derived(input({ size: _size, color: _color, group: isGroup, class: className }));

	const clearAll = () => {
		value = undefined;
	};
</script>

{#snippet inputContent()}
	{#if left}
		<div class={leftCls({ class: classLeft })}>
			{@render left()}
		</div>
	{/if}
	{#if children}
		{@render children({ ...restProps, class: inputCls() })}
	{:else}
		<input {...restProps} bind:value class={inputCls({ class: className })} />
	{/if}
	{#if right}
		<div class={rightCls({ class: classRight })}>
			{@render right()}
		</div>
	{/if}
	{#if clearable && value && `${value}`.length > 0}
		<CloseButton {size} onclick={clearAll} class={rightCls({ class: classRight })} />
	{/if}
{/snippet}

{#if group}
	{@render inputContent()}
{:else if right || left}
	<div class={base({ class: divClass })}>
		{@render inputContent()}
	</div>
{:else}
	{@render inputContent()}
{/if}
