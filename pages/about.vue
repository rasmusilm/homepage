<template>
    <div class="flex flex-col gap-5">
        <h2 class="text-xl mt-5">My skills</h2>
        <Accordion v-for="skillgroup of skills">
            <template v-slot:head>
                <div class="flex gap-3">
                    <h3 class="my-auto text-xl ml-5">
                        {{ skillgroup.title }}
                    </h3>
                </div>
            </template>
            <template v-slot:content>
                <div class="grid gap-4">
                    <div class="flex flex-wrap gap-4 mx-auto mt-4">
                        <Skill v-for="skill of skillgroup.skillIcons" :data="skill"></Skill>
                    </div>
                    <p v-if="skillgroup.text" class="mx-5">
                        {{ skillgroup.text }}
                    </p>
                    <p v-if="skillgroup.paragraphs" v-for="paragraph of skillgroup.paragraphs" class="mx-5">
                        {{ paragraph }}
                    </p>
                </div>
            </template>
        </Accordion>
    </div>
</template>

<script setup lang="ts">
import type { SkillGroup } from '~/types/skillgroup'

// TODO fix image addresses

const skills = ref<Array<SkillGroup>>(
    [
        {
            title: 'Backend Java Development',
            skillIcons:
                [
                    { name: 'Java', imgUrl: '/images/java.png' },
                    { name: 'Spring', imgUrl: '/images/springio-icon.svg' }
                ],
            paragraphs: [
                'I have experience in building and maintaining Java Spring applications with high availability requirements. I have worked on both microservices / microapplications and medium complexity monolithic systems, building, developing and maintaining.',
                'Backend develoment with Java is my strongest skill.'
            ]
        },
        {
            title: 'Frontend Development with VueJs',
            skillIcons: [
                { name: 'VueJS', imgUrl: '/images/vuejs-icon.svg' },
                { name: 'NuxtJS', imgUrl: '/images/nuxtjs-icon.svg' }
            ],
            paragraphs: [
                'I have worked on multiple projects using VueJs or NuxtJs to build frontend web applications. Some of those are pages with 1000-s of daily users, with peak traffic estimated to be 10-s of thousands.',
                'My experience includes building and maintaining pages, that are required to conform to WCAG 2.0 AAA standards.',
                'This page is also built using Nuxt 3, although, as a hobby project, isn\'t built to as high of a standard or maintained as regularly.'               
            ]
        },
        {
            title: 'Additional skills / proficiencies',
            skillIcons: [
                { name: 'Docker', imgUrl: '/images/docker-tile.svg' },
                { name: 'Kubernetes', imgUrl: '/images/kubernetes-icon.svg' },
                { name: 'RabbitMQ', imgUrl: '/images/rabbitmq-icon.svg' },
                { name: 'Amazon S3', imgUrl: '/images/Amazon-S3-Logo.svg'}
            ],
            paragraphs: ['In addition to usual fullstack development skills, I also have experience with many adjacently used tools, like Docker and Kubernetes for deploying applications, RabbitMQ message broker for persistent, high avalability communication between microservices, and Amazon S3 based cloud storage solutions.']
        }
    ]
)


useHead({
    title: 'About me | Rasmus Ilmjärv'
})
</script>