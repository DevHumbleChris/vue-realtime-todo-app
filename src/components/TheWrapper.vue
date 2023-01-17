<script setup>
import AddTodo from '@/components/AddTodo.vue'
import TheTodo  from '@/components/TheTodo.vue'
</script>

<template>
    <section class="mx-auto max-w-xl shadow-sm border border-gray-300 rounded-xl p-3 mt-12">
        <h1 class="text-center my-3">Vue Mombasa Community Todo App</h1>
        <div>
            <AddTodo />
            <TheTodo />
        </div>
    </section>
</template>
