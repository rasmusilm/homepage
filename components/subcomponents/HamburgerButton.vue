<template>
    <button class="button-one" aria-controls="primary-navigation" :aria-expanded="model" @click="toggleMenu">
        <svg fill="#ccc" class="hamburger" viewBox="0 0 100 100" width="250">
            <rect class="line top" width="80" height="10" x="10" :y="model ? 45 : 25" rx="5">
            </rect>
            <rect class="line middle" width="80" height="10" x="10" y="45" rx="5">
            </rect>
            <rect class="line bottom" width="80" height="10" x="10" :y="model ? 45 : 65" rx="5">
            </rect>
        </svg>
    </button>
</template>

<script setup lang="ts">
const model = defineModel<boolean>()

function toggleMenu() {
    model.value = !model.value
}
</script>

<style scoped>
.button-one {
  --button-color: #fff;
}

.button-one[aria-expanded="true"] .line {
  transition: y 200ms ease-in-out, transform 200ms ease-in-out 200ms, opacity 0ms 300ms;
  transform-origin: center;
}

.button-one[aria-expanded="false"] .line {
  transition: y 200ms ease-in-out 200ms, transform 200ms ease-in-out, opacity 50ms 200ms;
  transform-origin: center;
}



.button-one[aria-expanded="true"] .top {
    transform: rotate(45deg);
}

.button-one[aria-expanded="true"] .middle {
  opacity: 0;
}

.button-one[aria-expanded="true"] .bottom {
  transform: rotate(-45deg);
}

.hamburger {
    width: 35px;
}
</style>