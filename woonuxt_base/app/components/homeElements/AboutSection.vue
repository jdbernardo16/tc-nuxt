<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
defineProps<{ cms: any }>()
</script>
<template>
    <div
        class="w-fullbg-gray-100 flex lg:flex-row flex-col items-center justify-center lg:space-x-20 px-4 lg:px-20 py-10 lg:pb-20 lg:pt-40 lg:space-y-0 space-y-6"
    >
        <div class="w-full lg:w-1/2 relative lg:space-y-0 space-y-6">
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <nuxt-img
                    class="w-full h-full object-contain"
                    :src="cms.image.node.sourceUrl"
                />
            </div>
            <div class="p-12 bg-neutral-700 lg:absolute lg:-top-20 lg:-right-20 rounded-xl lg:max-w-[411px]">
                <p class="font-semibold text-white mb-10">{{ cms.header }}</p>
                <div class="space-y-6">
                    <nuxt-link
                        :to="`tel: ${cms.contactInfo.phone}`"
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center space-x-3 text-white"
                    >
                        <PhoneIcon class="w-5 h-5" />
                        <p class="w-[calc(100%-32px)]">{{ cms.contactInfo.phone }}</p>
                    </nuxt-link>
                    <nuxt-link
                        :to="`mailto: ${cms.contactInfo.email}`"
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center space-x-3 text-white"
                    >
                        <EnvelopeIcon class="w-5 h-5" />
                        <p class="w-[calc(100%-32px)]">{{ cms.contactInfo.email }}</p>
                    </nuxt-link>
                    <nuxt-link
                        :to="cms.contactInfo.googleMapLink"
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center space-x-3 text-white"
                    >
                        <MapPinIcon class="w-5 h-5" />
                        <p class="w-[calc(100%-32px)]">{{ cms.contactInfo.location }}</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/2 space-y-6 lg:pl-20">
            <h3 class="text-4xl lg:text-h3 playfair">
                {{ cms.header }}
            </h3>
            <div class="ck-content">
                <p class="whitespace-pre-wrap">{{ cms.description }}</p>
            </div>
            <nuxt-link
                to="/about-us"
                class="block border border-black px-8 py-5 rounded-full w-fit"
            >
                More About Us
            </nuxt-link>
        </div>
    </div>
</template>
