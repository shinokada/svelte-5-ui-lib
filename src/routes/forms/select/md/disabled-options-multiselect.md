<script>
  let countries = [
    { value: 'us', name: 'United States', disabled: true },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France', disabled: true },
    { value: 'jp', name: 'Japan' },
    { value: 'en', name: 'England' }
  ];
</script>
<MultiSelect items={countries} value={['fr', 'en']} />