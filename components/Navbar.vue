<template>
    <nav class="flex flex-col md:flex-row md:gap-2 bg-primary text-white px-5 py-3">
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
</script>