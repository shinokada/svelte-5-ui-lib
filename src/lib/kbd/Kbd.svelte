<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { kbd, type KbdProps as Props } from '.';

	let { children, class: kbdClass, ...restProps }: Props = $props();
	const kbdCls = kbd();
</script>

<kbd {...restProps} class={twMerge(kbdCls, kbdClass)}>
	{@render children()}
</kbd>
