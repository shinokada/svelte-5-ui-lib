<script lang="ts" generics="T">
	import { getContext } from 'svelte';
	import Label from '../label/Label.svelte';
	import { type RadioProps as Props, radio } from '.';

	let {
		children,
		aria_describedby,
		labelClass,
		color = 'primary',
		group = $bindable<T>(),
		value = $bindable<T>(),
		inputClass,
		...restProps
	}: Props<T> = $props();

	const { input, label } = $derived(radio({ color, tinted: !!getContext('background') }));
</script>

<Label class={label({ class: labelClass })}>
	<input
		type="radio"
		bind:group
		{value}
		aria-describedby={aria_describedby}
		{...restProps}
		class={input({ class: inputClass })}
	/>
	{@render children()}
</Label>
