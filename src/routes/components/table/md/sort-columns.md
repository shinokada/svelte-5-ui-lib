<Table {items}>
	<TableHead>
		<TableHeadCell sort={(a, b) => a.id - b.id}>ID</TableHeadCell>
		<TableHeadCell sort={(a, b) => a.maker.localeCompare(b.maker)} defaultSort>Maker</TableHeadCell>
		<TableHeadCell sort={(a, b) => a.type.localeCompare(b.type)}>Type</TableHeadCell>
		<TableHeadCell sort={(a, b) => a.make - b.make} defaultDirection="desc">Make</TableHeadCell>
		<TableHeadCell><span class="sr-only">Edit</span></TableHeadCell>
	</TableHead>
	<TableBody>
		{#snippet row({ item }: { item: typeof items[number] })}
			<TableBodyRow>
				<TableBodyCell>{item.id}</TableBodyCell>
				<TableBodyCell>{item.maker}</TableBodyCell>
				<TableBodyCell>{item.type}</TableBodyCell>
				<TableBodyCell>{item.make}</TableBodyCell>
				<TableBodyCell>
					<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
				</TableBodyCell>
			</TableBodyRow>
		{/snippet}
	</TableBody>
</Table>