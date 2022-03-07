import { defineStore } from 'pinia'
import { userExists } from '../utils/user-management'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isLoggedIn = userExists(username, password)
          if (this.isLoggedIn) {
            resolve()
          } else {
            reject()
          }
        }, 1000)
      })
    },
  },
})
