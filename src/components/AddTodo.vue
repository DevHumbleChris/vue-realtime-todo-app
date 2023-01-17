<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const singleTodo = ref('')

const addTodo = () => {
  store.addTodos({
    name: singleTodo.value,
    isCompleted: false
  })
  singleTodo.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo" class="text-center">
    <input type="text" name="price" id="price"
      class="rounded-md border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="e.g learning vue.js" v-model="singleTodo" @keyup.enter="addTodo" required>
      <button type="submit" class="bg-indigo-500 p-2 mx-3 text-white rounded-md">ADD +</button>
  </form>
</template>
