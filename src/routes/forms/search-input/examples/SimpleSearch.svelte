<script lang="ts">
	import { Search, Button } from '$lib';
	import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<form class="flex gap-2">
	<Search />
	<Button class="p-2.5">
		<SearchOutline class="h-5 w-5" />
	</Button>
</form>
