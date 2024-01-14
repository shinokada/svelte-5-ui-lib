<script lang="ts">
    interface Props{
        children?: any;
        icon?: any;
        home?: boolean;
        href?: string | undefined;
        linkClass?: string | undefined;
        spanClass?: string | undefined;
        homeClass?: string | undefined;
        class?: string | undefined;
    }
    import { twMerge } from 'tailwind-merge';
    let { children, icon, home = false, href, linkClass, spanClass, homeClass, class: classname, ...attributes} = $props<Props>();
    let linkCls: string = twMerge('ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white', linkClass);
    let spanCls: string = twMerge('ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400', spanClass);
    let homeCls: string = twMerge('inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white', homeClass);
  </script>
  
  <li class={twMerge('inline-flex items-center', classname)} {...attributes}>
    {#if home}
      <a class={homeCls} {href}>
        {#if icon}
            {@render icon()}
        {:else}
          <svg class="w-4 h-4 me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        {/if}
        {@render children()}
      </a>
    {:else}
      {#if icon}
        {@render icon()}
      {:else}
        <svg class="w-6 h-6 text-gray-400 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      {/if}
      {#if href}
        <a class={linkCls} {href}>
            {@render children()}
        </a>
      {:else}
        <span class={spanCls}>
            {@render children()}
        </span>
      {/if}
    {/if}
  </li>