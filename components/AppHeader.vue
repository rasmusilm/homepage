<template>
    <div class="bg-primary" :class="menuOpen ? 'pt-8 md:pt-0' : ''">
        <div class="top-0 md:relative bg-inherit text-white transition-[max-height] delay-100 duration-200 ease-in-out max-h-[10%] z-50" :class="menuOpen ? 'fixed w-full !max-h-full h-full': 'sticky'">
            <header class="text-center">
                <div class="flex px-2 transition-[margin] duration-1000 ease" :class="menuOpen ? 'mt-5 mx-2 md:m-0' : ''">
                    <NuxtLink to="/" class="py-3 pl-[35px] grow-1 mx-auto">
                        <h2 class="text-lg font-semibold">Rasmus Ilmjärv</h2>
                    </NuxtLink>
                    <div class="pt-2 md:hidden">
                        <HamburgerButton v-model="menuOpen" />
                    </div>
                </div>
                <div v-if="menuOpen" class="md:hidden mt-8 text-lg">
                    <Navbar @navigated="menuOpen = false" />
                </div>
            </header>
            <div class="md:block hidden mx-auto max-w-[1250px]">
                <Navbar @navigated="menuOpen = false" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HamburgerButton from './subcomponents/HamburgerButton.vue'

const menuOpen = ref(false)

watch(menuOpen, (value, old) => {
    const body = document.getElementsByTagName('body')[0]
    body.className = value ? 'overflow-y-hidden md:overflow-auto' : ''
})
</script>

<style scoped>
.stick {
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
}
</style>