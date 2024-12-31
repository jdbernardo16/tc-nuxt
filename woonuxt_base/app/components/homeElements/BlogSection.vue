<script setup lang="ts">
defineProps<{ cms: any; blogs: BlogNode[] }>()
const { data } = await useAsyncGql('getBlogs')
const blogs = data.value?.posts?.edges || []
const featuredPosts = blogs.filter((blog) => blog.node.blog?.blogContent?.featuredToHome)

function convertDate(date: string) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const dateObject = new Date(date)
    const month = months[dateObject.getMonth()]
    const day = dateObject.getDate()
    const year = dateObject.getFullYear()

    return `${month} ${day}, ${year}`
}
</script>
<template>
    <div class="lg:px-20 lg:py-20 px-4 py-10 bg-neutral-100">
        <div class="flex items-center justify-between mb-16">
            <h3 class="text-4xl lg:text-h3 playfair">{{ cms.header }}</h3>
            <GeneralButton
                size="sm"
                variant="outline"
                >Read All Articles</GeneralButton
            >
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <nuxt-link
                :to="`blog${blog.node.uri}`"
                v-for="(blog, index) in featuredPosts.slice(0, 3)"
                :key="index"
                class="block"
            >
                <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <nuxt-img
                        alt="image"
                        :src="blog.node.blog.blogContent.banner.node.sourceUrl"
                        class="h-56 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6 min-h-[199px]">
                        <time
                            datetime="2022-10-10"
                            class="block text-xs text-gray-500"
                        >
                            {{ convertDate(blog.node.date) }}
                        </time>

                        <h3 class="mt-0.5 text-lg text-gray-900">{{ blog.node.blog?.blogContent?.title || '' }}</h3>

                        <p class="mt-2 text-sm/relaxed text-gray-500 line-clamp-3">
                            {{ blog.node.blog?.blogContent?.shortDescription || '' }}
                        </p>
                    </div>
                </article>
            </nuxt-link>
        </div>
    </div>
</template>
