import { defineStore } from 'pinia'

export const useRemindersStore = defineStore({
    id: 'reminders',
    state: () => ({
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
    }),
    getters: {
        getReminders: (state) => state.reminders,
    },
    actions: {
        // Reminders
        addReminder(reminderItem){
            this.reminders = [reminderItem, ...this.reminders]
        },
        removeReminder(todoId){
            this.reminders = this.reminders.filter((item) => item.todoId !== todoId)
        },
    }
})
