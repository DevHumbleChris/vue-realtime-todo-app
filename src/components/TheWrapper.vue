<script setup>
import AddTodo from '@/components/AddTodo.vue'
import TheTodo  from '@/components/TheTodo.vue'
import TodoStats from '@/components/TodoStats.vue';
import { useTodoStore } from '@/stores/todo'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { computed, onMounted } from 'vue'

const store = useTodoStore()
const todos = computed(() => {
    return store.todos
})

onMounted(async () => {
    onSnapshot(collection(db, 'todos'), (querySnapshot) => {
        let fbTodos = []
        querySnapshot.forEach(doc => {
            fbTodos.push({...doc.data(), id: doc.id})
        })
        store.setTodos(fbTodos)
    })
})
</script>

<template>
    <section class="sm:mx-auto max-w-xl shadow-sm border border-gray-300 rounded-xl p-3 mt-12 mx-2">
        <h1 class="text-center my-3 text-2xl">Vue Mombasa Community Todo App</h1>
        <div>
            <TodoStats />
            <AddTodo />
            <div v-if="todos.length > 0">
                <TheTodo v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
            </div>
            <div v-else class="flex items-center space-x-2 justify-center my-10">
                <div class="animate-ping w-8 h-8 rounded-full bg-sky-400"></div>
                <p>Loading Todos...</p>
            </div>
        </div>
    </section>
</template>
