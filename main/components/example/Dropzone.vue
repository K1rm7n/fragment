<template>
  <div class="relative">
    <div class="lg:grid grid-cols-2 relative z-10">
      <div
        class="p-5 py-10 sm:p-10 bg-light relative text-dark/75 flex items-center"
      >
        <div class="space-y-2">
          <h2 class="text-3xl font-bold mb-5 text-dark">Dropzone</h2>
          <p>
            Path:
            <code>/components/example/Dropzone.vue</code>
          </p>
          <p>
            Plugin:
            <code>/plugins/client.js</code>
          </p>
          <p>
            This example allows you to quickly create a component that allows
            you to upload files via API. In order for the example to work, you
            need to allow everyone to upload files or authorize if the
            authentication package is installed.
          </p>
          <a
            href="https://docs.directus.io/guides/sdk/getting-started.html#authentication"
            target="_blank"
            class="md:inline-block block px-10 md:pr-20 py-5 bg-primary relative group text-dark font-semibold !mt-10 clip-corner"
          >
            <span>Documentation</span>
            <Icon
              name="material-symbols:arrow-insert"
              class="rotate-180 w-5 h-5 absolute bottom-3 right-3 transition-all group-hover:w-8 group-hover:h-8"
            ></Icon>
          </a>
        </div>
      </div>
      <div class="relative clip-block-corner">
        <div
          class="z-10 p-5 py-10 sm:p-10 bg-alt/[0.45] relative backdrop-blur-3xl h-full"
        >
          <div class="h-full">
            <div class="text-white flex flex-col justify-center">
              <h3 class="text-3xl font-bold mb-5 md:mb-0 text-light">
                Upload file
              </h3>
            </div>
            <div
              class="h-full w-full flex items-center justify-center max-sm:min-h-[200px] max-lg:min-h-[300px]"
            >
              <fieldset class="w-full">
                <!-- Dropzone -->
                <div
                  v-if="multiple ? true : files.length === 0"
                  :class="[
                    'relative flex items-center p-8 min-h-[100px] transition duration-150 bg-dark/40 clip-corner',
                    {
                      'border-primary-600 bg-primary-50  !text-primary-600 ':
                        dragging,
                      'hover:border-primary-600 hover:text-primary-600 ':
                        !dragging && !uploading,
                      'text-gray-500 border-gray-300 ': !uploading,
                      'cursor-not-allowed text-gray-500 border-gray-300':
                        uploading,
                    },
                  ]"
                  @dragenter.prevent="onDragEnter"
                  @dragover.prevent
                  @dragleave.prevent="onDragLeave"
                  @drop.stop.prevent="onDrop"
                >
                  <input
                    type="file"
                    class="absolute inset-0 opacity-0 appearance-none cursor-pointer"
                    :multiple="multiple"
                    :accept="accept"
                    @change="onSelect"
                  />
                  <div
                    class="h-full mx-auto text-sm font-medium text-center text-light"
                  >
                    <Icon
                      name="pixelarticons:cloud-upload"
                      class="w-8 h-8 mx-auto mb-2"
                    />
                    <template v-if="dragging">
                      <p>Drop to upload</p>
                    </template>
                    <template v-else>
                      <p>Drag and drop files here or click to browse</p>
                    </template>
                    <p v-if="sizeLimitMb" class="mt-1 text-xs">
                      Max File Size: {{ sizeLimitMb }} MB
                    </p>
                  </div>

                  <!-- Show spinner while uploading -->
                  <transition
                    enter-active-class="transition duration-150 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                  >
                    <div
                      v-if="uploading"
                      class="absolute inset-0 flex items-center justify-center bg-dark/40 blur-3xl rounded-md bg-opacity-70"
                    >
                      <svg
                        class="animate-spin w-16 h-16 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  </transition>
                </div>
                <!-- Show an alert if there's an error  -->
                <!--          <VAlert v-if="error" type="error" class="mt-2">{{ error }}</VAlert>-->
                <div>
                  {{ error }}
                </div>
                <!-- File List -->
                <ul class="mt-2 space-y-2">
                  <li v-for="(file, index) in files" :key="file.id">
                    <div
                      class="relative flex items-center px-4 py-2 bg-dark/40 clip-corner"
                    >
                      <img
                        :src="fileUrl + file.id"
                        class="object-contain w-12 h-12 mr-4"
                      />
                      <span class="sm:text-sm text-light">{{
                        file.filename_download
                      }}</span>
                      <span class="flex ml-auto cursor-pointer">
                        <button @click="deleteImage(index)">
                          <Icon
                            name="pixelarticons:trash-alt"
                            class="w-5 h-5 text-red-500 stroke-current hover:text-red-600 flex-shrink-none"
                          />
                        </button>
                      </span>
                    </div>
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
        </div>
        <svg
          class="h-full w-full opacity-70 top-0 absolute"
          viewBox="0 0 2238 2238"
          fill="none"
          preserveAspectRatio="xMinYMin slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1029.95 841.332C970.714 991.886 797.115 1155.46 643.785 1103.72C481.01 1048.79 584.789 755.806 452.317 646.41C285.501 508.653 -71.0458 659.324 -141.872 454.918C-204.898 273.025 84.5134 160.032 249.395 60.7749C368.723 -11.0597 518.79 -79.8543 643.592 -17.9259C756.966 38.332 716.297 210.928 776.429 322.297C806.181 377.398 871.512 398.831 898.995 455.097C961.023 582.085 1081.69 709.852 1029.95 841.332Z"
            fill="#2FFF76"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M114.043 2734.27C-37.5369 2842.95 -246.523 3073.69 -381.322 2944.78C-529.273 2803.3 -260.149 2568.31 -273.144 2364.01C-281.124 2238.54 -470.148 2162.98 -438.793 2041.24C-405.899 1913.52 -261.64 1840.25 -132.005 1816.01C-10.1317 1793.22 100.653 1862.15 210.402 1919.84C327.227 1981.25 491.441 2023.38 510.854 2153.93C530.168 2283.82 365.237 2354.27 291.12 2462.67C227.705 2555.42 205.351 2668.81 114.043 2734.27Z"
            fill="#2FFF76"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2195.5 2497.72C2060.66 2531.06 1899.38 2545.7 1797.35 2451.45C1678 2341.2 1553.89 2126.14 1660.01 2003.06C1778.98 1865.08 2003.51 1999.35 2185.65 2001.07C2235.32 2001.55 2279.95 2018.66 2328.75 2009.4C2489.21 1978.98 2646.72 1799.2 2784.04 1887.6C2908.72 1967.85 2908.24 2209.92 2803.74 2315.15C2696.09 2423.56 2509.27 2267.68 2362.97 2311.6C2279.89 2336.54 2279.71 2476.9 2195.5 2497.72Z"
            fill="#2FFF76"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2279.35 -458.758C2400.67 -526.422 2552.4 -583.004 2675.65 -518.935C2819.81 -443.995 2996.15 -269.187 2926.18 -122.517C2847.73 41.9189 2595.77 -28.5066 2419.6 17.7744C2371.56 30.3955 2324 25.6327 2279.35 47.4091C2132.57 119.003 2027.93 333.901 1872.19 284.775C1730.78 240.171 1667.51 6.51527 1740.63 -122.517C1815.95 -255.433 2037.21 -154.238 2166.79 -235.116C2240.38 -281.046 2203.59 -416.504 2279.35 -458.758Z"
            fill="#2FFF76"
          />
        </svg>
      </div>
    </div>
    <ExampleDecor></ExampleDecor>
  </div>
