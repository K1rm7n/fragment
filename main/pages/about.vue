<template>
  <div class="bg-white">
    <div
      class="h-[500px] lg:h-[800px] bg-[#1c1c1c] relative parallax-header overflow-hidden"
    >
      <img
        :src="
          'https://api.fragment-studios.com/assets/' +
          about.background.id +
          '?width=1920'
        "
        alt=""
        class="z-20 absolute w-full h-full top-0 left-0 object-cover opacity-40"
      />
      <div
        class="max-w-7xl px-5 m-auto flex justify-center justify-center h-full z-30 relative flex-col"
      >
        <div
          class="font-eg uppercase lg:text-8xl text-5xl leading-[1.2em] text-white strong-white text-balance max-sm:nobr"
          v-html="about.title"
        ></div>
        <div class="sub w-[250px] lg:w-[510px]"></div>
      </div>
    </div>
    <div class="relative py-[75px] z-30">
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
          v-html="about.text_title"
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
                about.image.id +
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
              {{ about.text_subtitle }}
            </p>
            <div
              class="flex flex-col gap-5 mt-10"
              v-html="about.description"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-[75px] lg:py-[160px] bg-[#f2f1f2] relative">
      <div class="max-w-7xl px-5 m-auto z-10 relative">
        <h3
          v-motion
          class="text-black text-3xl leading-[1.2em] lg:text-6xl"
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
          {{ about.stat_title }}
        </h3>
        <div>
          <div
            class="grid lg:grid-cols-2 gap-[100px] lg:ml-[200px] mt-[50px] lg:mt-[100px]"
          >
            <div
              v-for="item in about.stat_data.slice(0, 2)"
              v-motion
              class="border-t border-t-black/20"
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
    <div class="py-[75px] bg-[#1c1c1c] relative">
      <div class="max-w-7xl px-5 m-auto z-10 relative">
        <div
          class="uppercase text-white border-t-[1px] border-white/20 py-5 lg:py-8 tracking-wide font-am text-lg inline-flex items-center min-w-[250px]"
        >
          <Icon
            name="tdesign:microphone-1"
            class="text-[#e4002b] w-6 h-6 mr-3"
          ></Icon
          >Our faces
        </div>
        <div
          class="text-white font-eg uppercase text-4xl leading-[1.2em] lg:text-8xl strong-white"
          v-html="about.team_title"
        ></div>
        <hr class="opacity-20 my-10 border-t-white/60" />
        <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mt-[75px]">
          <div v-for="item in about.team" class="relative group">
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                item.image +
                '?width=400'
              "
              alt=""
              class="aspect-1 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div
              class="mt-5 z-10 text-white px-5 border-l border-l-[#e4002b] bottom-0"
            >
              <p class="font-bold text-xl">{{ item.name }}</p>
              <p class="opacity-70">{{ item.job }}</p>
            </div>
          </div>
        </div>
        <div
          class="mt-20 text-white font-eg uppercase text-4xl leading-[1.2em] lg:text-8xl strong-white"
          v-html="about.creative_team_title"
        ></div>
        <hr class="opacity-20 my-10 border-t-white/60" />
        <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mt-[75px]">
          <div v-for="item in about.creative_tean" class="relative group">
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                item.image +
                '?width=400'
              "
              alt=""
              class="aspect-1 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div
              class="mt-5 z-10 text-white px-5 border-l border-l-[#e4002b] bottom-0"
            >
              <p class="font-bold text-xl">{{ item.name }}</p>
              <p class="opacity-70">{{ item.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-7xl px-5 m-auto z-10 relative py-[75px]">
        <div
          class="uppercase text-black border-t-[1px] border-black/20 py-5 lg:py-8 tracking-wide font-am text-lg inline-flex items-center min-w-[250px]"
        >
          <Icon
            name="tdesign:microphone-1"
            class="text-[#e4002b] w-6 h-6 mr-3"
          ></Icon
          >Partners
        </div>
        <hr class="opacity-20 mb-10 border-t-black/60" />
        <h3 class="text-xl lg:text-3xl">
          {{ about.partner_description }}
        </h3>
        <NuxtLink
          href="/contacts"
          class="text-white bg-[#e4002b] inline-flex justify-center items-center mt-[40px]"
          ><div class="p-3 px-5 min-w-[200px]">CONTACT US</div>
          <div
            class="w-[62px] h-[62px] bg-[#d00027] flex justify-center items-center"
          >
            <Icon
              name="tdesign:arrow-right-up"
              class="w-7 h-7 text-white"
            ></Icon></div
        ></NuxtLink>
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-[75px]">
          <div
            v-for="item in about.partner_logos"
            class="border border-black/20 p-5"
          >
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                item.directus_files_id +
                '?width=260'
              "
              alt=""
              class="w-full aspect-4 object-contain"
            />
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
const about = await globalData.aboutData()
</script>
