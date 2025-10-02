import { GesturePlugin } from '@vueuse/gesture'
export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(GesturePlugin)
})
