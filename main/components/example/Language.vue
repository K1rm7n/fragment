<template>
  <div class="relative">
    <div class="lg:grid grid-cols-2 relative z-10">
      <div
        class="p-5 py-10 sm:p-10 bg-light relative text-dark/75 flex items-center"
      >
        <div class="space-y-2">
          <h2 class="text-3xl font-bold mb-5 text-dark">Language</h2>
          <p>Language engine for your application</p>
          <p>
            Path:
            <code>/components/example/Language.vue</code>
          </p>
          <p>
            Composable:
            <code>/composables/useLanguage.vue</code>
          </p>
          <p>
            Locales path:
            <code>/locales/</code>
          </p>
          <p>
            Language engine <code>i18n</code> fully integrated in current
            platform. Implementing the required languages is very easy, just
            read the documentation and see our example.
          </p>
          <p>
            As you can see in this example, the route also changes when you
            switch languages
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
          class="p-5 py-10 sm:p-10 bg-alt/40 relative backdrop-blur-3xl h-full relative z-10"
        >
          <NuxtLink
            v-for="lang in availableLocales"
            :key="lang.code"
            :to="switchLocalePath(lang.code)"
            class="group text-dark transition-all buttons absolute top-9 right-10 h-10 w-10 flex justify-center items-center bg-primary hover:bg-dark hover:text-light"
          >
            <span class="uppercase text-sm font-bold">{{ lang.name }}</span>
            <svg
              width="36"
              height="16"
              viewBox="0 0 36 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="fill-primary absolute left-0 bottom-0 translate-y-full w-full h-auto transition-all group-hover:fill-dark"
            >
              <rect x="28" width="4" height="4" transform="rotate(90 28 0)" />
              <rect x="12" width="4" height="4" transform="rotate(90 12 0)" />
              <rect x="36" width="4" height="4" transform="rotate(90 36 0)" />
              <rect x="20" width="4" height="4" transform="rotate(90 20 0)" />
              <rect x="4" width="4" height="4" transform="rotate(90 4 0)" />
              <rect
                x="20"
                y="8"
                width="4"
                height="4"
                transform="rotate(90 20 8)"
                fill-opacity="0.5"
              />
              <rect
                x="4"
                y="8"
                width="4"
                height="4"
                transform="rotate(90 4 8)"
                fill-opacity="0.5"
              />
              <rect
                x="28"
                y="8"
                width="4"
                height="4"
                transform="rotate(90 28 8)"
                fill-opacity="0.5"
              />
              <rect
                x="12"
                y="8"
                width="4"
                height="4"
                transform="rotate(90 12 8)"
                fill-opacity="0.5"
              />
              <rect
                x="36"
                y="8"
                width="4"
                height="4"
                transform="rotate(90 36 8)"
                fill-opacity="0.5"
              />
              <rect
                x="32"
                y="12"
                width="4"
                height="4"
                transform="rotate(90 32 12)"
                fill-opacity="0.25"
              />
              <rect
                x="16"
                y="12"
                width="4"
                height="4"
                transform="rotate(90 16 12)"
                fill-opacity="0.25"
              />
              <rect
                x="24"
                y="12"
                width="4"
                height="4"
                transform="rotate(90 24 12)"
                fill-opacity="0.25"
              />
              <rect
                x="8"
                y="12"
                width="4"
                height="4"
                transform="rotate(90 8 12)"
                fill-opacity="0.25"
              />
              <rect
                x="24"
                y="4"
                width="4"
                height="4"
                transform="rotate(90 24 4)"
                fill-opacity="0.75"
              />
              <rect
                x="8"
                y="4"
                width="4"
                height="4"
                transform="rotate(90 8 4)"
                fill-opacity="0.75"
              />
              <rect
                x="32"
                y="4"
                width="4"
                height="4"
                transform="rotate(90 32 4)"
                fill-opacity="0.75"
              />
              <rect
                x="16"
                y="4"
                width="4"
                height="4"
                transform="rotate(90 16 4)"
                fill-opacity="0.75"
              />
            </svg>
          </NuxtLink>
          <h3 class="text-3xl font-bold mb-5 md:mb-0 text-light flex">
            Switch the language
          </h3>
          <div
            class="flex justify-center items-center h-full md:-mt-8 max-sm:min-h-[250px] max-lg:min-h-[300px]"
          >
            <div
              class="bg-dark/40 text-light p-7 lg:p-14 relative w-full clip-corner"
            >
              <h3 class="text-xl font-semibold">{{ $t('hello') }}</h3>
              <p class="text-light/80 text-sm mt-5">{{ $t('lorem') }}</p>
            </div>
          </div>
        </div>
        <svg
          preserveAspectRatio="xMinYMin slice"
          viewBox="0 0 2238 2238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-full w-full opacity-70 top-0 absolute"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-155.07 1135.89C127.019 1029.64 549.784 756.859 706.297 1014.47C878.079 1297.22 359.656 1551.48 294.484 1875.83C254.462 2075.02 517.938 2272.04 418.067 2448.96C313.293 2634.57 57.4415 2688.61 -155.07 2672.23C-354.859 2656.83 -498.97 2502.88 -646.166 2366.92C-802.854 2222.2 -1041.58 2087.74 -1017.28 1875.83C-993.1 1664.99 -706.158 1624 -545.112 1485.79C-407.322 1367.54 -324.993 1199.88 -155.07 1135.89Z"
            fill="#2FFF76"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2181.93 1582.89C2464.02 1476.64 2886.78 1203.86 3043.3 1461.47C3215.08 1744.22 2696.66 1998.48 2631.48 2322.83C2591.46 2522.02 2854.94 2719.04 2755.07 2895.96C2650.29 3081.57 2394.44 3135.61 2181.93 3119.23C1982.14 3103.83 1838.03 2949.88 1690.83 2813.92C1534.15 2669.2 1295.42 2534.74 1319.72 2322.83C1343.9 2111.99 1630.84 2071 1791.89 1932.79C1929.68 1814.54 2012.01 1646.88 2181.93 1582.89Z"
            fill="#2FFF76"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1226.98 325.336C1179.39 446.289 1039.92 577.699 916.74 536.131C785.969 492.003 869.344 256.625 762.917 168.737C628.9 58.0654 342.454 179.113 285.553 14.8951C234.919 -131.235 467.429 -222.012 599.893 -301.754C695.759 -359.465 816.321 -414.734 916.585 -364.982C1007.67 -319.785 974.996 -181.123 1023.31 -91.651C1047.21 -47.3832 1099.69 -30.1647 1121.77 15.0391C1171.61 117.06 1268.54 219.706 1226.98 325.336Z"
            fill="#2FFF76"
          />
        </svg>
      </div>
    </div>
    <ExampleDecor></ExampleDecor>
  </div>
</template>
<script setup>
const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value && i.name)
})
</script>
