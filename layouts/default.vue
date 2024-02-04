<template>
  <div class="flex flex-col">
    <AppHeader />
    <div class="mt-2 w-full px-2 lg:mx-auto md:max-w-[1200px] min-h-[85vh] md:min-h-[80vh]">
      <slot></slot>
    </div>
    <AppFooter />
  </div>
</template>