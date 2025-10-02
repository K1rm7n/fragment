<template>
  <div
    class="bg-[#1c1c1c] py-[100px] pt-[200px] lg:py-[160px] lg:pt-[260px] footer relative"
  >
    <div
      v-motion
      class="max-w-5xl mx-auto font-eg uppercase text-4xl leading-[1.2em] lg:text-[7rem] text-white text-center opacity-0 strong-white"
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
      v-html="settings.footer"
    ></div>
    <p
      v-motion
      class="lg:text-xl text-white max-w-3xl text-center mx-auto mt-10 opacity-0 px-5"
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
      {{ settings.footer_description }}
    </p>
    <div
      v-motion
      class="flex justify-center items-center mt-10 opacity-0"
      :initial="{ opacity: 0, y: 25 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'ease',
          delay: 500,
          duration: 500,
        },
      }"
    >
      <NuxtLink
        href="/contacts"
        class="text-white bg-[#e4002b] inline-flex justify-center items-center group shadow hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 text-lg"
        ><span class="p-3 px-10" @click="globalData.menu = false"
          >CONTACT US</span
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
  <div class="border-t border-white/20 bg-[#1c1c1c] text-white/50">
    <div class="grid lg:flex max-w-7xl mx-auto">
      <div class="py-5 text-center lg:border-l border-white/20 flex-1">
        {{ new Date().getFullYear() }} COPYRIGHT FRAGMENT STUDIO
      </div>
      <ul class="grid lg:flex lg:ml-auto">
        <li
          class="py-5 lg:px-10 lg:border-r lg:border-l max-sm:border-t border-white/20 max-sm:text-center"
        >
          <NuxtLink
            href="/privacy-policy"
            class="hover:text-[#e4002b] duration-300 transition-all"
            >PRIVACY POLICY</NuxtLink
          >
        </li>
        <li
          class="py-5 px-10 max-sm:text-center max-sm:border-t border-white/20"
        >
          <NuxtLink
            href="/terms-and-conditions"
            class="hover:text-[#e4002b] duration-300 transition-all"
            >TERMS & CONDITIONS</NuxtLink
          >
        </li>
        <li
          class="py-5 px-10 lg:border-r lg:border-l border-white/20 max-sm:text-center max-sm:border-t"
        >
          <a
            target="_blank"
            href="https://podolchak.agency"
            class="hover:text-[#e4002b] duration-300 transition-all"
            >MADE BY P.A.</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
const globalData = globalStore()
const settings = await globalData.settingsData()
</script>
<style lang="scss">
.footer:before {
  background: transparent url(/decor.svg) repeat 50% / 110px;
  content: '';
  display: block;
  height: 100px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
