<script lang="ts">
	import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from '$lib';
</script>

<Table hoverable>
	<TableHead>
		<TableHeadCell>Product name</TableHeadCell>
		<TableHeadCell>Color</TableHeadCell>
		<TableHeadCell>Category</TableHeadCell>
		<TableHeadCell>Price</TableHeadCell>
		<TableHeadCell>
			<span class="sr-only">Edit</span>
		</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y">
		<TableBodyRow>
			<TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
			<TableBodyCell>Sliver</TableBodyCell>
			<TableBodyCell>Laptop</TableBodyCell>
			<TableBodyCell>$2999</TableBodyCell>
			<TableBodyCell>
				<a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
					>Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Microsoft Surface Pro</TableBodyCell>
			<TableBodyCell>White</TableBodyCell>
			<TableBodyCell>Laptop PC</TableBodyCell>
			<TableBodyCell>$1999</TableBodyCell>
			<TableBodyCell>
				<a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
					>Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Magic Mouse 2</TableBodyCell>
			<TableBodyCell>Black</TableBodyCell>
			<TableBodyCell>Accessories</TableBodyCell>
			<TableBodyCell>$99</TableBodyCell>
			<TableBodyCell>
				<a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
					>Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Google Pixel Phone</TableBodyCell>
			<TableBodyCell>Gray</TableBodyCell>
			<TableBodyCell>Phone</TableBodyCell>
			<TableBodyCell>$799</TableBodyCell>
			<TableBodyCell>
				<a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
					>Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
		<TableBodyRow>
			<TableBodyCell>Apple Watch 5</TableBodyCell>
			<TableBodyCell>Red</TableBodyCell>
			<TableBodyCell>Wearables</TableBodyCell>
			<TableBodyCell>$999</TableBodyCell>
			<TableBodyCell>
				<a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline"
					>Edit</a
				>
			</TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>
