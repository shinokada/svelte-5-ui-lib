import Table from './Table.svelte';
import TableBody from './TableBody.svelte';
import TableBodyCell from './TableBodyCell.svelte';
import TableBodyRow from './TableBodyRow.svelte';
import TableHeadCell from './TableHeadCell.svelte';
import TableHead from './TableHead.svelte';
import TableSearch from './TableSearch.svelte';
import type { Writable } from 'svelte/store';

type TableCtxType<T=unknown> = {
  striped?: boolean;
  hoverable?: boolean;
  noborder?: boolean;
  color?: TableColrType;
  items: Writable<T[] | undefined>;
  searchTerm: Writable<string>;
  filter: Writable<((item: T, searchTerm: string) => boolean) | undefined>;
  sorter: Writable<{sort: (a: T, b: T) => number, direction: -1 | 1, id: string} | undefined>;
};

type TableColrType = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'default' | 'indigo' | 'pink' | 'custom';

export { Table, TableBody, TableBodyCell, TableBodyRow, TableHeadCell, TableHead, TableSearch, type TableCtxType, type TableColrType };
