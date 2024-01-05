<template>
    <div>
        <header class="text-center bg-primary text-white md:text-black md:bg-transparent">
            <div class="flex px-2">
                <!-- <NuxtLink to="/" class="grow-1 mx-auto">
                    <h2>Rasmus Ilmjärv</h2>                
                </NuxtLink> -->
                <button v-if="small" class="ml-auto py-3" @click="toggleMenu">X</button>
            </div>
            <Navbar v-if="!small || open"/>
        </header>
    </div>
</template>
<script setup lang="ts">
const open = ref(false)
let windowWidth = ref(1000)

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

onMounted(() => window.addEventListener('resize', onWidthChange))
onUnmounted(() => window.removeEventListener('resize', onWidthChange))
</script>