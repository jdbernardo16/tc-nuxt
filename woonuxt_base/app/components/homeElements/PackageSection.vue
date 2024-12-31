<script setup lang="ts">
defineProps<{ cms: any }>()
</script>
<template>
    <div class="w-full bg-white lg:px-20 lg:py-20 px-4 py-10">
        <h3 class="text-4xl lg:text-h3 playfair mb-16 whitespace-pre-wrap">{{ cms.header }}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
                v-for="item in cms.packages"
                :key="item.id"
            >
                <div class="aspec-w-1 aspect-h-1 overflow-hidden rounded-lg mb-7">
                    <nuxt-img
                        class="w-full h-full object-contain"
                        :src="item.image.node.sourceUrl"
                    />
                </div>
                <div>
                    <p class="text-2xl font-semibold mb-2">{{ item.title }}</p>
                    <p class="line-clamp-2 text-neutral-500">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
