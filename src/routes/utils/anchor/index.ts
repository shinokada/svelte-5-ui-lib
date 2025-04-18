import Anchor from './Anchor.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { anchor } from './theme';

interface AnchorProps extends HTMLAttributes<HTMLHeadingElement> {
	children: Snippet;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	spanClass?: string;
	aClass?: string;
	class?: string;
}

export { Anchor, anchor, type AnchorProps };
