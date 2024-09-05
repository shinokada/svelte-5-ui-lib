<script>
  import { Select, MultiSelect } from 'svelte-5-ui-lib';
  let selected: any = $state();
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
</script>