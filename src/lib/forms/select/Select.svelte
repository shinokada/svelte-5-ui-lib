<script lang="ts" generics="T">
	import { type SelectProps as Props, select as selectCls } from '.';

	let {
		children,
		items,
		value = $bindable(),
		underline,
		size = 'md',
		class: className,
		placeholder = 'Choose option ...',
		...restProps
	}: Props<T> = $props();

	const selectStyle = $derived(selectCls({ underline, size, className }));
</script>

<select {...restProps} bind:value class={selectStyle}>
	{#if placeholder}
		<option disabled selected value="">{placeholder}</option>
	{/if}

	{#if items}
		{#each items as { value, name }}
			<option {value}>{name}</option>
		{/each}
	{/if}

	{#if children}
		{@render children()}
	{/if}
</select>
