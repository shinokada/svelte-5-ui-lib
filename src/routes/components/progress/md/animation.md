<script>
    import { Progressbar, Button } from 'svelte-5-ui-lib';
    import { sineOut } from 'svelte/easing';
    let progress = '45'
</script>

<Progressbar
  {progress}
  animate
  precision={2}
  labelOutside="With animation"
  labelInside
  tweenDuration={1500}
  easing={sineOut}
  size="h-6"
  color="red"
  div2Class="text-base font-medium text-center p-1 leading-none rounded-full"
/>
<Progressbar
  {progress}
  labelOutside="Without animation"
  labelInside
  size="h-6"
  color="gray"
  div2Class="text-base font-medium text-center p-1 leading-none rounded-full"
/>
<Button
  onclick={() => (progress = `${Math.round(Math.random() * 100)}`)}
  class="mt-8">Randomize</Button
>