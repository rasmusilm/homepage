<template>
    <div class="grid grid-rows-4 h-28">
        <div class="row-span-3 overflow-hidden relative">
            <NuxtImg class="w-full h-full" :src="data.imgUrl"/>
        </div>
        <div class="text-center">
            <h5 class="font-bold text-lg">
                {{data.name}}
            </h5>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    data: {name: string, imgUrl: string}
}>()
</script>