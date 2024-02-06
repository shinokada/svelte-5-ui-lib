<script>
  import { Toast, Avatar, Button } from '$lib';
  import { FireOutline, CircleCheckSolid, ExclamationCircleSolid, CloseSolid, PapperPlaneOutline, BellOutline, DownloadOutline, CameraFotoOutline } from 'flowbite-svelte-icons';
  import { slide, blur, fly } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
	import CodeWrapper from '../../utils/CodeWrapper.svelte';
	import H1 from '../../utils/H1.svelte';
	import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
	const modules = import.meta.glob('./md/*.md', { as: 'raw', eager: true });
</script>

<H1>Toast</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md']} />

<H2>Default toast</H2>
<CodeWrapper class='h-28 flex flex-col items-center'>
<Toast>
  {#snippet icon()}
  <FireOutline class="w-5 h-5 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200" />
  {/snippet}
  Set yourself free.
</Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/default-toast.md']} />

<H2>Colors</H2>
<CodeWrapper class='space-y-2 h-[700px] flex flex-col items-center'>
<Toast color="green">
  {#snippet icon()}
    <CircleCheckSolid class="w-5 h-5" />
    <span class="sr-only">Check icon</span>
  {/snippet}
  Item moved successfully.
</Toast>

<Toast color="red">
  {#snippet icon()}
    <CloseSolid class="w-5 h-5" />
    <span class="sr-only">Error icon</span>
  {/snippet}
  Item has been deleted.
</Toast>

<Toast color="orange">
  {#snippet icon()}
    <ExclamationCircleSolid class="w-5 h-5" />
    <span class="sr-only">Warning icon</span>
  {/snippet}
  Improve password difficulty.
</Toast>

<Toast color="gray">
  {#snippet icon()}
  <FireOutline class="w-5 h-5" />
  {/snippet}
  Gray
</Toast>

<Toast color="yellow">
  {#snippet icon()}
  <FireOutline class="w-5 h-5" />
  {/snippet}
  Yellow
</Toast>

<Toast color="blue">
  {#snippet icon()}
  <FireOutline class="w-5 h-5" />
  {/snippet}
  Blue
</Toast>

<Toast color="indigo">
  {#snippet icon()}
  <FireOutline class="w-5 h-5" />
  {/snippet}
  Indigo
</Toast>

<Toast color="purple">
  {#snippet icon()}
  <FireOutline class="w-5 h-5" />
  {/snippet}
  Purple
</Toast>

<Toast color="none" div2class="w-8 h-8 text-pink-500 bg-pink-100 dark:bg-pink-800 dark:text-pink-200">
  {#snippet icon()}
  <FireOutline class="w-5 h-5" />
  {/snippet}
  Customize your colors.
</Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/colors.md']} />

<H2>Simple toast</H2>
<CodeWrapper class='h-28 flex flex-col items-center'>
  <Toast dismissable={false} div3class="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
    <PapperPlaneOutline class="w-5 h-5 text-primary-600 dark:text-primary-500 rotate-45" />
    <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/simple-toast.md']} />

<H2>Transitions</H2>
<H3>Slide</H3>
<CodeWrapper class='space-y-2 h-[350px] flex flex-col items-center'>
  <Toast transition={slide}>
    {#snippet icon()}
    <CircleCheckSolid class="w-5 h-5" />
    {/snippet}
    Transition type: slide
  </Toast>

  <Toast transition={slide} params={{ delay: 250, duration: 300, easing: quintOut }} >
    {#snippet icon()}
    <CircleCheckSolid class="w-5 h-5" />
    {/snippet}
    Transition type: slide, delay: 250, duration: 300, easing: quintOut
  </Toast>
  
  <Toast transition={slide} params={{ delay: 250, duration: 2000, easing: elasticOut }}>
    {#snippet icon()}
    <CircleCheckSolid class="w-5 h-5" />
    {/snippet}
    Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/slide.md']} />

<H3>Blur</H3>
<CodeWrapper class='space-y-2 h-[200px] flex flex-col items-center'>
  <Toast transition={blur} color="purple" params={{ amount: 10 }}>
    {#snippet icon()}
    <BellOutline class="w-5 h-5" />
    {/snippet}
    Transition type: blur, amount: 10
  </Toast>
  
  <Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
    {#snippet icon()}
    <BellOutline class="w-5 h-5" />
    {/snippet}
    Transition type: blur, amount: 50, delay 1000
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/blur.md']} />

<H3>Fly</H3>
<CodeWrapper class='space-y-2 h-[200px] flex flex-col items-center'>
  <Toast transition={fly} params={{ x: 200 }} color="green">
    {#snippet icon()}
    <DownloadOutline class="w-5 h-5" />
    {/snippet}
    Transition type: fly right
  </Toast>
  
  <Toast transition={fly} params={{ y: 200 }} color="green">
    {#snippet icon()}
    <DownloadOutline class="w-5 h-5" />
    {/snippet}
    Transition type: fly down
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/fly.md']} />

<H2>Undo button</H2>
<CodeWrapper class='h-28 flex flex-col items-center'>
  <Toast div2class="w-full text-sm font-normal flex items-center justify-between">
    Conversation archived.
    <a class="ms-auto font-medium text-primary-600 p-1.5 hover:bg-primary-100 rounded-lg dark:text-primary-500 dark:hover:bg-gray-700" href="/"> Undo </a>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/undo-button.md']} />

<H2>Advanced examples</H2>
<H3>Toast message</H3>
<CodeWrapper class='h-48 flex flex-col items-center'>
  <Toast align={false} divclass="">
    {#snippet icon()}
    <Avatar src="/images/profile-picture-1.webp" />
    {/snippet}
    <div class="ms-3 text-sm font-normal">
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <Button size="xs">Reply</Button>
    </div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/toast-message.md']} />

<H3>Push notification</H3>
<CodeWrapper class='h-44 flex flex-col items-center'>
  <Toast align={false}>
    <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
    <div class="flex items-center mt-3">
      <Avatar src="/images/profile-picture-3.webp" />
      <div class="ms-3">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
        <div class="text-sm font-normal">commented on your photo</div>
        <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span>
      </div>
    </div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/push-notification.md']} />

<H3>Interactive toast</H3>
<CodeWrapper class='h-48 flex flex-col items-center'>
  <Toast align={false}>
    {#snippet icon()}
    <CameraFotoOutline class="w-5 h-5" />
   {/snippet}
    <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
    <div class="mt-3">
      <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
      <div class="grid grid-cols-2 gap-2">
        <Button size="xs" btnclass="w-full">Update</Button>
      </div>
    </div>
  </Toast>
</CodeWrapper>
<HighlightCompo code={modules['./md/interactive-toast.md']} />

<H2>Positioning</H2>
<CodeWrapper>
  <div class="relative h-56">
    <Toast dismissable={false} position="top-left">Top left positioning.</Toast>
    <Toast dismissable={false} position="top-right">Top right positioning.</Toast>
    <Toast dismissable={false} position="bottom-left">Bottom left positioning.</Toast>
    <Toast dismissable={false} position="bottom-right">Bottom right positioning.</Toast>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/positioning.md']} />