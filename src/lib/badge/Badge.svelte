<script lang="ts">
	import { type BadgeProps as Props, badge } from './index';
	import { CloseButton } from '$lib';
	import { fade } from 'svelte/transition';
	import type { ParamsType } from '$lib/types';

	let {
		children,
		icon,
		badgeStatus = $bindable(true),
		color = 'primary',
		large = false,
		dismissable = false,
		class: className,
		border,
		href,
		target,
		rounded,
		transition = fade,
		params,
		aClass,
		onclick,
		...restProps
	}: Props = $props();

	const { base, hrefClass } = $derived(
		badge({ color, size: large ? 'large' : 'small', border, rounded })
	);
	// $inspect('badgeStatus: ', badgeStatus);
</script>

{#if badgeStatus}
	<div {...restProps} transition:transition={params as ParamsType} class={base({ className })}>
		{#if href}
			<a {href} {target} class={hrefClass({ class: aClass })}>
				{@render children()}
			</a>
		{:else}
			{@render children()}
		{/if}

		{#if dismissable}
			{#if icon}
				<button
					type="button"
					class="text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300 m-0.5 ms-1.5 -me-1.5 rounded p-0.5 whitespace-normal focus:ring-1 focus:outline-none"
					aria-label="Remove badge"
					onclick={() => {
						badgeStatus = false;
					}}
				>
					<span class="sr-only">Remove badge</span>
					{@render icon()}
				</button>
			{:else if onclick}
				<CloseButton
					class="ms-1.5 -me-1.5"
					{color}
					size={large ? 'sm' : 'xs'}
					ariaLabel="Remove badge"
					{onclick}
				/>
			{:else}
				<CloseButton
					class="ms-1.5 -me-1.5"
					{color}
					size={large ? 'sm' : 'xs'}
					ariaLabel="Remove badge"
					onclick={() => {
						badgeStatus = false;
					}}
				/>
			{/if}
		{/if}
	</div>
{/if}
