import { type VariantProps } from 'tailwind-variants';
import Blockquote from './Blockquote.svelte';
import type { Snippet } from 'svelte';
import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import { blockquote } from './theme';

type SizeType = VariantProps<typeof blockquote>['size'];

interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  italic?: boolean;
  borderClass?: string | undefined;
  bgClass?: string | undefined;
  bg?: boolean;
  baseClass?: string | undefined;
  alignment?: 'left' | 'center' | 'right';
  size?: SizeType;
  class?: string | undefined;
}

export { Blockquote, blockquote, type BlockquoteProps };
