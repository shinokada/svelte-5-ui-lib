<script lang="ts">
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarButton,
		uiHelpers
	} from '$lib';
	import {
		ChartOutline,
		ChevronDoubleUpOutline,
		ChevronDoubleDownOutline,
		ShoppingBagSolid
	} from 'flowbite-svelte-icons';
	import PlusPlaceholder from '../../../utils/PlusPlaceholder.svelte';
	import { page } from '$app/stores';
	let activeUrl = $state($page.url.pathname);
	const demoSidebarUi = uiHelpers();
	let isDemoOpen = $state(false);
	const closeDemoSidebar = demoSidebarUi.close;
	$effect(() => {
		isDemoOpen = demoSidebarUi.isOpen;
		activeUrl = $page.url.pathname;
	});
</script>

<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
<div class="relative">
	<Sidebar
		{activeUrl}
		backdrop={false}
		isOpen={isDemoOpen}
		closeSidebar={closeDemoSidebar}
		params={{ x: -50, duration: 50 }}
		position="absolute"
		class="z-50 h-full"
		activeClass="p-2"
		nonActiveClass="p-2"
	>
		<SidebarGroup>
			<SidebarItem label="Dashboard">
				{#snippet iconSlot()}
					<ChartOutline
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				{/snippet}
			</SidebarItem>
			<SidebarDropdownWrapper label="E-commerce" btnClass="p-2">
				{#snippet iconSlot()}
					<ShoppingBagSolid
						class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
					/>
				{/snippet}
				{#snippet arrowup()}
					<ChevronDoubleUpOutline class="h-6 w-6" />
				{/snippet}
				{#snippet arrowdown()}
					<ChevronDoubleDownOutline class="h-6 w-6" />
				{/snippet}
				<SidebarItem label="Sidebar" href="/components/sidebar" />
				<SidebarItem label="Billing" />
				<SidebarItem label="Invoice" />
			</SidebarDropdownWrapper>
		</SidebarGroup>
	</Sidebar>

	<div class="h-96 overflow-auto px-4 md:ml-64">
		<div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
			<PlusPlaceholder colnum={3} rownum={1} />
			<PlusPlaceholder />
			<PlusPlaceholder colnum={2} rownum={2} />
			<PlusPlaceholder />
			<PlusPlaceholder colnum={2} rownum={2} />
		</div>
	</div>
</div>
