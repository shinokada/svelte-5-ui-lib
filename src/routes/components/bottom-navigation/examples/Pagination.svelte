<script>
  import { BottomNav, BottomNavItem, Tooltip, Skeleton, ImagePlaceholder } from "$lib";
  import { FileCirclePlusOutline, BookmarkSolid, AngleLeftOutline, AngleRightOutline, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";
</script>

<div class="relative flex flex-col p-6">
  <Skeleton class="py-4" />
  <ImagePlaceholder class="pb-20" />

  <BottomNav position="absolute" navType="pagination" innerClass="grid-cols-6">
    <BottomNavItem btnName="New document">
      <FileCirclePlusOutline class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Bookmark">
      <BookmarkSolid class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <div class="col-span-2 flex items-center justify-center">
      <div class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400">
        <button type="button" class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <AngleLeftOutline class="ms-1 h-2 w-2" />
          <span class="sr-only">Previous page</span>
        </button>
        <span class="mx-1 flex-shrink-0 text-sm font-medium">1 of 345</span>
        <button type="button" class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">
          <AngleRightOutline class="me-1 h-2 w-2" />
          <span class="sr-only">Next page</span>
        </button>
      </div>
    </div>
    <BottomNavItem btnName="Settings">
      <AdjustmentsVerticalOutline class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
    <BottomNavItem btnName="Profile">
      <UserCircleSolid class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    </BottomNavItem>
  </BottomNav>
</div>
