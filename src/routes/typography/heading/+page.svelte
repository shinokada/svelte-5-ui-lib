<script lang="ts">
	import { type Component } from 'svelte';
	import {
		Heading,
		Button,
		Label,
		Radio,
		Input,
		CloseButton,
		uiHelpers,
		type HeadingProps
	} from '$lib';
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import DynamicCodeBlockHighlight from '../../utils/DynamicCodeBlockHighlight.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import { isSvelteOverflow, getExampleFileName } from '../../utils/helpers';
	// for Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'typography/heading';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;

	const exampleArr = [
		{ name: 'Default', component: ExampleComponents.Default },
		{ name: 'Badge', component: ExampleComponents.Badge },
		{ name: 'Breadcrumb', component: ExampleComponents.Breadcrumb },
		{ name: 'Gradient', component: ExampleComponents.Gradient },
		{ name: 'Highlighted', component: ExampleComponents.Highlighted },
		{ name: 'Mark', component: ExampleComponents.Mark },
		{ name: 'Secondary', component: ExampleComponents.Secondary },
		{ name: 'Second level', component: ExampleComponents.SecondLevel },
		{ name: 'Underline', component: ExampleComponents.Underline }
	];
	let selectedExample: string | number = $state(exampleArr[0].name);
	let svelteCode = $derived(getExampleFileName(selectedExample, exampleArr));

	function findObject(arr: { name: string; component: Component }[], name: string) {
		const matchingObject = arr.find((obj) => obj.name === name);
		return matchingObject ? matchingObject.component : null;
	}
	const SelectedComponent = $derived(findObject(exampleArr, selectedExample));
	// end of dynamic svelte component

	const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	let headingTag: HeadingProps['tag'] = $state('h1');
	let headingCls = $state('text-primary-700 dark:text-primary-500');
	const changeHeadingCls = () => {
		headingCls =
			headingCls === 'text-primary-700 dark:text-primary-500'
				? 'text-blue-500 dark:text-blue-400 uppercase italic underline text-center font-semibold bg-gray-50 dark:bg-gray-700 p-4'
				: 'text-primary-700 dark:text-primary-500';
	};

	let { text = $bindable('My heading') } = $props();
	// code generator
	let generatedCode = $derived(
		(() => {
			let props = [];
			if (headingTag) props.push(` tag="${headingTag}"`);
			if (headingCls) props.push(` class="${headingCls}"`);
			const propsString =
				props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

			return `<Heading${propsString}>
  ${text}
</Headin>`;
		})()
	);
	// for DynamicCodeBlock setup for examples section. dynamically adjust the height of the code block based on the svelteCode content.
	let codeBlock = uiHelpers();
	let expand = $state(false);
	let showExpandButton = $derived(isSvelteOverflow(svelteCode, exampleModules));

	const handleExpandClick = () => {
		expand = !expand;
	};
	$effect(() => {
		expand = codeBlock.isOpen;
	});
	// end of DynamicCodeBlock setup
</script>

<H1>Heading & Mark</H1>

<H2>Setup</H2>
<HighlightCompo code={exampleModules[`./examples/Setup.svelte`] as string} />

<H2>Sizes</H2>
<CodeWrapper>
	<Label class="text-md mb-2">Edit heading</Label>
	<Input type="text" bind:value={text} placeholder="Write your blockquote text" class="mb-8 pr-12">
		{#snippet right()}
			<CloseButton onclick={() => (text = '')} />
		{/snippet}
	</Input>
	<div class="h-24">
		<Heading tag={headingTag} class={headingCls}>{text}</Heading>
	</div>
	<div class="mb-4 flex flex-wrap space-x-2">
		<Label class="mb-4 w-full font-bold">Rounded</Label>
		{#each tags as tag}
			<Radio labelClass="w-12 my-1" name="tag" bind:group={headingTag} value={tag}>{tag}</Radio>
		{/each}
	</div>
	<div class="flex flex-wrap justify-center gap-2 md:justify-start">
		<Button class="w-40" color="blue" onclick={changeHeadingCls}
			>{headingCls !== 'text-primary-700 dark:text-primary-500'
				? 'Original class'
				: 'Change class'}</Button
		>
	</div>
	{#snippet codeblock()}
		<HighlightCompo code={generatedCode} />
	{/snippet}
</CodeWrapper>

<H2>Examples</H2>

<CodeWrapper>
	<div class="mb-8 flex flex-wrap">
		<Label class="mb-4 w-full font-bold">Example</Label>
		{#each exampleArr as style}
			<Radio
				labelClass="w-28 my-1"
				onclick={() => (expand = false)}
				name="block_style"
				bind:group={selectedExample}
				value={style.name}>{style.name}</Radio
			>
		{/each}
	</div>
	<SelectedComponent />
	{#snippet codeblock()}
		<DynamicCodeBlockHighlight
			replaceLib
			{handleExpandClick}
			{expand}
			{showExpandButton}
			code={exampleModules[`./examples/${svelteCode}`] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
