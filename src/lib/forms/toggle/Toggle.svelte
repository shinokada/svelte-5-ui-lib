<script lang="ts">
  import { Label } from '../label';
  import { type ToggleProps as Props, toggle } from './index';

  let {
    children,
    toggleSize = 'default',
    value,
    checked = $bindable(),
    class: className,
    color = 'primary',
    aria_describedby,
    labelClass,
    inputClass,
    spanClass,
    ...attributes
  }: Props = $props();

  const { input, label, span } = $derived(toggle({ color, size: toggleSize }));
</script>

<Label class={label({class: labelClass})}>
  <input
    type="checkbox"
    bind:checked
    {value}
    aria-describedby={aria_describedby}
    {...attributes}
    class={input({ class: inputClass})}
  />
  <span class={span({class: spanClass})}></span>
  {@render children()}
</Label>

