<template>
  <header
    class="bg-[#1c1c1c] w-full max-w-screen z-20"
    :class="{
      'mb-[150px] lg:mb-[15vw]': home.works.length > 3,
    }"
  >
    <div class="relative">
      <div class="flex absolute w-full h-full z-50 pointer-events-none">
        <div class="max-w-7xl px-10 m-auto -translate-y-10">
          <p
            v-motion
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
            class="opacity-0 uppercase text-white border-t-[1px] border-white/20 py-5 lg:py-8 font-am tracking-wide min-w-[250px] inline-flex items-center lg:text-lg"
          >
            <Icon
              name="tdesign:microphone-1"
              class="text-[#e4002b] w-5 h-5 lg:w-6 lg:h-6 mr-3"
            ></Icon
            >Trusted voiceover studio
          </p>
          <hr
            v-motion
            :initial="{ opacity: 0, y: 25 }"
            :visible="{
              opacity: 0.2,
              y: 0,
              transition: {
                type: 'ease',
                delay: 300,
                duration: 500,
              },
            }"
            class="opacity-0 mb-10"
          />
          <div
            v-motion
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
            class="opacity-0 font-eg uppercase text-7xl text-white leading-[1.2em] lg:leading-[1em] header-main max-sm:text-[8vw] max-w-[calc(100vw-80px)]"
            v-html="home.title"
          ></div>
          <div
            v-motion
            :initial="{ opacity: 0, y: 25 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'ease',
                delay: 700,
                duration: 500,
              },
            }"
            class="flex opacity-0"
          >
            <div class="sub w-[200px] lg:w-[510px]"></div>
            <div class="ml-5 lg:ml-10">
              <p
                class="lg:text-lg text-white lg:max-w-[20vw] pt-5"
                v-html="home.description"
              ></p>
              <button
                v-if="home.presentation_link"
                class="flex items-center text-white mt-10 pointer-events-auto group"
              >
                <div
                  class="h-[42px] w-[42px] flex items-center justify-center border-[1px] border-[#e4002b] group-hover:bg-[#e4002b] duration-300 transition-all"
                >
                  <Icon name="tdesign:play" class="w-5 h-5"></Icon>
                </div>
                <span class="ml-5">Check out our presentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="home.works.length > 3 && settings.portfolio"
        v-motion
        class="absolute w-screen lg:w-[calc(100vw-80px)] top-[calc(100svh-150px)] lg:top-[calc(100vh-150px)] z-[40] opacity-0"
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
        <div class="max-w-7xl px-10 mx-auto text-white z-[10] relative">
          <div class="flex items-center">
            <div
              class="bg-[#e4002b] h-[26px] w-[26px] rounded-full mr-5 flex items-center justify-center"
            >
              <div class="bg-white h-2 w-2 rounded-full"></div>
            </div>
            <p class="flex items-center">Our latest voiceovers</p>
          </div>
        </div>
        <div
          class="pb-5 before:bg-gradient-to-b before:from-[#1c1c1c]/0 bg-[#1c1c1c] before:to-[#1c1c1c] mt-10 before:h-[200px] before:-translate-y-full before:absolute before:w-full"
        >
          <Swiper
            :modules="[
              SwiperAutoplay,
              SwiperPagination,
              SwiperNavigation,
              SwiperKeyboard,
              SwiperFreeMode,
              SwiperManipulation,
            ]"
            :keyboard="true"
            :loop="false"
            :speed="1000"
            :pagination="false"
            :grab-cursor="true"
            :space-between="25"
            :autoplay="true"
            slides-per-view="4"
            :breakpoints="{
              320: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.8 },
              1320: { slidesPerView: 3.8 },
            }"
            :navigation="{
              nextEl: '.r-btn',
              prevEl: '.l-btn',
            }"
          >
            <SwiperSlide v-for="item in home.works" class="relative">
              <video
                :src="
                  'https://api.fragment-studios.com/assets/' + item.thumbnail
                "
                autoplay
                playsinline
                muted
                loop
                class="w-full"
              ></video>
              <NuxtLink :href="'/portfolio/' + item.slug" class="group">
                <div class="flex items-center justify-between mt-5">
                  <h3
                    class="flex-1 text-white font-bold group-hover:text-[#d00027] duration-300 transition-all"
                  >
                    {{ item.short_title }}
                  </h3>
                  <div
                    class="w-[42px] h-[42px] bg-[#d00027] flex justify-center items-center relative"
                  >
                    <Icon
                      name="tdesign:arrow-right-up"
                      class="w-7 h-7 text-white group-hover:rotate-45 duration-300 transition-all"
                    ></Icon>
                  </div>
                </div>
              </NuxtLink>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        v-motion
        class="video opacity-70 parallax-header"
        :initial="{ opacity: 0 }"
        :visible="{
          opacity: 0.7,
          y: 0,
          transition: {
            type: 'ease',
            delay: 300,
            duration: 500,
          },
        }"
      >
        <div id="canvas"></div>
        <div class="wrapper">
          <div class="plane h-[100svh] lg:h-screen relative" data-duration="1">
            <video
              v-for="(item, index) in home.videos.slice(0, 3)"
              playsinline
              muted
              :src="
                'https://api.fragment-studios.com/assets/' +
                item.directus_files_id
              "
              :data-sampler="
                index === 0
                  ? 'firstTexture'
                  : index === 1
                    ? 'secondTexture'
                    : 'thirdTexture'
              "
              preload="auto"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'
