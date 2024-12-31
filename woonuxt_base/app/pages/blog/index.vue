<script setup lang="ts">
const { data } = await useAsyncGql('getBlogs')
const blogs = data.value?.posts?.edges || []

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
    <section>
        <div class="max-w-[1440px] m-auto py-10 lg:py-16 px-4 lg:px-20">
            <h1 class="mb-10 text-h3 playfair">Blogs</h1>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <nuxt-link
                    :to="`blog${blog.node.uri}`"
                    v-for="(blog, index) in blogs"
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
    </section>
</template>
