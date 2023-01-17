<script setup>
import AddTodo from '@/components/AddTodo.vue'
import TheTodo  from '@/components/TheTodo.vue'
import TodoStats from '@/components/TodoStats.vue';
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const todos = store.todos
</script>

<template>
    <section class="sm:mx-auto max-w-xl shadow-sm border border-gray-300 rounded-xl p-3 mt-12 mx-2">
        <h1 class="text-center my-3 text-2xl">Vue Mombasa Community Todo App</h1>
        <div>
            <TodoStats />
            <AddTodo />
            <TheTodo v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index" />
        </div>
    </section>
</template>