import { Curtains, Plane } from 'curtainsjs'
import gsap from 'gsap'

import { globalStore } from '../store/global.js'
const globalData = globalStore()
const home = await globalData.homeData()
const settings = await globalData.settingsData()
const vertexShader = `precision mediump float;

            // default mandatory variables
            attribute vec3 aVertexPosition;
            attribute vec2 aTextureCoord;

            uniform mat4 uMVMatrix;
            uniform mat4 uPMatrix;

            // our texture matrices
            // displacement texture does not need to use them
            uniform mat4 firstTextureMatrix;
            uniform mat4 secondTextureMatrix;

            // custom variables
            varying vec3 vVertexPosition;
            varying vec2 vTextureCoord;
            varying vec2 vFirstTextureCoord;
            varying vec2 vSecondTextureCoord;

            // custom uniforms
            uniform float uTransitionTimer;

            void main() {
                gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);

                // varyings
                // use original texture coords for our displacement
                vTextureCoord = aTextureCoord;
                // use texture matrices for our videos
                vFirstTextureCoord = (firstTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
                vSecondTextureCoord = (secondTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
                vVertexPosition = aVertexPosition;
            }`
const fragmentShader = `precision mediump float;

            precision mediump float;

            varying vec3 vVertexPosition;
            varying vec2 vTextureCoord;
            varying vec2 vFirstTextureCoord;
            varying vec2 vSecondTextureCoord;

            // custom uniforms
            uniform float uTransitionTimer;
            uniform float uTimer;
            uniform float uTo;
            uniform float uFrom;
            uniform float uFadeIn;

            // our textures samplers
            // notice how it matches our data-sampler attributes
            uniform sampler2D firstTexture;
            uniform sampler2D secondTexture;
            uniform sampler2D thirdTexture;
            uniform sampler2D displacement;


            const float PI = 3.141592653589793;



            vec4 getTextureByIndex(float index, vec2 vUv){
                vec4 result;
                if(index==0.){
                    result = texture2D(firstTexture,vUv);
                }
                if(index==1.){
                    result = texture2D(secondTexture,vUv);
                }
                if(index==2.){
                    result = texture2D(thirdTexture,vUv);
                }
                return result;
            }
            mat2 rotate(float a) {
                float s = sin(a);
                float c = cos(a);
                return mat2(c, -s, s, c);
            }
            void main() {

                float progress = fract(uTransitionTimer);
                float currentTexture = mod(floor(uTransitionTimer),3.);
                float nextTexture =  mod(floor(uTransitionTimer) +1., 3.);

                vec2 newUV = (vFirstTextureCoord - vec2(0.5))*(0.2 + 0.8*uFadeIn) + vec2(0.5) + 0.6*vec2(0.,1. - uFadeIn);
                float mask = step(vTextureCoord.y,uFadeIn);

                vec2 uvDivided = fract(newUV*vec2(40.,1.));


                vec2 uvDisplaced1 = newUV + rotate(PI/4.)*uvDivided*progress*0.1;
                vec2 uvDisplaced2 = newUV + rotate(PI/4.)*uvDivided*(1. - progress)*0.1;

                vec4 current = getTextureByIndex(uFrom,uvDisplaced1);
                vec4 next = getTextureByIndex(uTo,uvDisplaced2);

                gl_FragColor = mix(vec4(0.,0.,0.,0),mix(current,next,progress), mask);
            }`

