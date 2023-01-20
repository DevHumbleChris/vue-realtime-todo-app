<script setup>
import { TrashIcon, CheckBadgeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { db } from '@/firebaseConfig'

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

const removeTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
}
</script>

<template>
    <div class="mx-auto max-w-sm my-3 p-3 shadow border border-gray-400 rounded-xl">
        <div class="flex justify-between">
            <img :src="todo?.user?.photoURL" class="w-12 h-12 rounded-full border border-gray-400" :alt="todo?.user.displayName"/>
            <h2 :class="todo?.isCompleted && 'line-through text-green-600'">{{ todo?.title }}</h2>
            <div class="flex flex-col items-center space-y-2">
                <CheckBadgeIcon v-if="!todo?.isCompleted" class="w-8 text-green-500 cursor-pointer" @click="checkTodo(todo?.id)"/>
                <XMarkIcon v-else class="w-8 text-indigo-500 cursor-pointer" @click="checkTodo(todo?.id)"/>
                <TrashIcon class="w-8 text-red-500 cursor-pointer" @click="removeTodo(todo?.id)" />
            </div>
        </div>
    </div>
</template>
