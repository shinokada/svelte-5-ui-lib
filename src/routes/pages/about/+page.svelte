<script lang="ts">
	import { P, A, List, Li } from '$lib';
	import { removeHyphensAndCapitalize } from '../../utils/helpers';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';

	const name = __NAME__;
	const svelte5uilibVersion = __VERSION__;
	const svelteVersion = __SVELTEVERSION__;
	const svelteKitVersion = __SVELTEKITVERSION__;
	const viteVersion = __VITEVERSION__;
	const tailwindcssVersion = __TAILWINDCSSVERSION__;
</script>

<div class="p-4">
	<H1>About</H1>

	<P>Svelte 5 UI Lib – a UI library for Svelte 5 and built upon Flowbite/svelte-5-ui-lib.</P>

	<H2>Techinical info</H2>
	<List>
		<Li
			><A href="https://svelte-5-ui-lib.codewithshin.com/"
				>{removeHyphensAndCapitalize(name)}: {svelte5uilibVersion}</A
			></Li
		>
		<Li
			><A href="https://svelte-5-preview.codewithshin.com/docs/introduction"
				>Svelte 5: {svelteVersion}</A
			></Li
		>
		<Li><A href="https://kit.svelte.dev/">Svelte Kit: {svelteKitVersion}</A></Li>
		<Li><A href="https://tailwindcss.com/">Tailwind css: {tailwindcssVersion}</A></Li>
		<Li><A href="https://vitejs.dev/">Vite: {viteVersion}</A></Li>
	</List>

	<H2>Repo</H2>
	<List>
		<Li><A href="https://github.com/shinokada/svelte-5-ui-lib">GitHub</A></Li>
		<Li><A href="https://codewithshin.com">codewithshin</A></Li>
	</List>
</div>
