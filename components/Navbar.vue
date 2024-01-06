<template>
    <nav class="flex flex-col gap-4 md:flex-row md:gap-2 md:px-4 bg-primary text-white md:pb-2" @click="$emit('navigated')">
        <NuxtLink to="/">
            Home
        </NuxtLink>
        <NuxtLink to="/about">
            About me
        </NuxtLink>
        <NuxtLink to="/projects">
            My projects
        </NuxtLink>
        <a href="https://github.com/rasmusilm" class="md:ml-auto">
            Github
        </a>
    </nav>
</template>
<script setup lang="ts">
defineProps({
    loaded: Boolean
})
defineEmits(['navigated'])
</script>