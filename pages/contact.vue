<template>
    <h2 class="text-2xl mt-5">
        My contact info:
    </h2>
    <div class="ml-5">
        <h3 class="text-xl mt-5">For business related communication:</h3>
        <div v-for="link in links" class="flex ml-4 mt-3">
            <NuxtImg v-if="link.img" :src="link.img" class="h-[24px]" />
            <CypherContent :text="link.text" :url="link.url" />
        </div>
    </div>
    <div class="ml-5">
        <h3 class="text-xl mt-5">My git:</h3>
        <div v-for="link in git" class="flex ml-4 mt-3">
            <NuxtImg v-if="link.img" :src="link.img" class="h-[24px]" />
            <CypherContent :text="link.text" :url="link.url" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type {CypheredLink} from '~/types/cypheredLink'

const email = ref("rasmus.ilmjarv@gmail.com")


const links = ref<CypheredLink[]>([
    {
        url: "https://www.linkedin.com/in/rasmus-ilmj%C3%A4rv/",
        img: "/images/linkedin-svgrepo-com.svg",
        text: "Linkedin | Rasmus Ilmjärv"
    },
    {
        url: "mailto:rasmus.ilmjarv@gmail.com",
        img: "/images/email-svgrepo-com.svg",
        text: "Gmail | Rasmus Ilmjärv"
    }
])

const git = ref<CypheredLink[]>([
    {
        url: "",
        img: "/images/github-svgrepo-com.svg",
        text: "Github | Rasmusilm"
    }
])
</script>