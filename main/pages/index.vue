<template>
  <div class="bg-white">
    <div class="relative">
      <HeaderMain></HeaderMain>
    </div>
    <div class="relative pt-[100px] lg:-mb-32 z-30">
      <div class="max-w-7xl px-5 m-auto">
        <div
          class="uppercase text-black border-t-[1px] border-black/20 py-5 lg:py-8 tracking-wide font-am text-lg inline-flex items-center min-w-[250px]"
        >
          <Icon
            name="tdesign:microphone-1"
            class="text-[#e4002b] w-6 h-6 mr-3"
          ></Icon
          >About us
        </div>
        <hr class="opacity-20 mb-10 border-t-black/60" />
        <div
          v-motion
          class="font-eg uppercase text-4xl leading-[1.2em] lg:text-[6rem] strong-black"
          :initial="{ opacity: 0, y: 25 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'ease',
              delay: 100,
              duration: 500,
            },
          }"
          v-html="home.about_title"
        ></div>
        <div
          class="grid lg:grid-cols-2 gap-[50px] lg:gap-[100px] mt-[20px] xl:mt-[70px] overflow-hidden"
        >
          <div
            v-motion
            class="h-full overflow-hidden"
            :initial="{ opacity: 0, y: 25 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'ease',
                delay: 200,
                duration: 500,
              },
            }"
          >
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                home.about_image.id +
                '?width=570'
              "
              alt=""
              class="max-sm:aspect-1 lg:h-full object-cover"
            />
          </div>
          <div
            v-motion
            :initial="{ opacity: 0, y: 25 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'ease',
                delay: 200,
                duration: 500,
              },
            }"
          >
            <hr class="opacity-20 mb-10 border-t-black/60 lg:text-xl" />
            <p class="font-bold text-lg lg:text-2xl">
              {{ home.about_subtitle }}
            </p>
            <div
              class="flex flex-col gap-5 mt-10"
              v-html="home.about_description"
            ></div>
            <div class="mt-10 lg:mb-64">
              <NuxtLink
                href="/about"
                class="max-sm:w-full text-white bg-[#e4002b] inline-flex justify-center items-center group shadow hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 text-lg"
                ><span class="flex-1 p-3 px-10" @click="globalData.menu = false"
                  >ABOUT US</span
                >
                <div
                  class="w-[62px] h-[62px] bg-[#d00027] flex justify-center items-center"
                >
                  <Icon
                    name="tdesign:arrow-right-up"
                    class="w-7 h-7 text-white group-hover:rotate-45 transition-all duration-300"
                  ></Icon></div
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="py-[20px] max-sm:pb-[100px] lg:py-[160px] bg-[#1c1c1c] relative max-sm:mt-28"
    >
      <div class="absolute w-full h-full left-0 top-0 grayscale opacity-20">
        <img
          src="/bg.jpg"
          alt=""
          class="absolute w-full h-full left-0 top-0 object-cover"
        />
      </div>
      <div class="max-w-7xl px-5 m-auto z-10 relative">
        <h3
          v-motion
          class="text-white text-3xl leading-[1.2em] lg:text-6xl mt-[100px]"
          :initial="{ opacity: 0, y: 25 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'ease',
              delay: 100,
              duration: 500,
            },
          }"
        >
          {{ home.stat_title }}
        </h3>
        <div>
          <div
            class="grid lg:grid-cols-2 gap-[100px] text-white lg:ml-[200px] mt-[50px] lg:mt-[100px]"
          >
            <div
              v-for="item in home.stat_data.slice(0, 2)"
              v-motion
              class="border-t border-t-white/20"
              :initial="{ opacity: 0, y: 25 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'ease',
                  delay: 300,
                  duration: 500,
                },
              }"
            >
              <p class="uppercase mt-10">{{ item.title }}</p>
              <p class="text-9xl mt-5">
                <span class="font-eg font">{{ item.number }}</span
                ><span>+</span>
              </p>
              <p class="max-w-[320px] mt-5">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-[75px] bg-white">
      <div class="max-w-7xl px-5 m-auto">
        <p
          class="uppercase text-black border-t-[1px] border-black/20 py-5 lg:py-8 tracking-wide font-am text-lg inline-flex items-center min-w-[250px]"
        >
          <Icon
            name="tdesign:microphone-1"
            class="text-[#e4002b] w-6 h-6 mr-3"
          ></Icon
          >OUR SERVICES
        </p>
        <hr class="opacity-20 mb-10 border-t-black/60" />
        <div
          v-motion
          class="font-eg uppercase text-4xl leading-[1.2em] lg:text-[6rem] strong-black text-balance max-sm:nobr"
          :initial="{ opacity: 0, y: 25 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'ease',
              delay: 100,
              duration: 500,
            },
          }"
          v-html="home.services_title"
        ></div>
        <hr class="opacity-20 mt-8 border-t-black/60" />
      </div>
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
    <div class="bg-[#1c1c1c] py-[100px] lg:py-[150px] relative">
      <div class="absolute w-full h-full left-0 top-0 opacity-10 grayscale">
        <img
          src="/bg.jpg"
          alt=""
          class="absolute w-full h-full left-0 top-0 object-cover"
        />
      </div>
      <div class="max-w-7xl px-5 m-auto relative z-10">
        <p
          class="uppercase text-white border-t-[1px] border-white/20 py-5 lg:py-8 tracking-wide font-am text-lg inline-flex items-center min-w-[250px]"
        >
          <Icon
            name="tdesign:microphone-1"
            class="text-[#e4002b] w-6 h-6 mr-3"
          ></Icon
          >Careers in Fragment
        </p>
        <hr class="opacity-20 mb-10 border-t-white/100" />
        <div
          v-motion
          class="font-eg uppercase text-4xl leading-[1.2em] lg:text-[6rem] leading-[1em] text-white strong-white"
          :initial="{ opacity: 0, y: 25 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'ease',
              delay: 100,
              duration: 500,
            },
          }"
          v-html="home.careers_title"
        ></div>
        <div
          class="grid lg:grid-cols-2 gap-10 lg:gap-[100px] mt-[50px] lg:mt-[150px] lg:mb-[150px]"
        >
          <div
            v-motion
            class="relative"
            :initial="{ opacity: 0, y: 25 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'ease',
                delay: 200,
                duration: 500,
              },
            }"
          >
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                home.careers_image_1.id +
                '?width=570'
              "
              class="max-h-[700px] w-full object-cover relative max-sm:w-[90%] max-sm:aspect-1"
            />
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                home.careers_image_2.id +
                '?width=400'
              "
              alt=""
              class="absolute w-[40vw] lg:w-[500px] lg:h-[400px] bottom-0 right-0 -translate-y-1/2 lg:translate-x-2/3 lg:translate-y-1/2"
            />
            <div
              class="lg:absolute z-10 text-white max-sm:mt-5 px-5 lg:p-5 border-l border-l-[#e4002b] lg:ml-5 mb-5 bottom-0"
            >
              <p class="font-bold text-xl" v-html="home.careers_name"></p>
              <p class="opacity-70" v-html="home.careers_job"></p>
            </div>
          </div>
          <div
            v-motion
            class="text-white lg:text-xl"
            :initial="{ opacity: 0, y: 25 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'ease',
                delay: 200,
                duration: 500,
              },
            }"
          >
            <hr class="opacity-20 mb-10 border-t-white/100" />
            <p>
              {{ home.careers_description }}
            </p>
            <div class="mt-10 lg:mb-64">
              <NuxtLink
                href="/contacts"
                class="text-white bg-[#e4002b] inline-flex justify-center items-center group shadow hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 text-lg"
                ><span class="p-3 px-10" @click="globalData.menu = false"
                  >JOIN OUR TEAM</span
                >
                <div
                  class="w-[62px] h-[62px] bg-[#d00027] flex justify-center items-center"
                >
                  <Icon
                    name="tdesign:arrow-right-up"
                    class="w-7 h-7 text-white group-hover:rotate-45 transition-all duration-300"
                  ></Icon></div
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
const globalData = globalStore()
const home = await globalData.homeData()
const services = await globalData.servicesData()
</script>
