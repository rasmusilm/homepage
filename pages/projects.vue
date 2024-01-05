<template>
    <div class="flex flex-col gap-4">
        <div class="border-t" v-for="item in data">
            <a :href="item.link">{{item.title}}</a>
            <div>{{ item.description }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
const data = ref([{
title: 'Light picture downloader',
link: 'https://github.com/rasmusilm/light_picture_downloader',
description: 'A simple, lightweight solution to download images from the web. It does not include file conversion.'
},
{
title: 'Genshin Impact ingame satistics viewer',
link: 'https://github.com/rasmusilm/genshin-stats-tracker',
description: ' A small project written to make it easier to see ingame state from console without starting the game, and automate the "outside the game" reward mechanics: getting the daily login rewards and searching + redeeming giftcodes for ingame rewards. An exercise in using and reverse engineering api-s.'
}
])
</script>