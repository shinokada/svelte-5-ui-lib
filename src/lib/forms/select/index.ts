import Select from './Select.svelte';
import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes, HTMLAttributes } from 'svelte/elements';
import { select, multiSelect } from './theme';

type SelectOptionType<T> = {
  name: string | number;
  value: T;
};

interface SelectProps<T extends string | number> extends Omit<HTMLSelectAttributes, 'size'> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  value?: T;
  underline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
}

interface MultiSelectProps<T extends string | number> extends Omit<HTMLAttributes<HTMLSelectElement>, "children" | "onclick"> {
  children?: Snippet<[{ item: SelectOptionType<T>, clear: () => void }]>;
  items: SelectOptionType<T>[];
  value?: T[];
  size?: 'sm' | 'md' | 'lg';
  dropdownClass?: string;
  placeholder?: string;
  change?: (event: Event) => void;
  onclick?: (event: MouseEvent & { currentTarget: EventTarget & HTMLDivElement }) => void;
}

export { Select, select, multiSelect, type SelectProps, type SelectOptionType, type MultiSelectProps };
