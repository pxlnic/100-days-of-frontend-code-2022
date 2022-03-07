import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
    id: 'settings',
    state: () => ({
            settings:{
                darkMode: false,
                snoozeDuration: 10, // in minutes
            }
    }),
    getters: {
        getSettings: (state) => state.settings
    },
    actions: {
        toggleTheme(){ 
            this.settings.darkMode = !this.settings.darkMode
        },
        setSnoozeDuration(duration){
            this.settings.snoozeDuration = duration;
        }
    }
})
