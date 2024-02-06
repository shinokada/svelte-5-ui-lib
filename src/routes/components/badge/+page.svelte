<script>
	import { Badge, Button, Indicator } from '$lib';
	import { ClockSolid, EnvelopeSolid, CheckOutline, CloseSolid } from 'flowbite-svelte-icons';

	import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
	import H3 from '../../utils/H3.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Badge</H1>
<H2>Setup</H2>
<HighlightCompo codeLang="ts" code={modules['./md/setup.md']} />

<H2>Default badge</H2>
<CodeWrapper>
	<Badge>Default</Badge>
	<Badge color="dark">Dark</Badge>
	<Badge color="red">Red</Badge>
	<Badge color="green">Green</Badge>
	<Badge color="yellow">Yellow</Badge>
	<Badge color="indigo">Indigo</Badge>
	<Badge color="purple">Purple</Badge>
	<Badge color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/default-badge.md']} />

<H2>Large badge</H2>
<CodeWrapper>
	<Badge large>Default</Badge>
	<Badge large color="dark">Dark</Badge>
	<Badge large color="red">Red</Badge>
	<Badge large color="green">Green</Badge>
	<Badge large color="yellow">Yellow</Badge>
	<Badge large color="indigo">Indigo</Badge>
	<Badge large color="purple">Purple</Badge>
	<Badge large color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/large-badge.md']} />

<H2>Bordered badge</H2>
<CodeWrapper>
	<Badge border>Default</Badge>
	<Badge border color="dark">Dark</Badge>
	<Badge border color="red">Red</Badge>
	<Badge border color="green">Green</Badge>
	<Badge border color="yellow">Yellow</Badge>
	<Badge border color="indigo">Indigo</Badge>
	<Badge border color="purple">Purple</Badge>
	<Badge border color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/bordered-badge.md']} />

<H2>Pills badge</H2>
<CodeWrapper>
	<Badge rounded>Default</Badge>
	<Badge rounded color="dark">Dark</Badge>
	<Badge rounded color="red">Red</Badge>
	<Badge rounded color="green">Green</Badge>
	<Badge rounded color="yellow">Yellow</Badge>
	<Badge rounded color="indigo">Indigo</Badge>
	<Badge rounded color="purple">Purple</Badge>
	<Badge rounded color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/pills-badge.md']} />

<H2>Badge as links</H2>
<CodeWrapper>
	<Badge href="/">Badge link</Badge>
	<Badge href="/" large>Badge link</Badge>
	<Badge href="/" border>Badge link</Badge>
	<Badge href="/" rounded>Badge link</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/badge-as-links.md']} />

<H2>Badge with icon</H2>
<CodeWrapper>
	<Badge color="dark" border>
		<ClockSolid class="me-1.5 h-2.5 w-2.5" />
		3 days ago
	</Badge>
	<Badge border>
		<ClockSolid class="me-1.5 h-2.5 w-2.5 text-primary-800 dark:text-primary-400" />
		2 minutes ago
	</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/badge-with-icon.md']} />

<H2>Notification badge</H2>
<CodeWrapper class="space-x-4">
	<Button btnclass="relative" size="sm">
		<EnvelopeSolid class="text-white dark:text-white" />
		<span class="sr-only">Notifications</span>
		<Indicator color="blue" border size="xl" placement="top-right" divclass="text-xs font-bold"
			>18</Indicator
		>
	</Button>

	<Button btnclass="relative" size="sm">
		<EnvelopeSolid class="text-white dark:text-white" />
		<span class="sr-only">Notifications</span>
		<Indicator color="red" border size="xl" placement="top-right" divclass="text-xs font-bold"
			>20</Indicator
		>
	</Button>

	<Button btnclass="relative" size="sm">
		<EnvelopeSolid class="text-white dark:text-white" />
		<span class="sr-only">Notifications</span>
		<Indicator color="dark" border size="xl" placement="bottom-right" divclass="text-xs font-bold"
			>20</Indicator
		>
	</Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/notification-badge.md']} />

<H2>Button with badge</H2>
<CodeWrapper>
	<Button>
		Messages
		<Badge
			rounded
			divclass="w-4 h-4 ms-2 p-0 font-semibold text-primary-800 bg-white dark:text-primary-800 dark:bg-white"
			>2</Badge
		>
	</Button>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/button-with-badge.md']} />

<H2>Badge with icon only</H2>
<CodeWrapper>
	<Badge color="dark" rounded large divclass="!p-1 !font-semibold">
		<CheckOutline class="h-3 w-3" />
		<span class="sr-only">Icon description</span>
	</Badge>
	<Badge rounded large divclass="!p-1 !font-semibold">
		<CheckOutline class="h-3 w-3 text-primary-800 dark:text-primary-400" />
		<span class="sr-only">Icon description</span>
	</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/badge-with-icon-only.md']} />

<H2>Dismissable badge</H2>
<CodeWrapper class="space-x-4">
	<Badge dismissable large>Default</Badge>
	<Badge dismissable large color="dark">Dark</Badge>
	<Badge dismissable large color="red">Red</Badge>
	<Badge dismissable large color="green">Green</Badge>
	<Badge dismissable large color="yellow">Yellow</Badge>
	<Badge dismissable large color="indigo">Indigo</Badge>
	<Badge dismissable large color="purple">Purple</Badge>
	<Badge dismissable large color="pink">Pink</Badge>
</CodeWrapper>
<HighlightCompo codeLang="ts" code={modules['./md/dismissable-badge.md']} />