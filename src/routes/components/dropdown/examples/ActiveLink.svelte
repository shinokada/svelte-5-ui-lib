<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from '$lib';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
	$effect(() => {
		activeUrl = $page.url.pathname;
	});
	let dropdownB = uiHelpers();
	let dropdownBStatus = $state(false);
	let closeDropdownB = dropdownB.close;
	$effect(() => {
		dropdownBStatus = dropdownB.isOpen;
	});
</script>

<div class="flex h-48 items-start justify-center">
	<Button onclick={dropdownB.toggle}>
		Dropdown
		<ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
	</Button>
	<div class="relative">
		<Dropdown
			{activeUrl}
			dropdownStatus={dropdownBStatus}
			closeDropdown={closeDropdownB}
			params={{ y: 0, duration: 200, easing: sineIn }}
			class="absolute top-[40px] -left-[150px]"
		>
			<DropdownUl>
				<DropdownLi href="/">Dashboard</DropdownLi>
				<DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
				<DropdownLi href="/components/footer">Footer</DropdownLi>
				<DropdownLi href="/components/alert">Alert</DropdownLi>
			</DropdownUl>
		</Dropdown>
	</div>
</div>
