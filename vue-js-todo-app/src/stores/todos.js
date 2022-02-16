import { defineStore } from 'pinia'

export const useTodoListStore = defineStore({
    id: 'todos',
    state: () => ({
            todoLists: [
                {
                    id: 1,
                    title: 'Work'
                }
            ],
            todos: [
                {
                    id: 1,
                    listId: 1,
                    parentId: null,
                    title: 'Test',
                    description: 'Testing, testing ... 1, 2, 3 ... testing..',
                    createdAt: 'DATE/TIME',
                    dueAt: 'DATE/TIME',
                    complete: false,
                    reminder: {},
                }
            ],
            reminders: [
                {
                    todoId: 1,
                    set: false,
                    dismissed: false,
                    snoozed: {
                    state: false,
                    snoozedAt: "DATE/TIME"
                    }
                }
            ],
            settings:{
                darkMode: false,
                snoozeDuration: 10, // in minutes
            }
    }),
    getters: {
        // Todos
        getAllTodos: (state) => state.todos,
        getIncompleteTodos: (state) => {
            return state.todos.filter((todo) => !todo.complete)
        },
        getCompleteTodos: (state) => {
            return state.todos.filter((todo) => todo.complete)
        },
        getTodosCount: (state) => {
            return state.todos.length
        },
        // Reminders
        getReminders: (state) => state.reminders,
        // Settings
        getSettings: (state) => state.settings
    },
    actions: {
        // Todos
        addTodo(todoItem) {
            this.todos = [todoItem, ...this.todos]
        },
        removeTodo(todoId){
            this.todos = this.todos.filter((item) => item.id !== todoId)
        },
        toggleTodo(todoId){
            const todoIndex = this.findTodoIndexById(todoId)

            if(todoIndex !== -1){
                this.todos[todoIndex].complete = !this.todos[todoIndex].complete
            }
        },
        findTodoIndexById(id) {
            return this.todos.findIndex((todo) => todo.id === id);
        },
        // Reminders
        addReminder(reminderItem){
            this.reminders = [reminderItem, ...this.reminders]
        },
        removeReminder(todoId){
            this.reminders = this.reminders.filter((item) => item.todoId !== todoId)
        },
        // Settings
        toggleTheme(){ 
            this.settings.darkMode = !this.settings.darkMode
        }
    }
})
