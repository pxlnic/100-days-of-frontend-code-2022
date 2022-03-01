import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
    id: 'todos',
    state: () => ({
            todos: (JSON.parse(localStorage.getItem('todos')) || []),
            todosFilter: 'open',
            todosDetailsOpen: false,
            todosFormData: {
                title: "",
                description: "",
                complete: false,
                valid: false,
                clicked: false,
            }
    }),
    getters: {
        getAllTodos: (state) => state.todos.sort(function(a, b){return (a.complete === b.complete) ? 0 : a.complete ? 1 : -1 }),
        getIncompleteTodos: (state) => {
            return state.todos.filter((todo) => !todo.complete)
        },
        getCompleteTodos: (state) => {
            return state.todos.filter((todo) => todo.complete)
        },
        getTodosCount: (state) => {
            return state.todos.length
        },
        getIncompleteTodosCount: (getters) => {
            return getters.getIncompleteTodos.length
        },
        getCompleteTodosCount: (getters) => {
            return getters.getCompleteTodos.length
        },
        getTodosFilter: (state) => {
            return state.todosFilter
        },
        getTodosDetailsOpen:(state) => {
            return state.todosDetailsOpen
        },
        getTodosFormData:(state) => {
            return state.todosFormData
        }
    },
    actions: {
        initiateTodos(){

        },
        addTodo(todoItem) {
            this.todos = [todoItem, ...this.todos]
            console.log("ADDING TODO")
            console.log(this.todos)
            localStorage.setItem("todos", JSON.stringify(this.todos))
        },
        removeTodo(todoId){
            this.todos = this.todos.filter((item) => item.id !== todoId)
            console.log("REMOVING TODO")
            console.log(this.todos)
            localStorage.setItem("todos", JSON.stringify(this.todos))
        },
        updateTodo(todoId, todo){
            const todoIndex = this.findTodoIndexById(todoId)

            if(todoIndex !== -1){
                this.todos[todoIndex] = todo
                console.log("UPDATING TODO")
                console.log(this.todos)
                localStorage.setItem("todos", JSON.stringify(this.todos))
            }
        },
        toggleTodo(todoId){
            const todoIndex = this.findTodoIndexById(todoId)

            if(todoIndex !== -1){
                this.todos[todoIndex].complete = !this.todos[todoIndex].complete
                console.log("TOGGLING TODO")
                console.log(this.todos)
                localStorage.setItem("todos", JSON.stringify(this.todos))
            }
        },
        findTodoIndexById(id) {
            return this.todos.findIndex((todo) => todo.id === id);
        },
        setTodosFilter(type){
            this.todosFilter = type;
        },
        setTodosDetailsOpen(status){
            this.todosDetailsOpen = status;
        },
        setTodosFormData(data){
            this.todosFormData = data
        }
    }
})
