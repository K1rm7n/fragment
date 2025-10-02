<template>
  <div class="bg-white">
    <div class="bg-[#1c1c1c] relative parallax-header pb-[75px]">
      <div
        class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col pt-[200px] pb-[100px]"
      >
        <h1
          class="font-eg uppercase text-7xl leading-[1em] text-white text-balance"
        >
          Privacy Policy
        </h1>
      </div>
    </div>
    <div class="pb-[75px]">
      <div
        class="prose prose-xl max-w-7xl px-5 mx-auto mt-10"
        v-html="settings.privacy"
      ></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
const globalData = globalStore()
const settings = await globalData.settingsData()
</script>
