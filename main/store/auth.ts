import { logout, readMe } from '@directus/sdk'
import { defineStore } from 'pinia'
interface AuthState {
  loggedIn: boolean
  user: object
}

export const useAuth = defineStore('auth', {
  actions: {
    async login({ redirect, password, email }: any) {
      const router: any = useRouter()
      const { $client }: any = useNuxtApp()

      try {
        // Try to login
        await $client.login(email, password)
        // If login was successful, fetch the users data
        const user = await $client.request(readMe())
        // Update the auth store with the user data
        this.loggedIn = true
        this.user = user

        // If there's a redirect, send the user there
        if (redirect) {
          router.push(redirect)
        }
      } catch (e: any) {
        throw new Error(e.errors[0].message)
      }
    },
    async logout() {
      const router = useRouter()
      const { $client }: any = useNuxtApp()
      const cookie: any = useCookie('auth')
      try {
        if (cookie.value.refresh_token) {
          await $client.request(logout(cookie.value.refresh_token))
        }
        // If logout was successful, reset the auth store
        this.resetState()
        // Send the user back to the home page
        await router.push('/')
      } catch (e) {
        this.resetState()
        await router.push('/')
      }
    },
    async getUser() {
      const { $client }: any = useNuxtApp()
      try {
        // Try to fetch the user data
        const user = await $client.request(readMe())
        // Update the auth store with the user data
        this.loggedIn = true
        this.user = user
        await $client.refresh()
      } catch (e) {
        this.resetState()
      }
    },
    resetState() {
      const cookie: any = useCookie('auth')
      cookie.value = null
      this.$reset()
    },
  },

  getters: {
    isLoggedIn: (state: any) => state.loggedIn,
    userData: (state: any) => state.user,
  },

  state: (): AuthState => ({
    loggedIn: false,
    user: {},
  }),
})
