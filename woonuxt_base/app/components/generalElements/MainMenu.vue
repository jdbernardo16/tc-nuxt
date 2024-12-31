<script setup lang="ts">
const { wishlistLink } = useAuth()
function reloadPage(event: Event) {
    event.preventDefault() // Prevent default navigation
    window.location.href = '/' // Redirect and reload
}
</script>

<template>
    <nav>
        <NuxtLink
            to="/"
            @click="reloadPage"
            >Home</NuxtLink
        >
        <NuxtLink to="/products">{{ $t('messages.general.allProducts') }}</NuxtLink>
        <NuxtLink to="/categories">{{ $t('messages.shop.category', 2) }}</NuxtLink>
        <NuxtLink to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
        <NuxtLink
            class="lg:hidden"
            :to="wishlistLink"
            :prefetch="false"
            >Wishlist</NuxtLink
        >
        <NuxtLink
            class="lg:hidden"
            to="/my-account"
            :prefetch="false"
            >My Account</NuxtLink
        >
    </nav>
</template>
