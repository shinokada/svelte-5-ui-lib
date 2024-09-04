<script>
  let states = [
    { value: 'CA', name: 'California' },
    { value: 'TX', name: 'Texas' },
    { value: 'WH', name: 'Washinghton' },
    { value: 'FL', name: 'Florida' },
    { value: 'VG', name: 'Virginia' },
    { value: 'GE', name: 'Georgia' },
    { value: 'MI', name: 'Michigan' }
  ];
</script>
<MultiSelect items={states} value={['CA', 'FL']} disabled />