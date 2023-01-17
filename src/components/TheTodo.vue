<script setup>
import { TrashIcon, CheckBadgeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="mx-auto max-w-sm my-3 p-3 shadow border border-gray-400 rounded-xl">
        <div class="flex justify-between items-center">
            <h2>Learning Vue.js</h2>
            <div class="flex justify-evenly items-center space-x-2">
                <CheckBadgeIcon class="w-8 text-green-500 cursor-pointer" />
                <TrashIcon class="w-8 text-red-500 cursor-pointer" />
            </div>
        </div>
    </div>
</template>
