<template>
    <div>
        <header class="text-center bg-primary text-white md:text-black md:bg-transparent z-50">
            <div class="flex px-2">
                <!-- <NuxtLink to="/" class="grow-1 mx-auto">
                    <h2>Rasmus Ilmjärv</h2>                
                </NuxtLink> -->
                <button class="ml-auto py-3 md:hidden block" @click="toggleMenu">X</button>
            </div>
            <Navbar v-if="!small || open" :loaded="loaded" @navigated="toggleMenu"/>
        </header>
    </div>
</template>
<script setup lang="ts">
const open = ref(false)
const loaded = ref(false)
const windowWidth = ref(1000)

function toggleMenu() {
    open.value = !open.value
}

const small = computed(() => {
        return windowWidth.value < 768
    })

function onWidthChange() {
    windowWidth.value = window.innerWidth
    if (!small.value) open.value = false
}

onMounted(() => {
    onWidthChange()
    window.addEventListener('resize', onWidthChange)
    loaded.value = true
})
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>