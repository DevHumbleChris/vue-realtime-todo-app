import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () =>{
        return {
            todos: [],
            loadTodos: true
        }
    },
    actions: {
        addTodos(todo) {
            this.todos.push(todo)
        },
        checkTodo(index) {
            this.todos[index].isCompleted = !this.todos[index].isCompleted
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        },
        setTodos(todos) {
            this.todos = todos
        },
        setLoadTodos() {
            this.loadTodos = !this.loadTodos
        }
    },
    getters: {
        completed: (state) => {
            let completed = []
            if (state.todos > 0) {
                completed = state?.todos?.filter(todo => todo.isCompleted)
            }
            return completed?.length
        },
        incompleted: (state) => {
            let incompleted = []
            if (state.todos > 0) {
                incompleted = state?.todos?.filter(todo => !todo.isCompleted)
            }
            return incompleted?.length
        }
    }
})
