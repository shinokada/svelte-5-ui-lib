<script lang="ts">
	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	// Props table
	import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
	const dirName = 'accordion';

	// for examples section that dynamically changes the svelte component and svelteCode content
	import * as ExampleComponents from './examples';
	const exampleModules = import.meta.glob('./examples/*.svelte', {
		query: '?raw',
		import: 'default',
		eager: true
	}) as Record<string, string>;
</script>

<H1>Accordion</H1>

<H2>Default Accordion</H2>

<CodeWrapper>
	<ExampleComponents.Default />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Default.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Open</H2>

<CodeWrapper>
	<ExampleComponents.Open />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Open.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Color</H2>
<CodeWrapper>
	<ExampleComponents.Color />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Color.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Flush</H2>
<CodeWrapper>
	<ExampleComponents.Flush />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Flush.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Arrow style</H2>
<CodeWrapper>
	<ExampleComponents.ArrowStyle />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/ArrowStyle.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Icon (animated icons)</H2>
<CodeWrapper>
	<ExampleComponents.Icon />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Icon.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Multiple mode</H2>
<CodeWrapper>
	<ExampleComponents.MultipleMode />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/MultipleMode.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Transitions</H2>
<CodeWrapper>
	<ExampleComponents.Transitions />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/Transitions.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Nesting</H2>
<CodeWrapper>
	<ExampleComponents.Nesting />
	{#snippet codeblock()}
		<HighlightCompo codeLang="ts" code={exampleModules['./examples/Nesting.svelte'] as string} />
	{/snippet}
</CodeWrapper>

<H2>Open multiple</H2>
<CodeWrapper>
	<ExampleComponents.OpenMultiple />
	{#snippet codeblock()}
		<HighlightCompo
			codeLang="ts"
			code={exampleModules['./examples/OpenMultiple.svelte'] as string}
		/>
	{/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
