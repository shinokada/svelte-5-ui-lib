<script>
	import { Hr, P, Blockquote } from '$lib';
	import { QuoteSolid } from 'flowbite-svelte-icons';
	import HighlightCompo from '../../components/HighlightCompo.svelte';
	import CodeWrapper from '../../components/CodeWrapper.svelte';
	import H1 from '../../components/H1.svelte';
	import H2 from '../../components/H2.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Horizontal line (HR)</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default HR</H2>

<CodeWrapper>
	<P
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<Hr hrclass="my-8" />
	<P
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-hr.md']} />

<H2>Trimmed</H2>

<CodeWrapper>
	<P
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<Hr hrclass="w-48 h-1 mx-auto my-4 rounded md:my-10" />
	<P
		>Deliver great service experiences fast - without the complexity of traditional ITSM
		solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
		with a complete audit trail for every change.</P
	>
</CodeWrapper>

<HighlightCompo code={modules['./md/trimmed.md']} />

<H2>Icon HR</H2>

<CodeWrapper>
	<div class="text-center">
		<P
			>Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.</P
		>
		<Hr hrclass="my-8 w-64 h-1" icon>
			<QuoteSolid class="h-4 w-4 text-gray-700 dark:text-gray-300" />
		</Hr>
		<P
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon-hr.md']} />

<H2>HR with text</H2>

<CodeWrapper>
	<div class="text-center">
		<P
			>Track work across the enterprise through an open, collaborative platform. Link issues across
			Jira and ingest data from other software development tools, so your IT support and operations
			teams have richer contextual information to rapidly respond to requests, incidents, and
			changes.</P
		>
		<Hr hrclass="my-8 w-64">or</Hr>
		<P
			>Deliver great service experiences fast - without the complexity of traditional ITSM
			solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease,
			with a complete audit trail for every change.</P
		>
	</div>
</CodeWrapper>

<HighlightCompo code={modules['./md/hr-with-text.md']} />

<H2>HR with shape</H2>

<CodeWrapper>
	<P
		>Track work across the enterprise through an open, collaborative platform. Link issues across
		Jira and ingest data from other software development tools, so your IT support and operations
		teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P
	>
	<Hr hrclass="my-8 mx-auto w-8 h-8" />
	<Blockquote alignment="center">
		<p>
			"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."
		</p>
	</Blockquote>
</CodeWrapper>

<HighlightCompo code={modules['./md/hr-with-shape.md']} />