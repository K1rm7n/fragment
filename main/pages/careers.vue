<template>
  <div class="bg-white">
    <div
      class="h-[500px] lg:h-[800px] bg-[#1c1c1c] relative parallax-header overflow-hidden"
    >
      <img
        :src="
          'https://api.fragment-studios.com/assets/' +
          career.background.id +
          '?width=1920'
        "
        alt=""
        class="z-20 absolute w-full h-full top-0 left-0 object-cover opacity-40"
      />
      <div
        class="max-w-7xl px-5 m-auto flex justify-center justify-center h-full z-30 relative flex-col"
      >
        <div
          class="font-eg uppercase lg:text-8xl text-5xl leading-[1.2em] text-white strong-white text-balance"
          v-html="career.title"
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
          >CAREER IN FRAGMENT
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
          v-html="career.text_title"
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
                career.image.id +
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
              {{ career.text_subtitle }}
            </p>
            <div
              class="flex flex-col gap-5 mt-10"
              v-html="career.description"
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
          {{ career.job_title }}
        </h3>
        <div class="lg:grid-cols-2 xl:grid-cols-3 grid mt-20 gap-[50px]">
          <div
            v-for="item in career.job_list"
            class="border-t border-[#e4002b]"
          >
            <h3 class="font-bold text-xl mt-10">
              {{ item.title }}
            </h3>
            <p class="mt-10">
              {{ item.description }}
            </p>
            <br />
            <a :href="'tel:' + item.phone" class="font-bold text-xl">{{
              item.phone
            }}</a>
            <br />
            <a
              :href="'mailto:' + item.email"
              class="font-bold text-lg text-[#e4002b]"
              >{{ item.email }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max-w-7xl px-5 m-auto z-10 relative py-[75px]">
        <h4 class="text-2xl lg:text-3xl text-balance">
          {{ career.form_title }}
        </h4>
        <p class="text-balanced mb-20 max-w-[600px] mt-10 lg:text-lg">
          Tell us briefly about yourself in free form, about your skills and
          knowledge of languages, share additional links and everything that
          would allow us to quickly establish communication with you.
        </p>
        <form @submit.prevent="sendMessage">
          <div class="grid lg:grid-cols-2 gap-10">
            <input
              v-model="formData.firstName"
              type="text"
              class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0"
              placeholder="First Name *"
              required
            />
            <input
              v-model="formData.lastName"
              type="text"
              class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0"
              placeholder="Last Name *"
              required
            />
          </div>
          <div class="grid lg:grid-cols-2 gap-10 mt-10">
            <input
              v-model="formData.email"
              type="email"
              class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0"
              placeholder="Email *"
              required
            />
            <input
              v-model="formData.phone"
              type="text"
              class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0"
              placeholder="Phone *"
              required
            />
          </div>
          <input
            v-model="formData.cv"
            type="text"
            class="mt-10 w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0"
            placeholder="Link on CV (Google Drive / Linkedin)"
          />
          <p class="py-5 font-bold mt-10 text-xl">Please briefly your self</p>
          <textarea
            id=""
            v-model="formData.message"
            name=""
            cols="30"
            rows="5"
            class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0 resize-none"
            placeholder="Describe yourself in one or more sentences *"
            required
          ></textarea>
          <div class="flex items-center mb-4 mt-10">
            <input
              id="checkbox"
              v-model="checked"
              type="checkbox"
              class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checkbox"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >I agree to the processing of
              <NuxtLink href="/privacy-policy" class="underline"
                >personal data</NuxtLink
              ></label
            >
          </div>
          <button
            :disabled="!checked"
            class="disabled:opacity-50 disabled:pointer-events-none bg-[#e4002b] px-5 w-full text-white py-5 mt-10 relative shadow hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 lg:text-lg group"
          >
            SEND MESSAGE
            <Icon
              name="tdesign:arrow-right"
              class="w-7 h-7 text-white absolute right-10 group-hover:-rotate-45 transition-all duration-300"
            ></Icon>
          </button>
        </form>
        <p v-if="msg" class="text-center text-xl mt-5">
          Thank you! We received your message
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
const globalData = globalStore()
const career = await globalData.careerData()
const msg = ref(false)
const checked = ref(true)
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  cv: '',
  message: '',
})

const sendMessage = async () => {
  try {
    const { data, error } = await useFetch('/api/career', {
      method: 'POST',
      body: { ...formData.value },
    })

    if (error.value) {
      msg.value = false
    } else {
      msg.value = true
    }
  } catch (error) {
    msg.value = false
  }
}
</script>
