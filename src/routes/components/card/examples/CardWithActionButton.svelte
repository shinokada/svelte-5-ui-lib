<script lang="ts">
	import { Card, Button } from '$lib';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex justify-center">
	<Card>
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			Noteworthy technology acquisitions
		</h5>
		<p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">
			Here are the biggest enterprise technology acquisitions of so far, in reverse chronological
			order.
		</p>
		<Button class="w-fit">
			Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
		</Button>
	</Card>
</div>
