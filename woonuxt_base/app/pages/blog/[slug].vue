<script setup lang="ts">
const slug = useRoute().params.slug as string
const { data } = await useAsyncGql('getBlogBySlug', { uri: slug })
const blog = data.value?.nodeByUri

const { data: blogsData } = await useAsyncGql('getBlogs')
const blogs = blogsData.value?.posts?.edges?.filter((blog) => blog.node.uri !== `/${slug}/`) || []

onMounted(() => {
    window.scrollTo(0, 0)
})
</script>
<template>
    <section>
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-10 lg:py-16">
            <!-- Back Button -->
            <div class="w-fit mb-4">
                <NuxtLink
                    to="/blog"
                    class="text-primary flex items-center w-fit"
                >
                    <ArrowLeft class="w-5 h-5 mr-2" />
                    Back
                </NuxtLink>
            </div>
            <div class="flex lg:flex-row flex-col justify-between items-start lg:space-y-0 space-y-10 lg:space-x-20">
                <!-- Blog Content -->
                <div class="lg:flex-1">
                    <!-- Image -->
                    <div
                        v-if="!blog"
                        class="w-full h-64 bg-gray-200 animate-pulse rounded-lg mb-4"
                    ></div>
                    <img
                        v-else
                        :src="blog.blog.blogContent.banner.node.sourceUrl"
                        alt="banner"
                        format="webp"
                        quality="90"
                        loading="eager"
                        class="w-full h-full object-cover mb-4"
                    />

                    <div class="mb-10">
                        <h1
                            v-if="!blog"
                            class="h-8 bg-gray-200 animate-pulse rounded mb-2 w-3/4"
                        ></h1>
                        <h1
                            v-else
                            class="text-3xl font-bold mb-2"
                        >
                            {{ blog.blog.blogContent.title }}
                        </h1>
                        <p
                            v-if="!blog"
                            class="h-4 bg-gray-200 animate-pulse rounded w-1/3"
                        ></p>
                        <p v-else>
                            {{
                                new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })
                            }}
                        </p>
                    </div>

                    <div
                        v-if="!blog"
                        class="space-y-4"
                    >
                        <div class="h-4 bg-gray-200 animate-pulse rounded w-full"></div>
                        <div class="h-4 bg-gray-200 animate-pulse rounded w-5/6"></div>
                        <div class="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
                    </div>
                    <div
                        v-else
                        class="wysiwyg"
                        v-html="blog.blog.blogContent.description"
                    ></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="max-w-[1440px] m-auto px-4 lg:px-20 py-10 lg:py-16">
            <div class="flex items-center justify-between mb-16">
                <h3 class="text-4xl lg:text-h3 playfair">More Articles</h3>
            </div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <nuxt-link
                    :to="`/blog${blog.node.uri}`"
                    v-for="(blog, index) in blogs.slice(0, 3)"
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
                                {{
                                    new Date(blog.node.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })
                                }}
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
