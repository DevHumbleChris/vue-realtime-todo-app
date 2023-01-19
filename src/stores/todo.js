import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () =>{
        return {
            todos: [],
            loadTodos: true
        }
    },
    actions: {
        addTodos(todos) {
            this.todos = todos
        }
    }
})
