<template>
  <div>
    <div
      class="fixed h-[100dvh] w-[100dvw] top-0 left-0 bg-[#1c1c1c] z-[1000] flex justify-center items-center max-sm:portrait:hidden sm:hidden"
    >
      <div>
        <img src="/rotate.webp" alt="" class="w-[100px] mt-10 rotate-90" />
      </div>
    </div>
    <div>
      <div
        class="h-screen absolute w-full flex justify-center items-center left-0 top-0 z-0"
      >
        <Icon
          name="line-md:loading-twotone-loop"
          class="w-12 h-12 text-white opacity-80"
        ></Icon>
      </div>
      <NuxtLayout>
        <NuxtLoadingIndicator
          color="repeating-linear-gradient(90deg,#e4002b 0,#e4002b 50%,#e4002b)"
        />
        <div>
          <Nav></Nav>
          <MegaMenu></MegaMenu>
          <div class="lg:left-[80px] lg:max-w-[calc(100vw-80px)] relative">
            <NuxtPage />
          </div>
        </div>
      </NuxtLayout>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@import '~/public/fonts/Onest/stylesheet.css';
@import '~/public/fonts/Europa/stylesheet.css';
@import '~/public/fonts/America/style.css';
.sub:before {
  background: transparent
    url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M10 0 7.363 10H6.5L9.137 0zM5 0 2.363 10H1.5L4.137 0z'/%3E%3C/svg%3E")
    repeat-x 0 /16px;
  content: '';
  display: block;
  height: 20px;
  margin-top: 5px;
  transform: translateY(20px);
  transition-delay: 0.4s;
  transition-duration: 0.8s;
  transition-property: opacity, transform;
  transition-timing-function: ease;
  width: 100%;
}
body,
html {
  background: rgb(28, 28, 28);
  overflow-x: hidden;
}
.text-lines-white {
  -webkit-text-stroke: 1px #fff;
  -webkit-text-fill-color: transparent;
}
.text-lines-black {
  -webkit-text-stroke: 1px #000;
  -webkit-text-fill-color: transparent;
}
@layer {
  .text-lines-white {
    -webkit-text-stroke: 1px #fff;
    -webkit-text-fill-color: transparent;
  }
  .text-lines-black {
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color: transparent;
  }
  .nobr {
    br {
      display: none;
    }
  }
}
.strong-white {
  b,
  strong {
    @apply text-lines-white;
  }
}
.strong-black {
  b,
  strong {
    @apply text-lines-black;
  }
}
.page-enter-active,
.page-leave-active {
  transition: all 1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
</style>
