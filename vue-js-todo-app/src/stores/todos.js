import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id: 'todos',
    state: () => ({
            todoList: [
                {
                    id: 1,
                    parentId: null,
                    title: 'Test',
                    description: 'Testing, testing ... 1, 2, 3 ... testing.',
                    date: 'DATE/TIME',
                    complete: false,
                    reminder: {},
                }
            ],
            remindersList: [
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
        getTodoList: (state) => state.todoList,
        getReminders: (state) => state.remindersList,
        getSettings: (state) => state.settings
    },
    actions: {
        addTodo(todoItem) {
            this.todoList = [todoItem, ...this.todoList]
        },
        removeTodo(todoId){
            this.todoList = this.todoList.filter((item) => item.id !== todoId)
        },
        addReminder(reminderItem){
            this.remindersList = [reminderItem, ...this.remindersList]
        },
        removeReminder(todoId){
            this.remindersList = this.remindersList.filter((item) => item.todoId !== todoId)
        },
        toggleTheme(){ 
            this.settings.darkMode = !this.settings.darkMode
        }
    }
})