let currentTexture = 0
let timer = 0
onMounted(function () {
  const curtains = new Curtains({
    container: 'canvas',
    alpha: true,
    watchScroll: true,
    autoRender: true,
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  })
  const handleScroll = () => {
    curtains.updateScrollValues()
    curtains.needRender()
  }
  const handleResize = () => {
    curtains.resize()
    curtains.needRender()
  }
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  const planeElements = [...document.getElementsByClassName('plane')]
  const duration = planeElements[0].getAttribute('data-duration') || 2
  const params = {
    vertexShader,
    fragmentShader,
    uniforms: {
      transitionTimer: {
        name: 'uTransitionTimer',
        type: '1f',
        value: 0,
      },
      fadeIn: {
        name: 'uFadeIn',
        type: '1f',
        value: 0,
      },
      timer: {
        name: 'uTimer',
        type: '1f',
        value: 0,
      },
      to: {
        name: 'uTo',
        type: '1f',
        value: 0,
      },
      from: {
        name: 'uFrom',
        type: '1f',
        value: 0,
      },
    },
  }
  const multiTexturesPlane = new Plane(curtains, planeElements[0], params)
  multiTexturesPlane
    .onReady(() => {
      document.body.classList.add('curtains-ready')
      const length = multiTexturesPlane.videos.length
      let toSlide = 0
      setInterval(function () {
        toSlide = toSlide++ >= length - 1 ? 0 : toSlide++
        const to = toSlide
        const elems = document.querySelectorAll('.frame__switch-item')
        ;[].forEach.call(elems, function (el) {
          el.classList.remove('frame__switch-item--current')
        })
        multiTexturesPlane.uniforms.to.value = to
        const fake = { progress: 0 }
        gsap.to(fake, {
          duration,
          progress: 1,
          easing: 'power2.in',
          onStart: () => {
            multiTexturesPlane.videos[to].play()
            currentTexture = to
          },
          onUpdate: () => {
            if (fake.progress === 1) {
              multiTexturesPlane.uniforms.from.value = to
            }
            multiTexturesPlane.uniforms.transitionTimer.value = fake.progress
          },
          onComplete: () => {
            multiTexturesPlane.uniforms.from.value = to
            multiTexturesPlane.videos[
              (currentTexture + length - 1) % length
            ].pause()
            multiTexturesPlane.videos[
              (currentTexture + length + 1) % length
            ].pause()
          },
        })
      }, 5000)

      gsap.to(multiTexturesPlane.uniforms.fadeIn, {
        duration: 0,
        value: 1,
      })
      multiTexturesPlane.playVideos()
      curtains.nextRender(() => {
        multiTexturesPlane.videos[1].pause()
        multiTexturesPlane.videos[2].pause()
      })
    })
    .onRender(() => {
      timer += 0.001
      multiTexturesPlane.uniforms.timer.value = timer
    })
  // gsap.to('.parallax-header #canvas', {
  //   scrollTrigger: {
  //     scrub: true,
  //   },
  //   y: '+=200',
  //   onUpdate: function () {
  //     handleScroll()
  //     handleResize()
  //   },
  // })
})
</script>

<style lang="scss">
@layer {
  .text-lines-white {
    -webkit-text-stroke: 1px #fff;
    -webkit-text-fill-color: transparent;
  }
  .text-lines-black {
    -webkit-text-stroke: 1px #000;
    -webkit-text-fill-color: transparent;
  }
}
.header-main {
  b,
  strong {
    @apply text-7xl text-lines-white max-sm:text-[8vw];
  }
}
#canvas {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.plane video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  display: none;
}
</style>
