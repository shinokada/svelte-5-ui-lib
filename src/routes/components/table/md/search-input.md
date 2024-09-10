<Table {items} searchPlaceholder="Search by maker name" hoverable={true} filter={(item, searchTerm) => item.maker.toLowerCase().includes(searchTerm.toLowerCase())} bind:searchTerm>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Maker</TableHeadCell>
    <TableHeadCell>Type</TableHeadCell>
    <TableHeadCell>Make</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#snippet row({ item }: { item: typeof items[number] })}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.maker}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/snippet}
  </TableBody>
</Table>