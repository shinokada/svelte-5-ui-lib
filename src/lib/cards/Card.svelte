<script lang="ts">
	import { card, type CardProps as Props } from '.';
	import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	let {
		children,
		href,
		color = 'gray',
		horizontal = false,
		shadow = 'md',
		reverse = false,
		img,
		padding = 'lg',
		size = 'sm',
		class: className,
		imgClass,
		contentClass,
		...restProps
	}: Props = $props();

	const { base, image, content } = $derived(
		card({
			size,
			color,
			shadow,
			padding,
			horizontal,
			reverse,
			href: !!href
		})
	);

	/* eslint-disable  @typescript-eslint/no-explicit-any */
	const commonProps: Record<string, any> = $derived({
		class: base({ class: className }),
		...restProps
	});

	const anchorProps: HTMLAnchorAttributes = $derived({
		...commonProps,
		href
	});

	const divProps: HTMLAttributes<HTMLDivElement> = $derived({
		...commonProps
	});
</script>

{#snippet childSlot()}
	{#if img}
		<img class={image({ class: imgClass })} src={img.src} alt={img.alt} />
		<div class={content({ class: contentClass })}>
			{@render children()}
		</div>
	{:else}
		<div class={content({ class: contentClass })}>
			{@render children()}
		</div>
	{/if}
{/snippet}

{#if href}
	<a {...anchorProps}>
		{@render childSlot()}
	</a>
{:else}
	<div {...divProps}>
		{@render childSlot()}
	</div>
{/if}
