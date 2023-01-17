import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () =>{
        return {
            todos: []
        }
    },
    actions: {
        addTodos(todo) {
            this.todos.push(todo)
        },
        checkTodo(index) {
            this.todos[index].isCompleted = !this.todos[index].isCompleted
        }
    }
})