<script>
	import {
		Navbar,
		NavLi,
		NavBrand,
		NavUl,
		uiHelpers,
		Darkmode,
		Drawer,
		Button,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem
	} from '$lib';

	import { sineIn } from 'svelte/easing';

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};

	const navDrawer = uiHelpers();
	let navDrawerStatus = $state(false);
	const closeNavDrawer = navDrawer.close;

	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;

	$effect(() => {
		navDrawerStatus = navDrawer.isOpen;
		navStatus = nav.isOpen;
	});
	const navclass =
		'w-full divide-gray-200 border-gray-200 bg-white text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-950 sm:px-4';
	const ulclass =
		'flex flex-col py-3 lg:flex-row lg:my-0 order-1 font-medium xl:gap-4 dark:lg:bg-transparent lg:bg-white border-0';
</script>

<header
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-950 lg:pl-4"
>
	<Navbar
		{toggleNav}
		{closeNav}
		{navStatus}
		{navclass}
		fluid
		breakPoint="lg"
		div2class="ml-auto w-full"
	>
		{#snippet brand()}
			<button
				onclick={navDrawer.toggle}
				type="button"
				class="z-50 mr-4 mt-1 lg:hidden"
				aria-controls="navbar-default"
			>
				<span class="sr-only">Open drawer menu</span>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
			<NavBrand siteName="Svelte 5 UI lib" {closeNav}>
				<img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
			</NavBrand>

			<div class="ml-auto flex items-center lg:order-1">
				<Darkmode />
			</div>
		{/snippet}

		<NavUl {ulclass}>
			<NavLi href="/" {closeNav}>Home</NavLi>
			<NavLi href="https://github.com/shinokada/svelte-5-ui-lib" {closeNav}>Repo</NavLi>
			<NavLi href="https://flowbite-svelte.com/" {closeNav}>Flowbite Svelte</NavLi>
			<NavLi href="https://flowbite.com/" {closeNav}>Flowbite</NavLi>
		</NavUl>
	</Navbar>
</header>

<Drawer width="64" drawerStatus={navDrawerStatus} closeDrawer={closeNavDrawer} {transitionParams}>
	<div class="flex items-center">
		<h5
			id="drawer-label"
			class="mb-4 inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"
		>
			Svelte 5 UI Lib
		</h5>
		<button
			type="button"
			onclick={closeNavDrawer}
			class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
			data-modal-hide="default-modal"
		>
			<svg
				class="h-3 w-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
				/>
			</svg>
			<span class="sr-only">Close drawer</span>
		</button>
	</div>
	<Sidebar asideclass="w-48 p-0" divclass="bg-transparent p-0">
		<SidebarGroup>
			<SidebarDropdownWrapper label="Components">
				<SidebarItem onclick={closeNavDrawer} label="Avatar" href="/components/avatar" />
				<SidebarItem onclick={closeNavDrawer} label="Banner" href="/components/banner" />
				<SidebarItem onclick={closeNavDrawer} label="Breadcrumb" href="/components/breadcrumb" />
				<SidebarItem onclick={closeNavDrawer} label="Button" href="/components/button" />
				<SidebarItem
					onclick={closeNavDrawer}
					label="Button group"
					href="/components/button-group"
				/>
				<SidebarItem onclick={closeNavDrawer} label="Card" href="/components/card" />
				<SidebarItem onclick={closeNavDrawer} label="Drawer" href="/components/drawer" />
				<SidebarItem onclick={closeNavDrawer} label="Darkmode" href="/componentsdarkmode" />
				<SidebarItem onclick={closeNavDrawer} label="Dropdown" href="/components/dropdown" />
				<SidebarItem onclick={closeNavDrawer} label="Footer" href="/components/footer" />
				<SidebarItem onclick={closeNavDrawer} label="Gallery" href="/components/gallery" />
				<SidebarItem onclick={closeNavDrawer} label="Indicator" href="/components/indicator" />
				<SidebarItem onclick={closeNavDrawer} label="Kbd" href="/components/kbd" />
				<SidebarItem onclick={closeNavDrawer} label="Navbar" href="/components/navbar" />
				<SidebarItem onclick={closeNavDrawer} label="Progress" href="/components/progress" />
				<SidebarItem onclick={closeNavDrawer} label="Sidebar" href="/components/sidebar" />
				<SidebarItem onclick={closeNavDrawer} label="Skeleton" href="/components/skeleton" />
				<SidebarItem onclick={closeNavDrawer} label="Spinner" href="/components/spinner" />
				<SidebarItem onclick={closeNavDrawer} label="Video" href="/components/video" />
			</SidebarDropdownWrapper>
			<SidebarDropdownWrapper label="Forms">
				<SidebarDropdownItem onclick={closeNavDrawer} href="/forms/select"
					>Select</SidebarDropdownItem
				>
			</SidebarDropdownWrapper>
			<SidebarDropdownWrapper label="Typography">
				<SidebarDropdownItem onclick={closeNavDrawer} href="/typography/blockquote"
					>Blockquote</SidebarDropdownItem
				>
				<SidebarDropdownItem onclick={closeNavDrawer} href="/typography/heading"
					>Heading/Span/Mark</SidebarDropdownItem
				>
				<SidebarDropdownItem onclick={closeNavDrawer} href="/typography/hr">HR</SidebarDropdownItem>
				<SidebarDropdownItem onclick={closeNavDrawer} href="/typography/link"
					>Link</SidebarDropdownItem
				>
				<SidebarDropdownItem onclick={closeNavDrawer} href="/typography/list"
					>List</SidebarDropdownItem
				>
				<SidebarDropdownItem onclick={closeNavDrawer} href="/typography/paragraph"
					>Paragraph</SidebarDropdownItem
				>
			</SidebarDropdownWrapper>
		</SidebarGroup>
	</Sidebar>
</Drawer>