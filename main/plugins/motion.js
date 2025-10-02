import { MotionPlugin } from '@vueuse/motion'
export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(MotionPlugin)
})
