<template>
  <div class="bg-white">
    <div class="bg-[#1c1c1c] relative parallax-header pb-[75px]">
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col pt-[150px] lg:pt-[200px] pb-[100px]"
      >
        <h1
          class="font-eg uppercase text-3xl lg:text-7xl leading-[1.2em] text-white text-balance"
        >
          {{ service.title }}
        </h1>
      </div>
    </div>
    <div class="pb-[75px]">
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col -mt-[100px]"
      >
        <img
          :src="
            'https://api.fragment-studios.com/assets/' +
            service.thumbnail.id +
            '?width=1240'
          "
          alt=""
          class="w-full aspect-2 object-cover"
        />
      </div>
      <div
        class="prose lg:prose-xl max-w-7xl px-5 mx-auto mt-10"
        v-html="service.description"
      ></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '~/store/global.js'
import { navigateTo } from '#app'

const globalData = globalStore()
const services = await globalData.servicesData()
const route = useRoute()
const service = services.find((item) => item.slug === route.params.slug)
if (!service) {
  navigateTo('/')
}
</script>
<style lang="scss">
.prose iframe {
  @apply aspect-[16/9] w-full h-auto;
}
</style>
