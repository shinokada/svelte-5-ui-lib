<script lang="ts">
  import { AccordionItem, Accordion, Button } from '$lib';
  import {
    ChevronDoubleUpOutline,
    ChevronDoubleDownOutline,
    CartSolid,
    CogOutline
  } from 'flowbite-svelte-icons';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  let alwaysOpenStatus: boolean = $state(true);
  // const items = $state(Array(3));
  let item0 = $state(false);
  let item1 = $state(false);
  let item2 = $state(false);
  const open_all = () => {
    item0 = true;
    item1 = true;
    item2 = true;
  };
  const close_all = () => {
    item0 = false;
    item1 = false;
    item2 = false;
  };
  let nestingOpenStatus: boolean = $state(true);
  // const open_all = () => items.forEach((_, i) => (items[i] = true));
  // const close_all = () => items.forEach((_, i) => (items[i] = false));
</script>

<H1>Accordion</H1>
<H2>Setup</H2>

<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default accordion</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem>
      {#snippet header()}
        My Header 1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a
          href="/"
          target="_blank"
          rel="noreferrer"
          class="text-blue-600 hover:underline dark:text-blue-500"
        >
          get started
        </a>
        and start developing websites even faster with components on top of Tailwind
        CSS.
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        My Header 2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            class="text-blue-600 hover:underline dark:text-blue-500"
          >
            Lorem ipsum
          </a>
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="noreferrer"
            target="_blank"
            class="text-blue-600 hover:underline dark:text-blue-500"
          >
            Tailwind UI
          </a>
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<HighlightCompo code={modules['./md/default-accordion.md'] as string} />

<H2>Open item</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem bind:open={alwaysOpenStatus}>
      {#snippet header()}
        Header 2-1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>
<HighlightCompo code={modules['./md/open-item.md'] as string} />

<H2>Color option</H2>
<CodeWrapper>
  <Accordion
    activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
    inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
  >
    <AccordionItem class="">
      {#snippet header()}
        Header 2-1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<HighlightCompo code={modules['./md/color-option.md'] as string} />

<H2>Flush accordion</H2>
<CodeWrapper>
  <Accordion flush>
    <AccordionItem>
      {#snippet header()}
        Header 2-1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<HighlightCompo code={modules['./md/flush-accordion.md'] as string} />

<H2>Arrow style</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem>
      {#snippet header()}
        Header 2-1
      {/snippet}
      {#snippet arrowup()}
        <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      {#snippet arrowdown()}
        <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        Header 2-2
      {/snippet}
      {#snippet arrowup()}
        <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      {#snippet arrowdown()}
        <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<HighlightCompo code={modules['./md/arrow-style.md'] as string} />

<H2>Icon Accordion</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem>
      {#snippet header()}
        <span class="flex gap-2 text-base">
          <CartSolid class="mt-0.5" />
          <span>My Header 1</span>
        </span>
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo...
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a
          href="/"
          target="_blank"
          rel="noreferrer"
          class="text-blue-600 hover:underline dark:text-blue-500"
        >
          get started
        </a>
        and start websites even faster with components on top of Tailwind CSS.
      </p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        <span class="flex gap-2 text-base">
          <CogOutline class="mt-0.5" />
          <span>My Header 2</span>
        </span>
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sintexplicabo...
      </p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>

<HighlightCompo code={modules['./md/icon-accordion.md'] as string} />

<H2>Multiple mode</H2>
<CodeWrapper>
  <Button onclick={open_all}>Open all</Button>
  <Button onclick={close_all}>Close all</Button>
  <Accordion class="mt-4">
    <AccordionItem bind:open={item0}>
      {#snippet header()}
        My Header 1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to <a
          href="/"
          target="_blank"
          rel="noreferrer"
          class="text-blue-600 hover:underline dark:text-blue-500"
        >
          get started
        </a>
        and start developing websites even faster with components on top of Tailwind
        CSS.
      </p>
    </AccordionItem>
    <AccordionItem bind:open={item1}>
      {#snippet header()}
        My Header 2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
    </AccordionItem>
    <AccordionItem bind:open={item2}>
      {#snippet header()}
        My Header 3
      {/snippet}
      <p>Something more</p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>
<HighlightCompo code={modules['./md/multiple-mode.md'] as string} />

<H2>Custom transitions</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem>
      {#snippet header()}
        My Header 1
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem transitionParams={{ duration: 2000 }}>
      {#snippet header()}
        My Header 2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
    <AccordionItem transitionType="fade" transitionParams={{ duration: 1000 }}>
      {#snippet header()}
        My Header 3
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </AccordionItem>
  </Accordion>
</CodeWrapper>
<HighlightCompo code={modules['./md/custom-transitions.md'] as string} />

<H2>Nesting accordions</H2>
<CodeWrapper>
  <Accordion>
    <AccordionItem bind:open={nestingOpenStatus}>
      {#snippet header()}
        My Header 1
      {/snippet}
      <Accordion>
        <AccordionItem>
          {#snippet header()}
            My Header 1
          {/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            necessitatibus sint explicabo ...
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to <a
              href="/"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 hover:underline dark:text-blue-500"
              >get started</a
            > and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </AccordionItem>
        <AccordionItem>
          {#snippet header()}
            My Header 2
          {/snippet}
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            necessitatibus sint explicabo ...
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            necessitatibus sint explicabo ...
          </p>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these technologies:
          </p>
          <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                class="text-blue-600 hover:underline dark:text-blue-500"
                >Lorem ipsum</a
              >
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="noreferrer"
                target="_blank"
                class="text-blue-600 hover:underline dark:text-blue-500"
                >Tailwind UI</a
              >
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        My Header 2
      {/snippet}
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
      </p>
      <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">
        <li>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            class="text-blue-600 hover:underline dark:text-blue-500"
            >Lorem ipsum</a
          >
        </li>
        <li>
          <a
            href="https://tailwindui.com/"
            rel="noreferrer"
            target="_blank"
            class="text-blue-600 hover:underline dark:text-blue-500"
            >Tailwind UI</a
          >
        </li>
      </ul>
    </AccordionItem>
  </Accordion>
</CodeWrapper>
<HighlightCompo code={modules['./md/nesting-accordions.md'] as string} />
