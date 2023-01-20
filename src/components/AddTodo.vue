<script setup>
import { ref, computed } from 'vue'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { db } from '@/firebaseConfig'
import { auth } from '@/firebaseConfig'

const user = computed(() => {
  return auth.currentUser
})

const singleTodo = ref('')
const addTodo = async () => {
  await addDoc(collection(db, 'todos'), {
    title: singleTodo.value,
    isCompleted: false,
    timestamp: serverTimestamp(),
    user: {
      uid: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL
    }
  })
  singleTodo.value = ''
}
</script>

<template>
  <form @submit.prevent="addTodo" class="text-center">
    <img :src="user?.photoURL" class="w-12 h-12 rounded-full border border-gray-400" />
    <input type="text" name="price" id="price"
      class="rounded-md border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      placeholder="e.g learning vue.js" v-model="singleTodo" required>
      <button type="submit" class="bg-indigo-500 p-2 mx-3 text-white rounded-md">ADD +</button>
  </form>
</template>
