import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

type BottomNavVariantType =
	| 'border'
	| 'application'
	| 'group'
	| 'default'
	| 'pagination'
	| 'card'
	| 'meeting'
	| 'video'
	| undefined;
type PositionType = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky' | undefined;
type BottomNavContextType = {
	activeClass: string | undefined | null;
};

type AppBtnPositionType = 'middle' | 'left' | 'right' | undefined;
interface BottomNavProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
	header?: Snippet;
	activeUrl?: string;
	position?: PositionType;
	navType?: BottomNavVariantType;
	outerClass?: string;
	innerClass?: string;
	activeClass?: string;
}

interface BaseBottomNavItemProps {
	children: Snippet;
	btnName?: string;
	appBtnPosition?: AppBtnPositionType;
	target?: string;
	activeClass?: string;
	btnClass?: string;
	spanClass?: string;
}
type BottomNavItemProps = BaseBottomNavItemProps &
	(({ href: string } & HTMLAnchorAttributes) | ({ href?: never } & HTMLButtonAttributes));

interface BottomNavHeaderProps {
	children: Snippet;
	outerClass?: string;
	innerClass?: string;
}

interface BottomNavHeaderItemProps extends HTMLButtonAttributes {
	itemName: string;
	active?: boolean;
	class?: string;
}

export {
	type BottomNavProps,
	type BottomNavItemProps,
	type BottomNavContextType,
	type BottomNavVariantType,
	type BottomNavHeaderProps,
	type BottomNavHeaderItemProps
};
