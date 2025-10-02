import VueKinesis from 'vue-kinesis'
export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.use(VueKinesis)
})
