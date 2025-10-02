<template>
  <div
    class="h-[80px] lg:h-[100px] w-screen lg:w-[calc(100vw-80px)] top-[0px] z-[200] lg:left-[80px] fixed flex justify-center items-center transition-all duration-300"
    :class="{ 'backdrop-blur-2xl bg-[#1c1c1c]/40': scroll && !globalData.menu }"
  >
    <div class="max-w-7xl px-5 w-full flex justify-between items-center">
      <NuxtLink href="/"
        ><img
          src="/logo.svg"
          alt=""
          class="h-[20px] lg:h-[26px] duration-300 transition-all"
          :class="{ invert: globalData.menu }"
      /></NuxtLink>
      <ul
        class="max-lg:hidden flex justify-between gap-10 text-lg duration-300 transition-all mx-auto"
        :class="{ 'text-white': !globalData.menu }"
      >
        <li class="hover:text-[#e4002b] transition-all duration-300">
          <NuxtLink href="/" @click="globalData.menu = false">Home</NuxtLink>
        </li>
        <li class="hover:text-[#e4002b] transition-all duration-300">
          <NuxtLink href="/services" @click="globalData.menu = false"
            >Services</NuxtLink
          >
        </li>
        <li class="hover:text-[#e4002b] transition-all duration-300">
          <NuxtLink href="/about" @click="globalData.menu = false"
            >About us</NuxtLink
          >
        </li>
        <li class="hover:text-[#e4002b] transition-all duration-300" v-if="settings.portfolio">
          <NuxtLink href="/portfolio" @click="globalData.menu = false"
            >Portfolio</NuxtLink
          >
        </li>
        <li class="hover:text-[#e4002b] transition-all duration-300">
          <NuxtLink href="/careers" @click="globalData.menu = false"
            >Careers</NuxtLink
          >
        </li>
      </ul>
      <NuxtLink
        href="/contacts"
        class="ml-auto max-lg:hidden text-white bg-[#e4002b] flex justify-center items-center group shadow hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300"
        ><span class="p-3 px-5" @click="globalData.menu = false"
          >CONTACT US</span
        >
        <div
          class="w-[52px] h-[52px] bg-[#d00027] flex justify-center items-center"
        >
          <Icon
            name="tdesign:arrow-right-up"
            class="w-7 h-7 text-white group-hover:rotate-45 transition-all duration-300"
          ></Icon></div
      ></NuxtLink>
      <div>
        <div
          class="grid gap-3 group-hover:gap-2 transition-all duration-300 lg:hidden"
          @click="globalData.menu = !globalData.menu"
        >
          <div
            class="w-[52px] h-[2px] transition-all duration-300"
            :class="{
              'bg-white': !globalData.menu,
              'bg-black rotate-45 translate-y-1.5': globalData.menu,
            }"
          ></div>
          <div
            class="w-[52px] h-[2px] duration-300"
            :class="{
              'bg-white': !globalData.menu,
              'bg-black -rotate-45 -translate-y-1.5': globalData.menu,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
const globalData = globalStore()
const scroll = ref(false)
const settings = globalData.settingsData()
function scrollChecker() {
  if (document.body.getBoundingClientRect().top < -50) {
    scroll.value = true
  } else {
    scroll.value = false
  }
}
onMounted(function () {
  scrollChecker()
  window.addEventListener('scroll', function () {
    scrollChecker()
  })
})
</script>
