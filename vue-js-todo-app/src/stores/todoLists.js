import { defineStore } from 'pinia'

export const useTodoListStore = defineStore({
    id: 'todoLists',
    state: () => ({
            todoLists: [
                {
                    id: 1,
                    title: 'Work'
                }
            ]
    }),
    getters: {
        
    },
    actions: {

    }
})
