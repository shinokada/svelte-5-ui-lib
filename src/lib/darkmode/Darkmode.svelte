<script lang="ts">
    interface Props{
        btnClass?: string | undefined;
        size?: 'sm' | 'md' | 'lg';
        ariaLabel?: string | undefined;
        class?: string | undefined;
    }
    import { twMerge } from 'tailwind-merge';

    const THEME_PREFERENCE_KEY = 'color-theme';

    let { btnClass, size = 'md', ariaLabel  = 'Dark mode', class:classname, ...attributes } = $props<Props>();  
    let btnCls: string = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5';

    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6'
    };
  
    const toggleTheme = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement;
      const isDark = target.ownerDocument.documentElement.classList.toggle('dark');
      if (target.ownerDocument === document)
        // we are NOT in the iFrame
        localStorage.setItem('THEME_PREFERENCE_KEY', isDark ? 'dark' : 'light');
    };
  </script>
  
  <svelte:head>
    <script>
      if ('THEME_PREFERENCE_KEY' in localStorage) {
        // explicit preference - overrides author's choice
        localStorage.getItem('THEME_PREFERENCE_KEY') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
      } else {
        // browser preference - does not overrides
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
      }
    </script>
  </svelte:head>
  
  <button on:click={toggleTheme} aria-label={ariaLabel} type="button" {...attributes} class={twMerge(btnCls, classname)}>
    <span class="hidden dark:block">
      <slot name="lightIcon">
        <svg role="img" aria-label="Light mode" class={sizes[size]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
    0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd" />
        </svg>
      </slot>
    </span>
    <span class="block dark:hidden">
      <slot name="darkIcon">
        <svg role="img" aria-label="Dark mode" class={sizes[size]} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </slot>
    </span>
  </button>