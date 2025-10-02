<template>
  <div
    :class="{ 'w-[80px]': globalData.menu, 'w-[0px]': !globalData.menu }"
    class="max-lg:hidden right-[calc(100vw-80px)] fixed z-[110] h-[100vh] bg-[#e4002b] top-0 hover:bg-[#d00027] duration-300 transition-all flex justify-center items-center group cursor-pointer overflow-hidden"
    @click="globalData.menu = false"
  >
    <div class="flex transition-all duration-300">
      <div
        class="w-[1px] h-[52px] bg-white rotate-45 group-hover:h-[42px] duration-300 transition-all"
      ></div>
      <div
        class="w-[1px] h-[52px] bg-white -rotate-45 group-hover:h-[42px] duration-300 transition-all"
      ></div>
    </div>
  </div>
  <div
    class="max-lg:hidden fixed z-[100] h-[100vh] w-[80px] bg-[#1c1c1c] flex justify-center items-center group cursor-pointer top-0"
    @click="globalData.menu = true"
  >
    <div class="flex gap-3 group-hover:gap-2 transition-all duration-300">
      <div class="w-[1px] h-[52px] bg-white"></div>
      <div class="w-[1px] h-[52px] bg-white"></div>
    </div>
    <div class="flex flex-col absolute bottom-20 items-center">
      <p class="font-am text-white [writing-mode:vertical-lr] rotate-180 mb-10">
        SCROLL
      </p>
      <div class="bg-white/20 w-[2px] h-[150px] relative">
        <div class="bg-white w-[2px] h-[0px] absolute scrollAnim"></div>
      </div>
    </div>
  </div>
  <div
    :class="{
      'w-screen lg:w-[calc(100vw-80px)]': globalData.menu,
      'w-[0px]': !globalData.menu,
    }"
    class="transition-all fixed h-[100vh] z-[90] bg-white/80 backdrop-blur-2xl lg:left-[80px] top-[0px] overflow-hidden duration-500"
  >
    <div class="w-screen lg:w-[calc(100vw-80px)]">
      <div
        class="h-[100dvh] flex items-center font-eg text-5xl lg:text-[3vw] leading-[1.4em] lg:leading-[2em]"
      >
        <div
          class="px-5 max-w-7xl w-full mx-auto translate-x-[0px] text-black/80 max-sm:flex max-sm:items-center lg:grid lg:grid-cols-2 max-sm:h-full"
        >
          <ul class="lg:hidden text-right w-full">
            <li class="hover:text-[#e4002b] transition-all duration-300">
              <NuxtLink href="/" @click="globalData.menu = false"
                >Home</NuxtLink
              >
            </li>
            <li class="hover:text-[#e4002b] transition-all duration-300">
              <NuxtLink href="/services" @click="globalData.menu = false"
                >Services</NuxtLink
              >
            </li>
            <li class="hover:text-[#e4002b] transition-all duration-300"  v-if="settings.portfolio">
              <NuxtLink href="/portfolio" @click="globalData.menu = false"
                >Portfolio</NuxtLink
              >
            </li>
            <li class="hover:text-[#e4002b] transition-all duration-300">
              <NuxtLink href="/about" @click="globalData.menu = false"
                >About us</NuxtLink
              >
            </li>
            <li class="hover:text-[#e4002b] transition-all duration-300">
              <NuxtLink href="/careers" @click="globalData.menu = false"
                >Careers</NuxtLink
              >
            </li>
            <li class="hover:text-[#e4002b] transition-all duration-300">
              <NuxtLink href="/contacts" @click="globalData.menu = false"
                >Contact us</NuxtLink
              >
            </li>
          </ul>
          <ul class="max-sm:hidden">
            <li
              v-for="item in services"
              class="hover:text-[#e4002b] transition-all duration-300"
            >
              <NuxtLink
                :href="'/services/' + item.slug"
                @click="globalData.menu = false"
                >{{ item.short_title }}</NuxtLink
              >
            </li>
          </ul>
          <div
            class="max-sm:left-0 lg:ml-auto lg:h-full max-sm:absolute max-sm:w-full max-sm:bottom-0"
          >
            <ul
              v-if="
                settings.youtube ||
                settings.instagram ||
                settings.facebook ||
                settings.linkedin ||
                settings.vk ||
                settings.telegram
              "
              class="grid max-sm:grid-cols-6 border-[1px] border-black/20 h-full"
            >
              <li
                v-if="settings.youtube && settings.youtube !== ''"
                class="aspect-1 flex justify-center items-center hover:text-[#e4002b] transition-all duration-300"
              >
                <a :href="settings.youtube" target="_blank">
                  <Icon name="tdesign:logo-youtube" class="w-8 h-8"></Icon>
                </a>
              </li>

              <li
                v-if="settings.instagram && settings.instagram !== ''"
                class="aspect-1 border max-sm:border-l-black/20 lg:border-t-black/20 flex justify-center items-center hover:text-[#e4002b] transition-all duration-300r"
              >
                <a :href="settings.instagram" target="_blank">
                  <Icon name="tdesign:logo-instagram" class="w-8 h-8"></Icon>
                </a>
              </li>
              <li
                v-if="settings.facebook && settings.facebook !== ''"
                class="aspect-1 border max-sm:border-l-black/20 lg:border-t-black/20 flex justify-center items-center hover:text-[#e4002b] transition-all duration-300"
              >
                <a :href="settings.facebook" target="_blank">
                  <Icon name="tdesign:logo-facebook" class="w-8 h-8"></Icon>
                </a>
              </li>
              <li
                v-if="settings.linkedin && settings.linkedin !== ''"
                class="aspect-1 border max-sm:border-l-black/20 lg:border-t-black/20 flex justify-center items-center hover:text-[#e4002b] transition-all duration-300"
              >
                <a :href="settings.linkedin" target="_blank">
                  <Icon
                    name="streamline:computer-logo-linkedin-network-linkedin-professional"
                    class="w-8 h-8"
                  ></Icon>
                </a>
              </li>
              <li
                v-if="settings.vk && settings.vk !== ''"
                class="aspect-1 border max-sm:border-l-black/20 lg:border-t-black/20 flex justify-center items-center hover:text-[#e4002b] transition-all duration-300"
              >
                <a :href="settings.vk" target="_blank">
                  <Icon name="hugeicons:vk" class="w-8 h-8"></Icon>
                </a>
              </li>
              <li
                v-if="settings.telegram && settings.telegram !== ''"
                class="aspect-1 border max-sm:border-l-black/20 lg:border-t-black/20 flex justify-center items-center hover:text-[#e4002b] transition-all duration-300"
              >
                <a :href="settings.telegram" target="_blank">
                  <Icon name="mynaui:brand-telegram" class="w-8 h-8"></Icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
import gsap from 'gsap'
const globalData = globalStore()
const services = await globalData.servicesData()
let trigger = 0
const settings = await globalData.settingsData()

onMounted(function () {
  gsap.fromTo(
    '.scrollAnim',
    {
      height: 0,
      bottom: 'auto',
    },
    {
      height: 150,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: 'power1.inOut',
      onRepeat: function () {
        gsap.set('.scrollAnim', { bottom: trigger })
        if (trigger === 0) {
          trigger = 'auto'
        } else {
          trigger = 0
        }
      },
    },
  )
})
</script>
