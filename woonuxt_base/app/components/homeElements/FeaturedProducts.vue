<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
defineProps<{ cms: any }>()
onMounted(() => {
    const details = gsap.utils.toArray('.desktopContentSection:not(:first-child)')
    const photos = gsap.utils.toArray('.desktopPhoto:not(:first-child)')

    gsap.set(photos, { opacity: 0 })

    const allPhotos = gsap.utils.toArray('.desktopPhoto')

    // create
    let mm = gsap.matchMedia()

    // add a media query. When it matches, the associated function will run
    mm.add('(min-width: 1024px)', () => {
        // this setup code only runs when viewport is at least 600px wide
        console.log('desktop')

        ScrollTrigger.create({
            trigger: '.gallery',
            start: 'top 112px',
            end: 'bottom bottom',
            pin: '.right',
            markers: false,
        })

        //create scrolltrigger for each details section
        //trigger photo animation when headline of each details section
        //reaches 80% of window height
        details.forEach((detail, index) => {
            let headline = detail.querySelector('h3')
            let animation = gsap.timeline().to(photos[index], { opacity: 1 }).set(allPhotos[index], { autoAlpha: 0 })
            ScrollTrigger.create({
                trigger: headline,
                start: 'top 80%',
                end: 'top 50%',
                animation: animation,
                scrub: true,
                markers: false,
            })
        })

        return () => {
            // optional
            // custom cleanup code here (runs when it STOPS matching)
            console.log('mobile')
        }
    })
})
</script>
<template>
    <div class="relative lg:pb-0 pb-10">
        <div class="w-full lg:px-20 lg:pt-20 lg:pb-0 px-4 pt-10">
            <h3 class="text-4xl lg:text-h3 text-center playfair lg:mb-0 mb-10">{{ cms.header }}</h3>
        </div>
        <nuxt-img
            class="absolute top-0 left-0 w-full h-full opacity-30"
            src="/images/product-bg.png"
        />
        <div class="gallery relative">
            <div class="left z-[2]">
                <div class="desktopContent">
                    <div
                        v-for="section in cms.featuredProducts"
                        :key="section.id"
                        class="desktopContentSection"
                    >
                        <h3 class="playfair text-h3 mb-6">{{ section.name }}</h3>
                        <div class="ck-content text-lg">
                            <p>{{ section.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="right">
                <!-- desktop content -->

                <div class="desktopPhotos m-auto">
                    <div
                        v-for="photo in cms.featuredProducts"
                        :key="photo.id"
                        class="desktopPhoto"
                    >
                        <nuxt-img
                            class="w-full h-full object-contain"
                            :src="photo.image.node.sourceUrl"
                        />
                    </div>
                </div>

                <!-- mobile content -->
                <div class="mobileContent">
                    <div
                        v-for="item in cms.featuredProducts"
                        :key="item.id"
                        class="mb-10 last:mb-0"
                    >
                        <div class="aspect-w-1 aspect-h-1 mb-4">
                            <nuxt-img
                                class="w-full h-full object-contain"
                                :src="item.image.node.sourceUrl"
                            />
                        </div>
                        <h1 class="text-3xl font-bold mb-3">{{ item.name }}</h1>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
