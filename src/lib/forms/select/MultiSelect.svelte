<script lang="ts" generics="V extends string | number, T extends SelectOptionType<V>">
  import { twMerge } from "tailwind-merge";
  import { multiSelect as selectCls, type MultiSelectProps as Props, type SelectOptionType } from ".";
  import { createEventDispatcher } from "svelte";
  import Badge from "$lib/badge/Badge.svelte";
  import CloseButton from "$lib/utils/CloseButton.svelte";

  let { badge = defaultBadge, items, value = $bindable([]), size = 'md', dropdownClass, placeholder, disabled = false, oninput, onclick, class: className, ...restProps }: Props<V, T> = $props();
	let show = $state(false);
	let activeIndex: number | null = $state(null);
	let activeItem = $derived(activeIndex !== null ? items[((activeIndex % items?.length) + items.length) % items.length] : null)
	let selectedItems = $derived(items.filter(i => value.includes(i.value)));

	const dispatcher = createEventDispatcher();

	const multiSelectClass = $derived(twMerge('relative border border-gray-300 flex items-center rounded-lg gap-2 dark:border-gray-600 ring-primary-500 dark:focus-within:border-primary-500 dark:ring-primary-500 focus-visible:outline-none', selectCls({ size, disabled }), className));
	let multiSelectDropdown = $derived(twMerge('absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-600 start-0 top-[calc(100%+1rem)] rounded-lg cursor-pointer overflow-y-scroll w-full', dropdownClass));
	const itemsClass = 'py-2 px-3 rounded-lg text-gray-600 hover:text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:text-gray-300 dark:hover:bg-gray-600';
	const itemsSelectedClass = 'bg-gray-100 text-black font-semibold hover:text-black dark:text-white dark:bg-gray-600 dark:hover:text-white';
	const activeItemClass = 'bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-600 dark:hover:text-primary-100';
	const disabledItemClass = 'text-gray-400 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-not-allowed';
	
	function selectOption(select: T) {
		if(disabled || select.disabled) return;
		if(value.includes(select.value)) {
			value = value.filter(v => v !== select.value);
		} else {
			value = [...value, select.value];
		}
		dispatcher('change');
	}
	function clearOption(select: T) {
		if(disabled || select.disabled) return;
		if(value.includes(select.value)) {
			value = value.filter(v => v !== select.value);
			dispatcher('change');
		}
	}
	function clearAll() {
		if(disabled) return;
		if(value.length > 0) {
			value = selectedItems.filter(i => i.disabled).map(i => i.value);
			dispatcher('change');
		}
	}
	
	// keyboard navigation
	function onkeydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'Escape': {
				show = false;
				break;
			}
			case 'Enter':
			case ' ': {
				if(disabled) break;
				if(!show) {
					show = true;
					activeIndex = 0;
				} else if(activeItem !== null) {
					selectOption(activeItem);
				}
				break;
			}
			case 'ArrowDown': {
				handleArrowKey(1);
				break;
			}
			case 'ArrowUp': {
				handleArrowKey(-1);
				break;
			}
		}
		e.stopPropagation();
		e.preventDefault();
	}
	function handleArrowKey(offset: number) {
		if(disabled) return;
		if(!show || activeIndex === null) {
			show = true;
			activeIndex = 0;
		} else {
			activeIndex += offset;
		}
	}
</script>

<!-- hidden select for form submission -->
<select {value} hidden multiple {...restProps}>
	{#each items as { value, name }}
		<option {value}>{name}</option>
	{/each}
</select>

{#snippet defaultBadge({ item, clear, disabled }: { item: T, clear: () => void, disabled: boolean })}
	<Badge color='gray' large={size === 'lg'} dismissable params={{ duration: 100 }} onclick={clear}>
		{item.name}
	</Badge>
{/snippet}

<div onclick={() => show = !disabled && !show} onfocusout={() => show = false} {onkeydown} tabindex="0" role="listbox" class={multiSelectClass}>
	{#if !selectedItems.length}
		<span class='text-gray-400'>{placeholder}</span>
	{/if}
	<span class='flex gap-2 flex-wrap'>
		{#each selectedItems as item (item.value)}
			{@render badge({ item, clear: () => clearOption(item), disabled: item.disabled || disabled })}
		{/each}
	</span>
	<div class='flex ms-auto gap-2 items-center'>
		{#if selectedItems.length}
			<CloseButton onclick={clearAll} class='p-0 focus:ring-gray-400 dark:text-white' />
		{/if}
		<div class="w-[1px] bg-gray-300 dark:bg-gray-600"></div>
		<svg class="cursor-pointer h-3 w-3 ms-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={show ? 'm1 5 4-4 4 4' : 'm9 1-4 4-4-4'} />
    </svg>
	</div>
	
	{#if show}
		<div onclick={e => (e.stopPropagation(), onclick?.(e))} role="presentation" class={multiSelectDropdown}>
			{#each items as item (item.value)}
				<div onclick={() => selectOption(item)} role="presentation" class={twMerge(itemsClass, selectedItems.includes(item) && itemsSelectedClass, activeItem === item && activeItemClass, item.disabled && disabledItemClass)}>
					{item.name}
				</div>
			{/each}
		</div>
	{/if}
</div>
