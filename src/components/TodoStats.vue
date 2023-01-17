<script setup>
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const completed = store.completed
const incompleted = store.incompleted
</script>

<template>
    <div class="flex justify-center items-center my-3 space-x-3 text-gray-600">
        <h1 class="text-2xl">Stats</h1>
        <div class="space-y-2 rounded-md border border-gray-400 p-2">
            <h2>Completed</h2>
            <p class="text-center text-2xl text-green-600">{{ completed }}</p>
        </div>
        <div class="space-y-2 rounded-md border border-gray-400 p-2">
            <h2>InCompleted</h2>
            <p class="text-center text-2xl text-red-600">{{ incompleted }}</p>
        </div>
    </div>
</template>
