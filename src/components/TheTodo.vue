<script setup>
import { TrashIcon, CheckBadgeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useTodoStore } from '@/stores/todo';
import { computed } from 'vue'
import { doc, updateDoc } from '@firebase/firestore';
import { db } from '@/firebaseConfig'

const store = useTodoStore()

const props = defineProps({
    todo: Object
})

const todo = computed(() => {
    return props.todo
})

const checkTodo = async (id) => {
  await updateDoc(doc(db, 'todos', id), {
    isCompleted: !todo.value.isCompleted
  })
}

const removeTodo = (index) => {
    store.removeTodo(index)
}
</script>

<template>
    <div class="mx-auto max-w-sm my-3 p-3 shadow border border-gray-400 rounded-xl">
        <div class="flex justify-between items-center">
            <h2 :class="todo.isCompleted && 'line-through text-green-600'">{{ todo.title }}</h2>
            <div class="flex justify-evenly items-center space-x-2">
                <CheckBadgeIcon v-if="!todo.isCompleted" class="w-8 text-green-500 cursor-pointer" @click="checkTodo(todo.id)"/>
                <XMarkIcon v-else class="w-8 text-indigo-500 cursor-pointer" @click="checkTodo(todo.id)"/>
                <TrashIcon class="w-8 text-red-500 cursor-pointer" @click="removeTodo(todo.id)" />
            </div>
        </div>
    </div>
</template>
