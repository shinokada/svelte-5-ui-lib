<script lang="ts">
  import { DeviceMockup } from '$lib';
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

<H1>Device mockup</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Default mockup</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup>
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="h-[572px] w-[272px] dark:hidden"
      alt="default example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden h-[572px] w-[272px] dark:block"
      alt="default example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-mockup.md'] as string} />

<H2>iPhone 12 mockup (iOS)</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup device="ios">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
      class="h-[572px] w-[272px] dark:hidden"
      alt="ios example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
      class="hidden h-[572px] w-[272px] dark:block"
      alt="ios example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/iphone-12-mockup.md'] as string} />

<H2>Google Pixel mockup (Android)</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup device="android">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="h-[572px] w-[272px] dark:hidden"
      alt="android example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden h-[572px] w-[272px] dark:block"
      alt="android example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/google-pixel-mockup.md'] as string} />

<H2>Tablet mockup</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup device="tablet">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
      class="h-[426px] md:h-[654px] dark:hidden"
      alt="tablet example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
      class="hidden h-[426px] md:h-[654px] dark:block"
      alt="tablet example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/tablet-mockup.md'] as string} />

<H2>Laptop mockup</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup device="laptop">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
      class="h-[156px] w-full rounded-xl md:h-[278px] dark:hidden"
      alt="laptop example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
      class="hidden h-[156px] w-full rounded-lg md:h-[278px] dark:block"
      alt="laptop example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/laptop-mockup.md'] as string} />

<H2>Desktop mockup</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup device="desktop">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png"
      class="h-[140px] w-full rounded-xl md:h-[262px] dark:hidden"
      alt="desktop example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png"
      class="hidden h-[140px] w-full rounded-xl md:h-[262px] dark:block"
      alt="desktop example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/desktop-mockup.md'] as string} />

<H2>Smartwatch mockup</H2>
<CodeWrapper class="overflow-x-scroll">
  <DeviceMockup device="smartwatch">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
      class="w-[188px h-[193px] dark:hidden"
      alt="smartwatch example 1"
    />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
      class="hidden h-[193px] w-[188px] dark:block"
      alt="smartwatch example 2"
    />
  </DeviceMockup>
</CodeWrapper>
<HighlightCompo code={modules['./md/smartwatch-mockup.md'] as string} />
