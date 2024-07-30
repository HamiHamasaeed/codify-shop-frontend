<script setup>
import { useShopStore } from "@/store/shop.js";
import { ref, onMounted, onBeforeUnmount, watch, computed } from "vue";
import { useI18n } from "vue-i18n";
import { config } from "@/config.js";
import Modal from "@/components/codify-modal.vue";

const shopStore = useShopStore();
const { t, locale } = useI18n();
const selectedLanguage = ref("en");
const isTopOpen = ref(false);
const isSmallScreen = ref(window.innerWidth < 768);
const isDropdownOpen = ref(false);
const modalActive = ref(false);
const languageNames = ref({
  en: "English",
  ku: "کوردی",
});

// Methods
const toggleMenu = () => {
  isTopOpen.value = !isTopOpen.value;
};

const handleSize = () => {
  isSmallScreen.value = window.innerWidth < 768;
  if (!isSmallScreen.value) {
    isTopOpen.value = false;
  }
};

const changeLanguage = (lang) => {
  selectedLanguage.value = lang;
  locale.value = lang;
  isDropdownOpen.value = false; // Close the dropdown after selecting a language
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Watchers
watch(
  () => shopStore.shop,
  (newShop) => {
    console.log("Shop data updated:", newShop);
  }
);

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", handleSize);
  console.log("Fetching shop data...");
  shopStore.fetchShopData();
});
const { shop } = shopStore;

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleSize);
});

const imageUrl = computed(() => `${config.backendURL}${shop.image}`);
const handleClick = () => {
  if (isSmallScreen.value) {
    toggleMenu();
  }
};

const showModal = () => {
  modalActive.value = true;
  console.log(imageUrl.value);
};
const hideModal = () => {
  modalActive.value = false;
};
</script>

<style scoped>
.new {
  margin-top: 54px;
}

.spaceP {
  margin-bottom: 20px;
}
</style>

<template>
  <!-- Default Modal -->
  <Modal @close-modal="hideModal" :modalActive="modalActive" />

  <nav class="new bg-[#37393d] fixed w-full z-20 top-0 start-0 top-bar">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Use the dynamic image URL directly -->
      <img
        @click="showModal"
        :src="imageUrl"
        class="h-10 cursor-pointer"
        alt="CodifyLogo"
        @error="console.log('Image failed to load')"
        @load="console.log('Image loaded successfully')"
      />
      <!-- Ensure shop data exists -->
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <div class="relative">
          <button
            id="dropdownHoverButton"
            @click="toggleDropdown"
            class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            {{ languageNames[selectedLanguage] }}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <!-- Dropdown menu -->
          <div
            v-if="isDropdownOpen"
            id="dropdownHover"
            class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[110px] mt-1"
          >
            <ul class="py-1 text-sm text-gray-700">
              <li
                v-for="(name, lang) in languageNames"
                :key="lang"
                @click="changeLanguage(lang)"
                class="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {{ name }}
              </li>
            </ul>
          </div>
        </div>

        <button
          @click="toggleMenu"
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-white hover:bg-green-500 hover:text-gray-700 focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        :class="{ hidden: !isTopOpen, block: isTopOpen }"
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col text-lg md:p-0 mt-4 text-white font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <li :class="['hover:text-blue-300', { spaceP: isTopOpen }]">
            <router-link @click="handleClick" to="/">
              {{ t("home") }}
            </router-link>
          </li>
          <li :class="['hover:text-blue-300', { spaceP: isTopOpen }]">
            <router-link @click="handleClick" to="/shop">
              {{ t("shop") }}
            </router-link>
          </li>
          <li :class="['hover:text-blue-300', { spaceP: isTopOpen }]">
            <router-link @click="handleClick" to="/projects">
              {{ t("projects") }}
            </router-link>
          </li>
          <li :class="['hover:text-blue-300', { spaceP: isTopOpen }]">
            <router-link @click="handleClick" to="/systems">
              {{ t("systems") }}
            </router-link>
          </li>
          <li :class="['hover:text-blue-300', { spaceP: isTopOpen }]">
            <router-link @click="toggleMenu" to="/about">
              {{ t("about") }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
