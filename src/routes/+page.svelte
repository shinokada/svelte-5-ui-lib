<script lang="ts">
  import { P } from "$lib";
  import HighlightCompo from "./utils/HighlightCompo.svelte";
  import H1 from "./utils/H1.svelte";
  import H2 from "./utils/H2.svelte";
  import H3 from "./utils/H3.svelte";
  const modules = import.meta.glob("./md/*.md", {
    query: "?raw",
    import: "default",
    eager: true
  });

  import { removeHyphensAndCapitalize } from "./utils/helpers";
  /*eslint no-undef: "off"*/
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  // const viteVersion = __VITEVERSION__;
  const tailwindcssVersion = __TAILWINDCSSVERSION__;
</script>

<H1><a class="hover:underline dark:text-primary-500" href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</a></H1>

<P>Svelte 5 UI Lib is a UI library for Svelte 5 Runes. Explore our collection featuring over 36 components.</P>

<H2>Installation</H2>

<H3>Svelte 5 Runes</H3>
<P>Installing Svelte 5:</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules["./md/install-svelte.md"] as string} />

<P>
  After installing Svelte-5, you can <a href="https://svelte-5-preview.vercel.app/docs/runes#how-to-opt-in">opt-in to runes mode</a>
  by updating `svelte.config.js` to enable `runes`:
</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules["./md/runes.md"] as string} />

<H3>Svelte-5-Ui-Lib</H3>
Install `svelte-5-ui-lib` and update dependencies:

<HighlightCompo class="mb-8" codeLang="sh" code={modules["./md/svelte-5-ui-lib.md"] as string} />

<H3>Flowbite-Svelte-Icons@next</H3>

Install flowbite-svelte-icons@next:

<HighlightCompo class="mb-8" codeLang="sh" code={modules["./md/flowbite-svelte-icons.md"] as string} />

Check if it has the latest version at
<a class="hover:underline dark:text-primary-500" href="https://github.com/themesberg/flowbite-svelte-icons/releases">Releases page</a>
.

<H3>Tailwind</H3>
Install tailwindcss:

<HighlightCompo class="mb-8" codeLang="sh" code={modules["./md/tailwind.md"] as string} />

Add the following to tailwind.config.js:

<HighlightCompo class="mb-8" codeLang="json" code={modules["./md/tailwind-config.md"] as string} />

<H2>Dependency info</H2>
<ul>
  <li>Svelte: {svelteVersion}</li>
  <li>SvelteKit: {svelteKitVersion}</li>
  <li>TailwindCSS: {tailwindcssVersion}</li>
</ul>

<H2>Credits</H2>

<ul>
  <li>Flowbite</li>
  <li>Flowbite-Svelte</li>
</ul>
