<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineProps<{ cms: any }>()

gsap.registerPlugin(ScrollTrigger)

let scrollTriggers = [] // To store all ScrollTrigger instances

onMounted(() => {
    const firstLeft = gsap.utils.toArray('.firstLeft')
    firstLeft.forEach((fadeOut) => {
        const trigger = gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: '.firstFrame',
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: 'none',
            },
            rotate: -10,
            left: -300,
            top: -300,
        }).scrollTrigger
        scrollTriggers.push(trigger)
    })

    const secondLeft = gsap.utils.toArray('.secondLeft')
    secondLeft.forEach((fadeOut) => {
        const trigger = gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: '.firstFrame',
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: 'none',
            },
            rotate: -10,
            left: -300,
            top: -300,
        }).scrollTrigger
        scrollTriggers.push(trigger)
    })

    const thirdLeft = gsap.utils.toArray('.thirdLeft')
    thirdLeft.forEach((fadeOut) => {
        const trigger = gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: '.firstFrame',
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: 'none',
            },
            rotate: -10,
            left: -400,
            top: -300,
        }).scrollTrigger
        scrollTriggers.push(trigger)
    })

    const firstRight = gsap.utils.toArray('.firstRight')
    firstRight.forEach((fadeOut) => {
        const trigger = gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: '.firstFrame',
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: 'none',
            },
            rotate: 10,
            right: -300,
            top: -300,
        }).scrollTrigger
        scrollTriggers.push(trigger)
    })

    const secondRight = gsap.utils.toArray('.secondRight')
    secondRight.forEach((fadeOut) => {
        const trigger = gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: '.firstFrame',
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: 'none',
            },
            rotate: 10,
            right: -300,
            top: -300,
        }).scrollTrigger
        scrollTriggers.push(trigger)
    })

    const thirdRight = gsap.utils.toArray('.thirdRight')
    thirdRight.forEach((fadeOut) => {
        const trigger = gsap.to(fadeOut, {
            scrollTrigger: {
                trigger: '.firstFrame',
                start: 'top top',
                end: 'bottom 0',
                scrub: true,
                duration: 1,
                ease: 'none',
            },
            rotate: 10,
            right: -400,
            top: -300,
        }).scrollTrigger
        scrollTriggers.push(trigger)
    })

    const stickyTrigger = ScrollTrigger.create({
        trigger: '.firstFrame',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.stickyItem',
    })
    scrollTriggers.push(stickyTrigger)
})

onBeforeUnmount(() => {
    // Kill all ScrollTriggers
    scrollTriggers.forEach((trigger) => trigger.kill())
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    gsap.killTweensOf('*') // Kill all GSAP tweens
})
</script>
<template>
    <div class="lg:h-[150vh] w-full bg-gray-100 flex justify-center relative firstFrame">
        <nuxt-img
            class="absolute top-0 lef-0 w-full h-full opacity-10"
            src="/images/aurora.png"
        />
        <div
            class="lg:block hidden absolute left-[-100px] top-[-10px] rotate-[15deg] w-[150px] h-[250px] lg:w-[300px] lg:h-[500px] firstLeft z-[5]"
        >
            <nuxt-img src="/images/original.png" />
        </div>
        <div
            class="lg:block hidden absolute left-[-50px] top-[300px] rotate-[20deg] w-[150px] h-[250px] lg:w-[300px] lg:h-[500px] secondLeft z-[4]"
        >
            <nuxt-img src="/images/garlic_parmesan.png" />
        </div>
        <div
            class="lg:block hidden absolute left-[50px] top-[500px] rotate-[35deg] w-[150px] h-[250px] lg:w-[300px] lg:h-[500px] thirdLeft z-[1]"
        >
            <nuxt-img src="/images/salted_egg.png" />
        </div>

        <div
            class="lg:block hidden absolute right-[-100px] top-[-10px] rotate-[-15deg] w-[150px] h-[250px] lg:w-[300px] lg:h-[500px] firstRight z-[5]"
        >
            <nuxt-img src="/images/barbeque.png" />
        </div>
        <div
            class="lg:block hidden absolute right-[-50px] top-[300px] rotate-[-20deg] w-[150px] h-[250px] lg:w-[300px] lg:h-[500px] secondRight z-[4]"
        >
            <nuxt-img src="/images/cheese.png" />
        </div>
        <div
            class="lg:block hidden absolute right-[50px] top-[500px] rotate-[-35deg] w-[150px] h-[250px] lg:w-[300px] lg:h-[500px] thirdRight z-[1]"
        >
            <nuxt-img src="/images/sweet_spicy.png" />
        </div>

        <div class="h-[100vh] stickyItem flex items-center justify-center w-full lg:px-0 px-4">
            <div class="text-center w-[550px] relative z-[2]">
                <p class="text-h3 lg:text-h1 mb-8 playfair">{{ cms.header }}</p>
                <p class="leading-6 font-light mb-10">{{ cms.description }}</p>
                <div class="flex items-center space-y-6 lg:space-y-0 lg:space-x-4 w-fit m-auto lg:flex-row flex-col">
                    <GeneralButton>Be A Reseller</GeneralButton>
                    <GeneralButton variant="outline">Explore Products</GeneralButton>
                </div>
            </div>
        </div>
    </div>
</template>
