<script lang="ts">
  import { Select, Label, Helper } from '$lib';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';

  let selected: any = $state();
  let countries = [
    { value: 'us', name: 'United States' },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France' }
  ];
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Select</H1>

<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Select input example</H2>

<CodeWrapper class="h-48">
  <Label>
    Select an option
    <Select selectClass="mt-2" items={countries} bind:value={selected} />
  </Label>
  <Helper class="mt-2">Your selected value is: {selected}</Helper>
</CodeWrapper>

<HighlightCompo code={modules['./md/defaultselect.md'] as string} />

<H2>Disabled state</H2>

<CodeWrapper class="h-48">
  <Label for="select-disabled" color="disabled" class="mb-2"
    >Disabled select</Label
  >
  <Select
    id="select-disabled"
    disabled
    items={countries}
    placeholder="You can't select anything..."
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/disabled.md'] as string} />

<H2>Underline select</H2>

<CodeWrapper class="h-48">
  <Label for="select-underline" class="sr-only">Underline select</Label>
  <Select
    id="select-underline"
    underline
    selectClass="mt-2"
    items={countries}
  />
</CodeWrapper>

<HighlightCompo code={modules['./md/underline.md'] as string} />
