<script setup lang="ts">
defineProps<{ cms: any }>()
</script>
<template>
    <div class="lg:px-20 lg:py-20 px-4 py-10">
        <div class="text-center mb-16">
            <h3 class="text-4xl lg:text-h3 playfair">{{ cms.header }}</h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
                v-for="i in cms.testimonies"
                :key="i.id"
                class="bg-[#F9F9F7] rounded-lg p-10"
            >
                <div class="space-y-6 pb-8 border-b mb-8">
                    <p class="font-semibold text-2xl text-blue-600">{{ i.title }}</p>
                    <p class="text-[#414536] text-lg">{{ i.description }}</p>
                </div>
                <div class="flex items-center space-x-5">
                    <div class="w-[70px] h-[70px] rounded-full relative overflow-hidden">
                        <nuxt-img :src="i.image.node.sourceUrl" />
                    </div>
                    <div class="text-[#414536]">
                        <p class="font-semibold">{{ i.name }}</p>
                        <p>{{ i.subText }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
