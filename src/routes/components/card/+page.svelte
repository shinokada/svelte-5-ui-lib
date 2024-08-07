<script lang="ts">
  import { Card, Button, Toggle, Label, Radio } from '$lib';

  let vCard = $state(false);
  let hCard = $state(false);
  $inspect('vCard: ', vCard, 'hCard: ', hCard);

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import {
    ArrowRightOutline,
    GiftBoxSolid,
    ArrowUpRightFromSquareOutline
  } from 'flowbite-svelte-icons';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  let cardSize: Card['size'] = $state('sm');
  const paddings = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];
  let cardPadding: Card['padding'] = $state('sm');
  const shadows = ['sm', 'normal', 'md', 'lg', 'xl', '2xl', 'inner', 'none'];
  let cardShadow: Card['shadow'] = $state('md');
</script>

<H1>Cards</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default card</H2>
<p>
  Use the `size` prop with <code>'xs' | 'sm' | 'md' | 'lg' | 'xl'</code> or
  <code>class</code> props to change the card size.
</p>

<CodeWrapper class="flex flex-col space-y-4">
  <div class="flex justify-center">
    <Card size={cardSize}>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions
      </h5>
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of so far, in
        reverse chronological order.
      </p>
    </Card>
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each sizes as size}
      <Radio
        labelClass="w-16 my-1"
        name="card_size"
        bind:group={cardSize}
        value={size}>{size}</Radio
      >
    {/each}
  </div>
  <Label class="mb-4 w-full font-bold">custom size</Label>
  <div class="flex justify-center">
    <Card class="max-w-[250px]">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Technology acquisitions
      </h5>
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions.
      </p>
    </Card>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-card.md'] as string} />

<H2>Padding</H2>
<CodeWrapper class="flex flex-col space-y-4">
  <div class="flex justify-center">
    <Card padding={cardPadding}>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions
      </h5>
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of so far, in
        reverse chronological order.
      </p>
    </Card>
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each paddings as padding}
      <Radio
        labelClass="w-16 my-1"
        name="card_padding"
        bind:group={cardPadding}
        value={padding}>{padding}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/padding.md'] as string} />

<H2>Shadow</H2>
<CodeWrapper class="flex flex-col space-y-4">
  <div class="flex justify-center">
    <Card shadow={cardShadow}>
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions
      </h5>
      <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of so far, in
        reverse chronological order.
      </p>
    </Card>
  </div>
  <div class="my-4 flex flex-wrap space-x-4">
    <Label class="mb-4 w-full font-bold">Size:</Label>
    {#each shadows as shadow}
      <Radio
        labelClass="w-16 my-1"
        name="card_shadow"
        bind:group={cardShadow}
        value={shadow}>{shadow}</Radio
      >
    {/each}
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/shadow.md'] as string} />

<H2>Card with action button</H2>

<CodeWrapper class="flex justify-center">
  <Card>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Noteworthy technology acquisitions
    </h5>
    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of so far, in
      reverse chronological order.
    </p>
    <Button class="w-fit">
      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
    </Button>
  </Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/card-with-action-button.md'] as string} />

<H2>Card with link</H2>

<p>
  To create a linkable card, use the <code>href</code> prop. However, avoid including
  an additional link inside the card itself, since you are adding a-tag within a-tag.
</p>

<CodeWrapper class="flex justify-center">
  <Card href="/">
    <GiftBoxSolid class="mb-3 h-7 w-7 text-gray-500 dark:text-gray-400" />
    <h5
      class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
    >
      Need a help in Claim?
    </h5>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      Go to this step by step guideline process on how to certify for your
      weekly benefits:
    </p>
    <span class="inline-flex items-center text-primary-600 hover:underline">
      See our guideline
      <ArrowUpRightFromSquareOutline class="ms-2.5 h-3 w-3" />
    </span>
  </Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/card-with-link.md'] as string} />

<H2>Card with image</H2>

<CodeWrapper class="flex justify-center">
  <div class="flex flex-col space-y-4">
    <Card
      img={{ src: '/images/image-1.webp', alt: 'my image' }}
      reverse={vCard}
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions
      </h5>
      <p
        class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
      >
        Here are the biggest enterprise technology acquisitions of so far, in
        reverse chronological order.
      </p>
      <Button>
        Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />
      </Button>
    </Card>
    <Toggle bind:checked={vCard} spanClass="italic dark:text-gray-500"
      >Reverse: {vCard}</Toggle
    >
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/card-with-image.md'] as string} />

<H2>Horizontal card</H2>

<CodeWrapper class="flex justify-center">
  <div class="flex flex-col space-y-4">
    <Card
      img={{ src: '/images/image-1.webp', alt: 'my image' }}
      href="/"
      reverse={hCard}
      horizontal
      size="md"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        Noteworthy technology acquisitions
      </h5>
      <p
        class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400"
      >
        Here are the biggest enterprise technology acquisitions of so far, in
        reverse chronological order.
      </p>
    </Card>
    <Toggle bind:checked={hCard} spanClass="italic dark:text-gray-500"
      >Reverse: {hCard}</Toggle
    >
  </div>
</CodeWrapper>

<HighlightCompo code={modules['./md/horizontal-card.md'] as string} />

<H2>Call to action card</H2>
<CodeWrapper class="flex justify-center">
  <Card class="text-center" size="lg" padding="xl">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
      Work fast from anywhere
    </h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
      Stay up to date and move work forward with Flowbite on iOS & Android.
      Download the app today.
    </p>
    <div
      class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse"
    >
      <Button>Download it</Button>
      <Button>Get it on</Button>
    </div>
  </Card>
</CodeWrapper>

<HighlightCompo code={modules['./md/call-to-action-card.md'] as string} />
