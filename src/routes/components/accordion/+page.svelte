<script>
  import { AccordionItem, Accordion } from '$lib';
  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline, CartSolid, CogOutline  } from 'flowbite-svelte-icons';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Accordion</H1>
<H2>Default accordion</H2>
<CodeWrapper>
<Accordion>
  <AccordionItem>
    {#snippet header()}
      My Header 1
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="text-gray-500 dark:text-gray-400">
      Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
      and start developing websites even faster with components on top of Tailwind CSS.
    </p>
  </AccordionItem>
  <AccordionItem>
    {#snippet header()}
      My Header 2
    {/snippet}
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
    <ul class="list-disc ps-5 dark:text-gray-400 text-gray-500">
      <li>
        <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> Lorem ipsum </a>
      </li>
      <li>
        <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline"> Tailwind UI </a>
      </li>
    </ul>
  </AccordionItem>
</Accordion>
</CodeWrapper>

<H2>Always open</H2>
<CodeWrapper>
  TBD
</CodeWrapper>

<H2>Color option</H2>
<CodeWrapper>
  <Accordion activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
    <AccordionItem class="">
      {#snippet header()}
      Header 2-1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<H2>Flush accordion</H2>
<CodeWrapper>
  <Accordion flush>
    <AccordionItem>
      {#snippet header()}
        Header 2-1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<H2>Arrow style</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem>
      {#snippet header()}
      Header 2-1
      {/snippet}
      {#snippet arrowup()}
        <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
      {/snippet}
      {#snippet arrowdown()}
        <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      {#snippet arrowup()}
        <ChevronDoubleUpOutline class="h-6 w-6 -me-0.5" />
      {/snippet}
      {#snippet arrowdown()}
        <ChevronDoubleDownOutline class="h-6 w-6 -me-0.5" />
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<H2>Icon Accordion</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem>
      {#snippet header()}
      <span class="text-base flex gap-2">
        <CartSolid class="mt-0.5" />
        <span>My Header 1</span>
      </span>
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline"> get started </a>
        and start websites even faster with components on top of Tailwind CSS.
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
      <span class="text-base flex gap-2">
        <CogOutline class="mt-0.5" />
        <span>My Header 2</span>
      </span>
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<H2>Multiple mode</H2>
<CodeWrapper>
  TBD
</CodeWrapper>

<H2>Custom transitions</H2>
<CodeWrapper>
  TBD
</CodeWrapper>

<H2>Nesting accordians</H2>
<CodeWrapper>
  TBD
</CodeWrapper>