import { defineStore } from 'pinia'
import { userExists } from '../utils/user-management'
import { SessionManagement } from '../utils/session-management'
import { uuid } from '../utils/uuid'

export const useLoginStore = defineStore({
  id: 'login',
  state: () => ({
    isLoggedIn: Boolean(SessionManagement.get('token')),
  }),
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        if (userExists(username, password)) {
          resolve()
          this.isLoggedIn = true
          SessionManagement.set('token', uuid(), 30)
        } else {
          reject()
        }
      })
    },
    logout() {
      SessionManagement.remove('token')
    },
  },
})
