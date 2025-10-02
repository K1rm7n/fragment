<template>
  <div class="bg-white">
    <div
      class="h-[500px] lg:h-[800px] bg-[#1c1c1c] relative parallax-header overflow-hidden"
    >
      <img
        :src="
          'https://api.fragment-studios.com/assets/' + settings.services_bg.id
        "
        alt=""
        class="z-20 absolute w-full h-full top-0 left-0 object-cover opacity-40"
      />
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col"
      >
        <div
          class="font-eg uppercase lg:text-8xl text-5xl leading-[1.2em] text-white strong-white text-balance"
          v-html="settings.services_title"
        ></div>
        <div class="sub w-[250px] lg:w-[510px]"></div>
      </div>
    </div>
    <div class="pt-[75px] bg-white">
      <div class="mb-[75px]">
        <div
          v-for="(item, index) in services"
          class="hover:bg-[#1c1c1c]/10 transition-all duration-300"
        >
          <div class="max-w-7xl px-5 m-auto py-10 border-b border-b-black/20">
            <div class="lg:flex gap-10">
              <div>
                <NuxtLink :href="'/services/' + item.slug"
                  ><img
                    :src="
                      'https://api.fragment-studios.com/assets/' +
                      item.thumbnail.id +
                      '?width=400'
                    "
                    alt=""
                    class="w-[400px] h-[250px] object-cover"
                /></NuxtLink>
              </div>
              <div class="flex-1 flex lg:flex-col justify-center">
                <p class="max-sm:mr-5 max-sm:mt-6 font-am text-xl opacity-40">
                  /0{{ index + 1 }}
                </p>
                <div>
                  <NuxtLink
                    :href="'/services/' + item.slug"
                    class="group transition-all duration-300"
                    ><h3
                      class="text-2xl lg:text-4xl font-bold mt-5 group-hover:text-[#d00027]"
                    >
                      {{ item.short_title }}
                    </h3></NuxtLink
                  >
                  <p class="mt-5">
                    {{ item.short_description }}
                  </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '~/store/global.js'

const globalData = globalStore()
const services = await globalData.servicesData()
const settings = await globalData.settingsData()
</script>
