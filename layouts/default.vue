<template>
    <div class="flex flex-col">
      <AppHeader />
      <div class="mt-2 w-full px-2 lg:mx-auto md:max-w-[1200px]">
        <slot></slot>
      </div>
      <AppFooter/>
    </div>
  </template>