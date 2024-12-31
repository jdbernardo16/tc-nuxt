<template>
    <!-- Frame 1 -->
    <HomeBanner :cms="homeData.frame1" />

    <!-- Frame 2 -->
    <FeaturedProducts :cms="homeData.frame2" />

    <!-- Frame 3 -->
    <AboutSection :cms="homeData.frame3" />

    <!-- Frame 4 -->
    <PackageSection :cms="homeData.frame4" />

    <!-- Frame 5 -->
    <TestimonySection :cms="homeData.frame5" />

    <!-- frame 6 -->
    <BlogSection :cms="homeData.frame6" />
</template>

<script setup lang="ts">
const { siteName, description, shortDescription, siteImage } = useAppConfig()

useSeoMeta({
    title: `Home`,
    ogTitle: siteName,
    description: description,
    ogDescription: shortDescription,
    ogImage: siteImage,
    twitterCard: `summary_large_image`,
})

const { data } = await useAsyncGql('getHome')

const homeData = computed(() => transformToHome(data.value))

const transformToHome = (data: any) => data?.page?.home || null
</script>

<style lang="css" scoped>
.gallery {
    display: flex;
    /* outline:1px solid red; */
}

.left {
    width: 50%;
}

.right {
    height: calc(100vh - 112px);
    /* outline:1px solid purple; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.desktopContent {
    margin: auto;
    width: 80%;
}

.desktopContentSection {
    min-height: calc(100vh - 112px);
    /* outline:1px solid green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.desktopPhotos {
    width: 40vw;
    height: 40vw;
    position: relative;
    overflow: hidden;
}

.desktopPhoto {
    position: absolute;
    width: 100%;
    height: 100%;
}

.mobileContent {
    display: none;
    width: 80vw;
}

.mobilePhoto {
    width: 80vw;
    height: 80vw;
    margin-top: 5em;
    border-radius: 6vw;
}
</style>
