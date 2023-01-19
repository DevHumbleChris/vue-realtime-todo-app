<script setup>
import { ref } from 'vue'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '@/firebaseConfig'
const singleTodo = ref('')

const addTodo = async () => {
  await addDoc(collection(db, 'todos'), {
    title: singleTodo.value,
    isCompleted: false,
    timestamp: serverTimestamp()
  })
  singleTodo.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo" class="text-center">
    <input type="text" name="price" id="price"
      class="rounded-md border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="e.g learning vue.js" v-model="singleTodo" required>
      <button type="submit" class="bg-indigo-500 p-2 mx-3 text-white rounded-md">ADD +</button>
  </form>
</template>
