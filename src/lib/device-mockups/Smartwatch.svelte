<script lang="ts">
	import { type SmartwatchProps as Props, smartwatch } from '.';

	let {
		children,
		divClass,
		div2Class,
		div3Class,
		div4Class,
		div5Class,
		div6Class,
		...restProps
	}: Props = $props();

	const { div, top, rightTop, rightBot, bot, slot } = smartwatch();
</script>

<div {...restProps}>
	<div class={div({ class: divClass })}></div>
	<div class={top({ class: div2Class })}>
		<div class={rightTop({ class: div3Class })}></div>
		<div class={rightBot({ class: div4Class })}></div>
		<div class={slot({ class: div5Class })}>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</div>
	<div class={bot({ class: div6Class })}></div>
</div>
