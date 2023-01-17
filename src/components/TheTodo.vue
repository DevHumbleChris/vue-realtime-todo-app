<script setup>
import { TrashIcon, CheckBadgeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useTodoStore } from '@/stores/todo';

const store = useTodoStore()

const props = defineProps({
    todo: Object,
    index: Number
})

const checkTodo = (index) => {
    store.checkTodo(index)
}

const removeTodo = (index) => {
    store.removeTodo(index)
}
</script>

<template>
    <div class="mx-auto max-w-sm my-3 p-3 shadow border border-gray-400 rounded-xl">
        <div class="flex justify-between items-center">
            <h2 :class="props.todo.isCompleted && 'line-through text-green-600'">{{ props.todo.name }}</h2>
            <div class="flex justify-evenly items-center space-x-2">
                <CheckBadgeIcon v-if="!props.todo.isCompleted" class="w-8 text-green-500 cursor-pointer" @click="checkTodo(props.index)"/>
                <XMarkIcon v-else class="w-8 text-indigo-500 cursor-pointer" @click="checkTodo(props.index)"/>
                <TrashIcon class="w-8 text-red-500 cursor-pointer" @click="removeTodo(index)" />
            </div>
        </div>
    </div>
</template>
