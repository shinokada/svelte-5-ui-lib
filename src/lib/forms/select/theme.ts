import { tv } from 'tailwind-variants';

export const select = tv({
  base: 'block w-full',
  variants: {
    underline: {
      true: 'text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer !px-0',
      false: 'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
    },
    size: {
      sm: 'text-sm p-2',
      md: 'text-sm p-2.5',
      lg: 'text-base py-3 px-4'
    }
  },
  defaultVariants: {
    underline: false,
    size: 'md'
  }
});

export const multiSelect = tv({
  variants: {
    size: {
      sm: 'px-2 py-1 min-h-[2.4rem]',
      md: 'px-3 py-1 min-h-[2.7rem]',
      lg: 'px-4 py-2 min-h-[3.2rem]'
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'focus-within:ring-1 focus-within:border-primary-500 dark:focus-within:border-primary-500'
    }
  },
  defaultVariants: {
    size: 'md',
    disabled: false
  }
});
