<script lang="ts">
	import { Listgroup, type ListGroupItemType } from '$lib';
	let links: ListGroupItemType[] = [
		{ name: 'Avatar', href: '/components/avatar' },
		{ name: 'List group', href: '/components/list-group', current: true },
		{ name: 'Banner', href: '/components/banner' },
		{ name: 'Breadcrumbs', href: '/components/breadcrumb', target: '_blank' }
	];
</script>

<div class="flex justify-center">
	<Listgroup active items={links} class="w-48" />
</div>
