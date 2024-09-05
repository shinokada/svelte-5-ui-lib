<script lang="ts">
  import { Select, Label, Radio, Helper, Dropdown, DropdownUl, DropdownLi, uiHelpers, ButtonGroup, Button } from '$lib';
  import { CaretDownSolid, CaretUpSolid, ChevronDownOutline } from 'flowbite-svelte-icons';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import { sineIn } from 'svelte/easing';
  import Usa from '../../utils/icons/Usa.svelte';
  import Germany from '../../utils/icons/Germany.svelte';
  import Italy from '../../utils/icons/Italy.svelte';
  import China from '../../utils/icons/China.svelte';
  import { H3 } from '../../utils/heading';
  import MultiSelect from '$lib/forms/select/MultiSelect.svelte';
  import P from '$lib/typography/paragraph/P.svelte';
  import Kbd from '$lib/kbd/Kbd.svelte';
  import Badge from '$lib/badge/Badge.svelte';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
  interface Country {
    value: string;
    name: string;
    href?: string;
  }
  interface State {
    value: string;
    name: string;
  }

  let customSelected: State | undefined = $state();

  let countries: Country[] = [
    { value: 'us', name: 'United States', href: '/' },
    { value: 'ca', name: 'Canada', href: '/' },
    { value: 'fr', name: 'France', href: '/' }
  ];

  let states: State[] = [
    { value: 'CA', name: 'California' },
    { value: 'TX', name: 'Texas' },
    { value: 'WH', name: 'Washinghton' },
    { value: 'FL', name: 'Florida' },
    { value: 'VG', name: 'Virginia' },
    { value: 'GE', name: 'Georgia' },
    { value: 'MI', name: 'Michigan' }
  ];

  let transitionParams = {
    y: 0,
    duration: 100,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    // this can be done adding nav.navStatus directly to DOM element
    // without using effect
    dropdownStatus = dropdown.isOpen;
  });

  const sizes = ['sm', 'md', 'lg'];
  let selectSize: Select<any>['size'] = $state('md');
  const sizeDisplay: Record<Select<any>['size'], string> = {
    sm: 'Small',
    md: 'Medium',
    lg: 'Large'
  };
  let underline = $state(false);
  const changeUnderline = () => {
    underline = !underline;
  };
  let disabled = $state(false);
  const changeDiabled = () => {
    disabled = !disabled;
  };
  let selected = $state('');
  let bindValue = $state(false);
  const changeBindValue = () => {
    bindValue = !bindValue;
  };

  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      // let fileSlot = '';
      if (selectSize !== 'md') props.push(` size="${selectSize}"`);
      if (underline) props.push(' underline');
      if (disabled) props.push(' disabled');
      if (bindValue) props.push(' bind:value={selected}');

      const propsString = props.length > 0 ? props.map((prop) => `\n  ${prop}`).join('') + '\n' : '';

      return `<Select${propsString} />${bindValue ? '\nSelected value: {selected}' : ''}`;
    })()
  );
</script>

