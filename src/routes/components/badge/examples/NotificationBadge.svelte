<script lang="ts">
	import { Button, Indicator } from '$lib';
	import { EnvelopeFlowbite } from 'svelte-animated-icons';
</script>

<div class="flex justify-center gap-4">
	<Button class="relative" size="sm">
		<EnvelopeFlowbite class="text-white dark:text-white" />
		<span class="sr-only">Notifications</span>
		<Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold"
			>18</Indicator
		>
	</Button>

	<Button class="relative" size="sm">
		<EnvelopeFlowbite />
		<span class="sr-only">Notifications</span>
		<Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold"
			>20</Indicator
		>
	</Button>

	<Button class="relative" size="sm">
		<EnvelopeFlowbite class="text-white dark:text-white" />
		<span class="sr-only">Notifications</span>
		<Indicator color="sky" border size="xl" placement="bottom-right" class="text-xs font-bold"
			>20</Indicator
		>
	</Button>
</div>
