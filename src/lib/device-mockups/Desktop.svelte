<script lang="ts">
	import { type MockupBaseProps as Props, desktop } from '.';

	let { children, divClass, div2Class, div3Class, div4Class, ...restProps }: Props = $props();

	const { div, inner, bot, botUnder } = desktop();
</script>

<div {...restProps} class={div({ class: divClass })}>
	<div class={inner({ class: div2Class })}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
<div class={bot({ class: div3Class })}></div>
<div class={botUnder({ class: div4Class })}></div>
