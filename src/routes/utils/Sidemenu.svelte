<script lang="ts">
  import { page } from '$app/stores';
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarDropdownWrapper
  } from '$lib';
  let currentUrl = $page.url.pathname;
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const hasPath = (key: string) => currentUrl.includes(key);
  // console.log(hasPath('typography'))
  const activeClass =
    'flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-500 dark:hover:bg-primary-500';
</script>

<Sidebar
  {activeClass}
  nonActiveClass='hover:bg-gray-200'
  asideclass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible bg-gray-100 dark:bg-gray-900 lg:pt-0 lg:block hidden"
  divClass="dark:bg-gray-900 bg-transparent"
  aclass="p-1 pl-4"
>
  <SidebarGroup>
    <SidebarDropdownWrapper
      label="GETTING STARTED"
      isOpen={hasPath('pages')}
      svgclass="me-4"
      btnclass="p-1"
    >
      <SidebarItem label="About" href="/pages/about" />
      <SidebarItem label="Coverage" href="/pages/coverage" />
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="Components"
      isOpen={hasPath('components')}
      svgclass="me-4"
      btnclass="p-1"
    >
      <SidebarItem label="Alert" href="/components/alert" />
      <SidebarItem label="Avatar" href="/components/avatar" />
      <SidebarItem label="Badge" href="/components/badge" />
      <SidebarItem label="Banner" href="/components/banner" />
      <SidebarItem
        label="Bottom navigation"
        href="/components/bottom-navigation"
      />
      <SidebarItem label="Breadcrumb" href="/components/breadcrumb" />
      <SidebarItem label="Button" href="/components/button" />
      <SidebarItem label="Button group" href="/components/button-group" />
      <SidebarItem label="Card" href="/components/card" />
      <SidebarItem label="Drawer" href="/components/drawer" />
      <SidebarItem label="Darkmode" href="/components/darkmode" />
      <SidebarItem label="Device mockup" href="/components/device-mockup" />
      <SidebarItem label="Dropdown" href="/components/dropdown" />
      <SidebarItem label="Footer" href="/components/footer" />
      <SidebarItem label="Gallery" href="/components/gallery" />
      <SidebarItem label="Indicator" href="/components/indicator" />
      <SidebarItem label="Kbd" href="/components/kbd" />
      <SidebarItem label="List group" href="/components/list-group" />
      <SidebarItem label="Navbar" href="/components/navbar" />
      <SidebarItem label="Progress" href="/components/progress" />
      <SidebarItem label="Rating" href="/components/rating" />
      <SidebarItem label="Sidebar" href="/components/sidebar" />
      <SidebarItem label="Skeleton" href="/components/skeleton" />
      <SidebarItem label="Spinner" href="/components/spinner" />
      <SidebarItem label="Table" href="/components/table" />
      <SidebarItem label="Tab" href="/components/tab" />
      <SidebarItem label="Toast" href="/components/toast" />
      <SidebarItem label="Video" href="/components/video" />
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="Forms"
      isOpen={hasPath('forms')}
      svgclass="me-4"
      btnclass="p-1"
    >
      <SidebarItem label="Checkbox" href="/forms/checkbox" />
      <SidebarItem label="Floating label" href="/forms/floating-label" />
      <SidebarItem label="Radio" href="/forms/radio" />
      <SidebarItem label="Range" href="/forms/range" />
      <SidebarItem label="Select" href="/forms/select" />
      <SidebarItem label="Toggle" href="/forms/toggle" />
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper
      label="Typography"
      isOpen={hasPath('typography')}
      svgclass="me-4"
      btnclass="p-1"
    >
      <SidebarItem label="Blockquote" href="/typography/blockquote" />
      <SidebarItem label="Heading/Span/Mark" href="/typography/heading" />
      <SidebarItem label="HR" href="/typography/hr" />
      <SidebarItem label="Link" href="/typography/link" />
      <SidebarItem label="List" href="/typography/list" />
      <SidebarItem label="Paragraph" href="/typography/paragraph" />
      <SidebarItem label="Text" href="/typography/text" />
    </SidebarDropdownWrapper>
    <SidebarDropdownWrapper label="Plugins" svgclass="me-4" btnclass="p-1">
      <SidebarItem label="Chart" href="/plugins/chart" />
    </SidebarDropdownWrapper>
  </SidebarGroup>
</Sidebar>
