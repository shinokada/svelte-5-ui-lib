<script>
  const items = [
    { value: 'us', name: 'United States', color: 'indigo' },
    { value: 'ca', name: 'Canada', color: 'green' },
    { value: 'fr', name: 'France', color: 'blue' },
    { value: 'jp', name: 'Japan', color: 'red' },
    { value: 'en', name: 'England', color: 'yellow' }
  ] as const;
</script>

<MultiSelect {items}>
  {#snippet badge({ item, clear })}
    <Badge color={item.color} large dismissable params={{ duration: 100 }} onclick={clear}>
      {item.name}
    </Badge>
  {/snippet}
</MultiSelect>