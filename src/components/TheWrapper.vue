<script setup>
import AddTodo from '@/components/AddTodo.vue'
import TheTodo from '@/components/TheTodo.vue'
import TodoStats from '@/components/TodoStats.vue';
import { useTodoStore } from '@/stores/todo'
import { collection, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { computed, onMounted } from 'vue'
import { ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
import { auth } from '@/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router';

const store = useTodoStore()
const todos = computed(() => {
    return store.todos
})

const router = useRouter()

onMounted(async () => {
    onSnapshot(collection(db, 'todos'), orderBy('timestamp', 'desc'), (querySnapshot) => {
        let fbTodos = []
        querySnapshot.forEach(doc => {
            fbTodos.push({ ...doc.data(), id: doc.id })
        })
        store.addTodos(fbTodos)
    })
})

const logOut = () => {
    signOut(auth)
    router.push({ name: 'login' })
}
</script>

<template>
    <section class="sm:mx-auto max-w-xl shadow-sm border border-gray-300 rounded-xl p-3 mt-12 mx-2">
        <h1 class="text-center my-3 text-2xl">Vue Mombasa Community Todo App</h1>
        <div class=" flex justify-center">
            <button @click="logOut" class="p-2 bg-indigo-600 text-white rounded-md flex items-center space-x-3">
                <ArrowRightOnRectangleIcon class="w-6 text-white" />
                Logout
            </button>
        </div>
        <div>
            <TodoStats />
            <AddTodo />
            <div v-if="todos.length > 0">
                <TheTodo v-for="todo in todos" :key="todo.id" :todo="todo" />
            </div>
            <div v-else-if="todos.length === 0" class="text-center my-4">
                No Todos! Please add Todos.
            </div>
            <div v-else class="flex items-center space-x-2 justify-center my-10">
                <div class="animate-ping w-8 h-8 rounded-full bg-sky-400"></div>
                <p>Loading Todos...</p>
            </div>
        </div>
    </section>
</template>
