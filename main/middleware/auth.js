import { useAuth } from '~/store/auth'
// const msg =
//   'You must be logged in to view this page. Redirecting back to home page.'
export default defineNuxtRouteMiddleware(() => {
  const user = useAuth()
  if (!user.isLoggedIn) {
    console.log('close')
    showError({
      statusMessage: 'Unauthorized',
      statusCode: 404,
    })
    // Or simply redirect
    if (process.client) {
      window.alert(msg)
    }
    return navigateTo('/')
  }
})
