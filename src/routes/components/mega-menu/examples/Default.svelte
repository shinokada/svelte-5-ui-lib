<script>
	import { Navbar, NavBrand, NavUl, NavLi, MegaMenu, uiHelpers } from '$lib';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	let menu = [
		{ name: 'About us', href: '/about' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact us', href: '/contact' },
		{ name: 'Library', href: '/library' },
		{ name: 'Newsletter', href: '/news' },
		{ name: 'Support Center', href: '/support' },
		{ name: 'Resources', href: '/resource' },
		{ name: 'Playground', href: '/play' },
		{ name: 'Terms', href: '/terms' },
		{ name: 'Pro Version', href: '/pro' },
		{ name: 'License', href: '/license' }
	];
	let nav = uiHelpers();
	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let mega = uiHelpers();
	let megaStatus = $state(false);
	const toggleMega = mega.toggle;
	$effect(() => {
		navStatus = nav.isOpen;
		megaStatus = mega.isOpen;
	});
</script>

<div class="h-64">
	<Navbar {toggleNav} {closeNav} {navStatus}>
		{#snippet brand()}
			<NavBrand href="/">
				<img
					src="/images/flowbite-svelte-icons-logo.svg"
					class="me-3 h-6 sm:h-9"
					alt="Flowbite Logo"
				/>
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
					>Flowbite</span
				>
			</NavBrand>
		{/snippet}
		<NavUl>
			<NavLi href="/">Home</NavLi>
			<NavLi class="cursor-pointer" onclick={toggleMega}>
				Mega menu<ChevronDownOutline class="text-primary-800 ms-2 inline h-6 w-6 dark:text-white" />
			</NavLi>

			<NavLi href="/services">Services</NavLi>
			<NavLi href="/services">Products</NavLi>
		</NavUl>
	</Navbar>
	<div class="relative">
		<MegaMenu
			items={menu}
			dropdownStatus={megaStatus}
			class="absolute -top-[20px] left-[300px] w-[400px]"
		>
			{#snippet children(prop)}
				<a href={prop.item.href} class="hover:text-primary-600 dark:hover:text-primary-500"
					>{prop.item.name}</a
				>
			{/snippet}
		</MegaMenu>
	</div>
</div>
