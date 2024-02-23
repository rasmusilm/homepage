<template>
	<section class="border rounded-lg w-full max-w-[600px] md:max-h-[400px] mx-auto" v-for="item, index in data">
		<div class="flex flex-col md:flex-row" :class="index % 2 == 1? 'md:flex-row-reverse xl:flex-row' : ''">
			<div class="overflow-hidden aspect-[4/2] md:aspect-[6/8] md:basis-1/2">
				<a :href="item.link"><NuxtImg v-if="item.img" :src="item.img" alt="" class="w-full md:h-full object-cover" /></a>
			</div>
			<div class="flex flex-col gap-4 p-3 break-keep justify-middle md:basis-1/2">
				<div>Project</div>
				<a :href="item.link">
					<h3 class="text-lg mt-5 font-semibold">{{ item.title }}</h3>
				</a>
				<div>{{ item.description }}</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps<{
	data: { title: string; link: string; description: string; img?: string}[];
	flipped?: boolean | undefined;
}>()
</script>