<H1>Select</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Select Builder</H2>
<CodeWrapper>
  <div class="h-32">
    <Label for="select-sm" class="mb-4">
      {#if disabled}Disabled{/if}
      {sizeDisplay[selectSize]} select
    </Label>
    <Select id="select-sm" size={selectSize} items={countries} {underline} {disabled} bind:value={selected} class="mb-2" />
    {#if bindValue}
      <Helper class="text-base">Selected value: {selected}</Helper>
    {/if}
  </div>
  <div class="flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as option}
      <Radio labelClass="w-24 my-1" name="input_size" bind:group={selectSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap gap-2">
    <Button class="w-40" onclick={changeUnderline}>{underline ? 'Default' : 'Underline'}</Button>
    <Button class="w-40" color="secondary" onclick={changeDiabled}>{disabled ? 'Enabled' : 'Disabled'}</Button>
    <Button class="w-40" color="rose" onclick={changeBindValue}>{bindValue ? 'Unbind' : 'Bind value'}</Button>
  </div>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Select with dropdown</H2>
<CodeWrapper innerClass="h-64">
  <ButtonGroup class="w-full">
    <Button onclick={dropdown.toggle}>
      <Usa />
      USA
      <ChevronDownOutline class="ms-2 h-6 w-6" />
    </Button>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[120px] top-[40px]">
        <DropdownUl>
          <DropdownLi aClass="flex items-center" href="/">
            <Usa />
            United States
          </DropdownLi>
          <DropdownLi aClass="flex items-center" href="/">
            <Germany />
            Germany
          </DropdownLi>
          <DropdownLi aClass="flex items-center" href="/">
            <Italy />
            Italy
          </DropdownLi>
          <DropdownLi aClass="flex items-center" href="/">
            <China />
            China
          </DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <Select items={states} placeholder="Choose the state" class="!rounded-s-none" />
  </ButtonGroup>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/select-with-dropdown.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>Custom options</H2>
<CodeWrapper>
  <Label for="countries">Select an option</Label>
  <Select id="countries" class="mt-2" bind:value={customSelected} placeholder="">
    <option selected value="all">All</option>
    {#each countries as { value, name }}
      <option {value}>{name}</option>
    {/each}
  </Select>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/custom-options.md'] as string} />
  {/snippet}
</CodeWrapper>

<H2>MultiSelect</H2>

<H3>Basic example</H3>
<CodeWrapper>
  <MultiSelect items={states} placeholder="Placeholder text" />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/default-multiselect.md'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Preselect values</H3>
<CodeWrapper>
  <MultiSelect items={states} value={['CA', 'FL']} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/multiselect-preselect.md'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Disabled MultiSelect</H3>
<CodeWrapper>
  <MultiSelect items={states} value={['CA', 'FL']} disabled />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/disabled-multiselect.md'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Disabled options</H3>
<CodeWrapper>
  <MultiSelect items={[
    { value: 'us', name: 'United States', disabled: true },
    { value: 'ca', name: 'Canada' },
    { value: 'fr', name: 'France', disabled: true },
    { value: 'jp', name: 'Japan' },
    { value: 'en', name: 'England' }
  ]} value={['fr', 'en']} />
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/disabled-options-multiselect.md'] as string} />
  {/snippet}
</CodeWrapper>

<H3>Keyboard Usage</H3>
<P>
  Some keyboard interaction was implemented. Use <Kbd class="inline-flex items-center px-2 py-1.5"><CaretUpSolid size="xs" /><span class="sr-only">Arrow key up</span></Kbd>/<Kbd class="inline-flex items-center px-2 py-1.5"><CaretDownSolid size="xs" /><span class="sr-only">Arrow key down</span></Kbd>
  to highlight an item, then press <Kbd class="inline-flex items-center px-2 py-1.5">Enter</Kbd> or
  <Kbd class="inline-flex items-center px-2 py-1.5">SpaceBar</Kbd> to toggle the selected item. Press
  <Kbd class="inline-flex items-center px-2 py-1.5">Esc</Kbd> to close the selection pop-up.
</P>

<H3>Customization</H3>
<CodeWrapper>
  <MultiSelect items={[
    { value: 'us', name: 'United States', color: 'indigo' },
    { value: 'ca', name: 'Canada', color: 'green' },
    { value: 'fr', name: 'France', color: 'blue' },
    { value: 'jp', name: 'Japan', color: 'red' },
    { value: 'en', name: 'England', color: 'yellow' }
  ] as const}>
    {#snippet badge({ item, clear })}
      <Badge color={item.color} large dismissable params={{ duration: 100 }} onclick={clear}>
        {item.name}
      </Badge>
    {/snippet}
  </MultiSelect>
  {#snippet codeblock()}
    <HighlightCompo code={modules['./md/custom-multiselect.md'] as string} />
  {/snippet}
</CodeWrapper>
