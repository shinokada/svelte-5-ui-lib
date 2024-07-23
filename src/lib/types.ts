import type {
  HTMLAnchorAttributes,
  HTMLButtonAttributes
} from 'svelte/elements';

export declare const xs = 'xs';
export declare const sm = 'sm';
export declare const md = 'md';
export declare const lg = 'lg';
export declare const xl = 'xl';

// a
// b
export type BlockQuoteType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type BottomNavVariantType =
  | 'default'
  | 'border'
  | 'application'
  | 'pagination'
  | 'group'
  | 'card'
  | 'meeting'
  | 'video';
  
export interface ButtonClassesTypes {
    default?: string | undefined | null;
    border?: string | undefined | null;
    application?: string | undefined | null;
    pagination?: string | undefined | null;
    group?: string | undefined | null;
    card?: string | undefined | null;
    meeting?: string | undefined | null;
    video?: string | undefined | null;
    custom?: string | undefined | null;
  }

export type ButtonColorType =
  | 'alternative'
  | 'blue'
  | 'dark'
  | 'green'
  | 'light'
  | 'primary'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'none';

// c
export type CloseButtonColorType =
  | 'dark'
  | 'default'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'blue'
  | 'primary'
  | 'none';

export type ColorVariant =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'blue'
  | 'primary'
  | 'none';

// d
export type DeviceVariantType =
  | 'default'
  | 'ios'
  | 'android'
  | 'tablet'
  | 'laptop'
  | 'desktop'
  | 'smartwatch';

export interface Dismissable {
    dismissable?: boolean;
  }

export interface drawerTransitionParamTypes {
  amount?: number;
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  opacity?: number;
  x?: number;
  y?: number;
}

export type drawerTransitionTypes =
  | 'fade'
  | 'fly'
  | 'slide'
  | 'blur'
  | 'in:fly'
  | 'out:fly'
  | 'in:slide'
  | 'out:slide'
  | 'in:fade'
  | 'out:fade'
  | 'in:blur'
  | 'out:blur'
  | undefined;

// e
// f
export type FormColorType =
  | 'blue'
  | 'red'
  | 'green'
  | 'purple'
  | 'teal'
  | 'yellow'
  | 'orange'
  | 'primary'
  | 'secondary';

export declare type FormSizeType = typeof sm | typeof md | typeof lg;

export type FrameColor = keyof typeof bgColors;
const bgColors = {
  gray: 'bg-gray-50 dark:bg-gray-800',
  red: 'bg-red-50 dark:bg-gray-800',
  yellow: 'bg-yellow-50 dark:bg-gray-800 ',
  green: 'bg-green-50 dark:bg-gray-800 ',
  indigo: 'bg-indigo-50 dark:bg-gray-800 ',
  purple: 'bg-purple-50 dark:bg-gray-800 ',
  pink: 'bg-pink-50 dark:bg-gray-800 ',
  blue: 'bg-blue-50 dark:bg-gray-800 ',
  light: 'bg-gray-50 dark:bg-gray-700',
  dark: 'bg-gray-50 dark:bg-gray-800',
  default: 'bg-white dark:bg-gray-800',
  dropdown: 'bg-white dark:bg-gray-700',
  navbar: 'bg-white dark:bg-gray-900',
  navbarUl: 'bg-gray-50 dark:bg-gray-800',
  form: 'bg-gray-50 dark:bg-gray-700',
  primary: 'bg-primary-50 dark:bg-gray-800 ',
  orange: 'bg-orange-50 dark:bg-orange-800',
  none: ''
};
// g
// h
// i
export type IndicatorPlacementType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | undefined;

// j
// k
// l
export interface ListGroupItemType {
  index?: number;
  current?: boolean;
  disabled?: boolean;
  href?: string | undefined | null;
  attrs?: HTMLAnchorAttributes | HTMLButtonAttributes;
  [propName: string]: any;
}
// m
export type ModalPlacementType = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

// n
export type navbarType = {
  navStatus: boolean | undefined;
  breakPoint: 'md' | 'lg' | 'xl' | 'xxl';
  activeClass: string | undefined | null;
  nonActiveClass: string | undefined | null;
  closeNav: () => void;
};

// o
// p
export type ProgressBarColorType =
  | 'primary'
  | 'blue'
  | 'gray'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'indigo';

export type PsizeType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

export type PweightType =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

// q
// r
// s
export type SidebarType = {
  activeClass: string | undefined | null;
  nonActiveClass: string | undefined | null;
};

export declare type SizeType =
  | typeof xs
  | typeof sm
  | typeof md
  | typeof lg
  | typeof xl;

export type SpaceType =
  | 'tighter'
  | 'tight'
  | 'normal'
  | 'wide'
  | 'wider'
  | 'widest'
  | undefined;

export type SpinnerColorType =
  | 'primary'
  | 'blue'
  | 'gray'
  | 'green'
  | 'red'
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'white'
  | 'custom';
// t
export type ToastPositionType =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'none';

export type ToolbarButtonType =
  | 'dark'
  | 'default'
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'blue';

export interface TransitionParamTypes {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  css?: (t: number, u: number) => string | undefined | null;
  tick?: (t: number, u: number) => void;
}

export type TransitionTypes =
  | 'fade'
  | 'fly'
  | 'slide'
  | 'blur'
  | 'in:fly'
  | 'out:fly'
  | 'in:slide'
  | 'out:slide'
  | 'in:fade'
  | 'out:fade'
  | 'in:blur'
  | 'out:blur';

// u
// v
// w