</template>
<script setup>
import { uploadFiles } from '@directus/sdk'

const multiple = ref(true)
const sizeLimitMb = ref(5)
const accept = ref('image/png, image/jpeg')

const { $client } = useNuxtApp()
const env = useRuntimeConfig()
const fileUrl = env.public.apiUrl + '/assets/'
const { onDragLeave, onDragEnter, dragging, onDrop } = useDragging()
const { processUpload, uploading, onSelect, error } = useUpload()

const files = ref([])

function deleteImage(index) {
  files.value.splice(index, 1)
}

// Composable for drag and drop
function useDragging() {
  const dragging = ref(false)
  let dragCounter = 0

  return { onDragLeave, onDragEnter, dragging, onDrop }

  function onDragEnter() {
    dragCounter++
    if (dragCounter === 1) {
      dragging.value = true
    }
  }

  function onDragLeave() {
    dragCounter--
    if (dragCounter === 0) {
      dragging.value = false
    }
  }
  function onDrop(event) {
    dragCounter = 0
    dragging.value = false
    const fileList = event.dataTransfer.files
    if (fileList.length > 0) {
      processUpload(fileList)
    }
  }
}

// Composable for uploading
function useUpload() {
  const uploading = ref(false)
  const error = ref(null)

  return {
    checkFileSize,
    processUpload,
    uploadFile,
    uploading,
    onSelect,
    error,
  }

  async function processUpload(filesToProcess) {
    error.value = null
    uploading.value = true
    try {
      if (filesToProcess.length > 1) {
        const uploadedFiles = await Promise.all(
          filesToProcess.map((file) => uploadFile(file)),
        )
        files.value.push(...uploadedFiles)
      } else {
        const fileToUpload = filesToProcess[0]
        checkFileSize(fileToUpload)
        const uploadedFile = await uploadFile(fileToUpload)
        files.value.push(uploadedFile)
      }
    } catch (e) {
      console.log(e)
      error.value = e.message
    } finally {
      uploading.value = false
    }
  }

  async function uploadFile(file) {
    try {
      const form = new FormData()
      form.append('file', file)
      const uploadedFile = await $client.request(uploadFiles(form))
      return uploadedFile
    } catch (e) {
      throw new Error(e)
    }
  }

  function checkFileSize(file) {
    if (sizeLimitMb.value) {
      const fileSize = file.size / 1000000
      if (fileSize > sizeLimitMb.value) {
        throw new Error(
          `Oops. Your file size is ${fileSize.toFixed(2)}MB, the max is ${
            sizeLimitMb.value
          }MB`,
        )
      }
    }
  }

  function onSelect(event) {
    const fileList = event.target.files
    if (fileList.length > 0) {
      processUpload(fileList)
    }
  }
}
</script>
