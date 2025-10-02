<template>
  <div class="bg-white">
    <div
      class="relative z-20 bg-[#1c1c1c] pt-[150px] lg:pt-[200px] lg:mt-[120px] lg:pb-[180px] pb-[100px]"
    >
      <div class="max-w-7xl px-5 m-auto">
        <div class="flex">
          <div class="lg:w-[350px]"></div>
          <div class="flex-1">
            <h1
              class="font-eg uppercase text-3xl lg:text-7xl leading-[1.2em] text-white text-balance lg:mb-20 max-sm:pb-[100px]"
            >
              {{ contacts.contact_title }}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-w-7xl px-5 m-auto flex justify-center h-full z-30 relative flex-col -mt-[100px] lg:hidden"
    >
      <img
        :src="
          'https://api.fragment-studios.com/assets/' +
          contacts.contact_image.id +
          '?width=940'
        "
        alt=""
        class="w-full aspect-2 object-cover"
      />
    </div>
    <div class="relative bg-white z-30">
      <div class="max-w-7xl px-5 m-auto">
        <div
          class="w-[80px] h-[80px] bg-[#e4002b] absolute max-sm:left-10 -translate-y-1/2 flex items-center justify-center"
        >
          <Icon name="tdesign:arrow-down" class="w-9 h-9 text-white"></Icon>
        </div>

        <div class="lg:flex">
          <div class="lg:w-[300px] py-[75px] pr-10">
            <h3 class="font-bold text-2xl pt-[50px]">Get in touch</h3>
            <hr class="opacity-20 border-t-black/60 mt-5 mb-7" />
            <div v-for="item in contacts.contacts">
              <p class="font-am opacity-60 text-xl mb-3">// {{ item.title }}</p>
              <a :href="'tel:' + item.phone" class="font-bold text-xl">{{
                item.phone
              }}</a>
              <br />
              <a
                :href="'mailto:' + item.email"
                class="font-bold text-lg text-[#e4002b]"
                >{{ item.email }}</a
              >
              <hr class="opacity-20 mb-7 border-t-black/60 mt-5" />
            </div>
          </div>
          <div class="flex-1">
            <img
              :src="
                'https://api.fragment-studios.com/assets/' +
                contacts.contact_image.id +
                '?width=940'
              "
              alt=""
              class="max-sm:hidden -mt-[175px]"
            />
            <div
              class="lg:border-l lg:border-black/10 lg:px-[75px] pb-[75px] lg:mt-20"
            >
              <h4 class="text-2xl lg:text-3xl mb-20">
                {{ contacts.contact_form_title }}
              </h4>
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
                    placeholder="Corporate/Personal email *"
                    required
                  />
                  <input
                    v-model="formData.phone"
                    type="text"
                    class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 lg:text-xl px-0"
                    placeholder="Corporate/Personal phone *"
                    required
                  />
                </div>
                <p class="text-xl py-5 font-bold mt-10">
                  Please briefly describe your task
                </p>
                <textarea
                  id=""
                  v-model="formData.message"
                  name=""
                  cols="30"
                  rows="5"
                  class="w-full border-t-0 border-l-0 border-r-0 border-b border-black/20 text-xl px-0 resize-none"
                  placeholder="Describe your task *"
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
                  class="disabled:opacity-50 disabled:pointer-events-none bg-[#e4002b] px-5 w-full text-white py-5 mt-10 relative shadow hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300 text-lg group"
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
        </div>
      </div>
    </div>
    <div class="py-[75px] lg:py-[160px] bg-[#1c1c1c] relative">
      <div class="absolute w-full h-full left-0 top-0 grayscale opacity-20">
        <img src="/bg.jpg" alt="" class="absolute w-full h-full left-0 top-0" />
      </div>
      <div
        class="max-w-7xl m-auto z-10 relative bg-white lg:p-10 grid lg:grid-cols-2 gap-[50px] lg:gap-[100px] max-sm:m-5"
      >
        <div
          class="lg:flex justify-center max-sm:order-2 max-sm:p-5 max-sm:pb-16"
        >
          <div class="lg:pl-[75px] lg:py-[75px]">
            <h5 class="text-3xl lg:text-5xl font-bold">
              {{ contacts.career_title }}
            </h5>
            <p class="mt-10">
              {{ contacts.career_description }}
            </p>
            <NuxtLink href="/careers" class="flex items-center group mt-10"
              ><Icon
                name="tdesign:arrow-right-up"
                class="w-7 h-7 text-[#e4002b] group-hover:rotate-45 duration-300 transition-all"
              ></Icon
              ><span class="ml-5 group-hover:text-[#e4002b]"
                >Join our team</span
              ></NuxtLink
            >
          </div>
        </div>
        <div>
          <img
            :src="
              'https://api.fragment-studios.com/assets/' +
              contacts.career_image.id +
              '?width=550'
            "
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script setup>
import { globalStore } from '../store/global.js'
const globalData = globalStore()
const contacts = await globalData.settingsData()
const checked = ref(true)
const msg = ref(false)
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
    const { data, error } = await useFetch('/api/contact', {
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
