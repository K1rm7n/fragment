import { createDirectus, authentication, rest } from '@directus/sdk'
import { useAuth } from '~~/store/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const env = useRuntimeConfig()

  const storage = useState('auth')
  const cookie = useCookie('auth')
  storage.value = cookie.value
  const dataStorage = {
    /* eslint require-await: "off" */
    set: async (value) => {
      const cookie = useCookie('auth', { maxAge: env.public.cookieMaxAge })
      cookie.value = value
      return (storage.value = value)
    },
    get: async () => {
      return storage.value
    },
  }
  const directus = createDirectus(env.public.apiUrl)
    .with(rest())
    .with(
      authentication('json', {
        storage: dataStorage,
        autoRefresh: true,
      }),
    )
  // inject directus before check user auth
  nuxtApp.provide('client', directus)
  // reauth
  const auth = useAuth()
  if (await dataStorage.get()) {
    try {
      await auth.getUser()
    } catch (e) {
      auth.resetState()
    }
  } else {
    auth.resetState()
  }
})
