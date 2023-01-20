<script setup>
import { TrashIcon, CheckBadgeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'
import { deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { db, auth } from '@/firebaseConfig'

const props = defineProps({
    todo: Object
})

const todo = computed(() => {
    return props.todo
})

const user = computed(() => {
    return auth.currentUser
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
            <div class="flex space-x-4">
                <img :src="todo?.user?.photoURL" class="w-16 h-16 rounded-full border border-gray-400" :alt="todo?.user.displayName"/>
                <div>
                    <h2>{{ todo?.user?.name }}</h2>
                    <p :class="todo?.isCompleted? 'line-through text-green-600': 'text-gray-500'">{{ todo?.title }}</p>
                </div>
            </div>
            <div v-if="todo.user.uid === user.uid" class="flex flex-col items-center space-y-2">
                <CheckBadgeIcon v-if="!todo?.isCompleted" class="w-8 text-green-500 cursor-pointer" @click="checkTodo(todo?.id)"/>
                <XMarkIcon v-else class="w-8 text-indigo-500 cursor-pointer" @click="checkTodo(todo?.id)"/>
                <TrashIcon class="w-8 text-red-500 cursor-pointer" @click="removeTodo(todo?.id)" />
            </div>
        </div>
    </div>
</template>
