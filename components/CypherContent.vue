<template>
	<a class="ml-2" ref="link" href="javascript:;" @click="reveal">{{ text }}</a>
</template>

<script setup lang="ts">
const {url} = defineProps({
	text: String,
	url: String
})

const link = ref<HTMLAnchorElement | null>(null)

function reveal() {
    link.value!.href = url ?? ''
}
</script>
