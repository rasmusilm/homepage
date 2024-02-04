<template>
    <div>
        <div class="border-2 border-primary-200 flex">
            <slot name="head"></slot>
            <button @click="toggle" class="ml-auto p-2 text-[70px]">{{ open ? '-' : '+' }}</button>
        </div>
        <div class="transition-[max-height] overflow-hidden duration-300 border-primary-200 p-2" :class="open ? 'max-h-96 border' : 'max-h-0'">
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const open = ref(false)

function toggle() {
    open.value = !open.value
}
</script>