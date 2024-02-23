<template>
    <div class="grid xl:grid-cols-2 gap-4">
        <ProjectCard :data="data" />
    </div>
</template>
<script setup lang="ts">

const data = ref([
    {
        title: 'This site',
        link: 'https://github.com/rasmusilm/rasmusilm.github.io',
        description: 'A Nuxt3 web page served with github pages using SSR (Server Side Rendering)',
        img: "/images/nuxt-site.png"
    },
    {
        title: 'Light picture downloader',
        link: 'https://github.com/rasmusilm/light_picture_downloader',
        description: 'A simple, lightweight solution to download images from the web. It does not include file conversion.',
        img: "/images/PyPI_logo.svg"
    },
    {
        title: 'Genshin Impact ingame satistics viewer',
        link: 'https://github.com/rasmusilm/genshin-stats-tracker',
        description: ' A small project written to make it easier to see ingame state from console without starting the game, and automate the "outside the game" reward mechanics: getting the daily login rewards and searching + redeeming giftcodes for ingame rewards. An exercise in using and reverse engineering api-s.'
    },
])

useHead({
    title: 'My Projects | Rasmus Ilmjärv'
})
</script>