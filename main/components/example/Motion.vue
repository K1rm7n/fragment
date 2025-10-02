<template>
  <div class="relative">
    <div class="lg:grid grid-cols-2 relative z-10">
      <div
        class="p-5 py-10 sm:p-10 bg-light relative text-dark/75 flex items-center"
      >
        <div class="space-y-2">
          <h2 class="text-3xl font-bold mb-5 text-dark">
            Motion Utilities VueUse
          </h2>
          <p>
            Path:
            <code>/components/example/Motion.vue</code>
          </p>
          <p>
            Best way to add fade in animation on scroll or other events. All
            items have <code>iVisible</code> trigger effect and
            <code>2-4</code> have also hover effect
          </p>
          <a
            href="https://motion.vueuse.org/features/directive-usage"
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
      <div class="relative clip-block-corner overflow-hidden max-w-screen">
        <div class="z-10 p-10 bg-alt/[0.45] relative backdrop-blur-3xl h-full">
          <div class="h-full">
            <div
              class="h-full flex items-center justify-center max-sm:min-h-[400px] max-lg:min-h-[500px]"
            >
              <div class="grid grid-cols-2 gap-5 md:p-10">
                <div
                  v-motion-slide-visible-left
                  class="bg-dark/40 text-light w-32 h-32 flex items-center justify-center font-bold text-xl"
                >
                  1
                </div>
                <div
                  v-motion-slide-visible-right
                  class="bg-dark/40 text-light w-32 h-32 flex items-center justify-center font-bold text-xl clip-corner"
                >
                  2
                </div>
                <div
                  v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :visible="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 0.8 }"
                  :delay="300"
                  class="bg-dark/40 text-light w-32 h-32 flex items-center justify-center font-bold text-xl"
                >
                  3
                </div>
                <div
                  v-motion
                  :initial="{ opacity: 0, y: 100 }"
                  :visible="{ opacity: 1, y: 0, scale: 1 }"
                  :hovered="{ scale: 1.2 }"
                  :delay="300"
                  class="bg-dark/40 text-light w-32 h-32 flex items-center justify-center font-bold text-xl"
                >
                  4
                </div>
              </div>
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
<script setup lang="ts"></script>
