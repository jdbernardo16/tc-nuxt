<template>
    <button
        :class="[
            size === 'sm' && 'px-4 py-2 rounded-full',
            size === 'md' && 'px-8 py-5 rounded-full',
            size === 'lg' && 'px-10 py-6 rounded-full',
            buttonClass,
            variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
            variant === 'secondary' && 'bg-gray-200 text-gray-800 hover:bg-gray-300',
            variant === 'destructive' && 'bg-red-600 text-white hover:bg-red-700',
            variant === 'outline' && 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-100',
            variant === 'ghost' && 'bg-transparent text-gray-800 hover:bg-gray-100',
        ]"
        :type="type"
        :disabled="disabled"
        @click="handleClick"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    buttonClass: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'button',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value: string) => ['primary', 'secondary', 'destructive', 'outline', 'ghost'].includes(value),
    },
    size: {
        type: String,
        default: 'md',
        validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
    },
})

const handleClick = () => {
    // Add any click handling logic here
}
</script>

<style scoped>
/* Tailwind CSS used directly; no additional styles required */
</style>
