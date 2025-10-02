<template>
  <div class="bg-white">
    <div
      class="h-[500px] lg:h-[800px] bg-[#1c1c1c] relative parallax-header overflow-hidden"
    >
      <img
        :src="
          'https://api.fragment-studios.com/assets/' +
          settings.portfolio_bg.id +
          '?width=1920'
        "
        alt=""
        class="z-20 absolute w-full h-full top-0 left-0 object-cover opacity-40"
      />
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col"
      >
        <div
          class="font-eg uppercase lg:text-8xl text-5xl leading-[1.2em] text-white strong-white text-balance"
          v-html="settings.portfolio_title"
        ></div>
        <div class="sub w-[250px] lg:w-[510px]"></div>
      </div>
    </div>
    <div class="py-[75px] bg-white">
      <div class="max-w-7xl px-5 m-auto grid gap-20">
        <NuxtLink
          v-for="item in portfolio"
          :href="'/portfolio/' + item.slug"
          class="lg:grid grid-cols-2 relative"
        >
          <div>
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                item.thumbnail_image.id +
                '?width=900'
              "
              alt=" "
              class="lg:absolute lg:w-[50vw] lg:h-full object-cover"
            />
          </div>
          <div class="lg:py-20 relative z-20">
            <div class="max-sm:pt-10 lg:p-20 bg-white">
              <h3
                class="text-2xl lg:text-4xl font-bold hover:text-[#e4002b] duration-300 transition-all"
              >
                {{ item.long_title }}
              </h3>
              <div class="mt-5">
                <NuxtLink
                  :href="'/services/' + item.slug"
                  class="flex items-center group"
                  ><Icon
                    name="tdesign:arrow-right-up"
                    class="w-7 h-7 text-[#e4002b] group-hover:rotate-45 duration-300 transition-all"
                  ></Icon
                  ><span class="ml-5 group-hover:text-[#e4002b]"
                    >Read more</span
                  ></NuxtLink
                >
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '~/store/global.js'

const globalData = globalStore()
const portfolio = await globalData.portfolioData()
const settings = await globalData.settingsData()
if(!settings.portfolio){
  navigateTo('/')
}
</script>
