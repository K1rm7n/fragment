<template>
  <div class="bg-white">
    <div class="bg-[#1c1c1c] relative parallax-header pb-[75px]">
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col pt-[150px] lg:pt-[200px] pb-[100px]"
      >
        <h1
          class="font-eg uppercase text-3xl lg:text-7xl leading-[1.2em] text-white text-balance"
        >
          {{ portfolio.long_title }}
        </h1>
      </div>
    </div>
    <div class="pb-[75px]">
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col -mt-[100px]"
      >
        <video
          muted
          playsinline
          loop
          autoplay
          :src="
            'https://api.fragment-studios.com/assets/' + portfolio.thumbnail.id
          "
          alt=""
          class="w-full aspect-2 object-cover"
        ></video>
      </div>
      <div
        class="prose lg:prose-xl max-w-7xl px-5 mx-auto mt-10"
        v-html="portfolio.description"
      ></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '~/store/global.js'
import { navigateTo } from '#app'

const globalData = globalStore()
const pData = await globalData.portfolioData()
const route = useRoute()
const portfolio = pData.find((item) => item.slug === route.params.slug)
if (!portfolio) {
  navigateTo('/')
}
</script>
<style lang="scss">
.prose iframe {
  @apply aspect-[16/9] w-full h-auto;
}
</style>
