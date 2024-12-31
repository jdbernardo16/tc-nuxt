<script setup lang="ts">
const { siteName } = useAppConfig()
const runtimeConfig = useRuntimeConfig()
const img = useImage()

const logoUrl = runtimeConfig?.public?.LOGO ? img(runtimeConfig?.public?.LOGO) : null
const faviconUrl = '/images/tilapia-logo.png'
</script>

<template>
    <img
        v-if="logoUrl"
        :src="logoUrl"
        alt="Logo"
        class="object-contain h-10"
    />
    <div
        v-else
        class="flex items-center gap-2 text-lg font-bold"
    >
        <nuxt-img
            :src="faviconUrl"
            alt="Logo"
            height="60"
        />
    </div>
</template>
