<script setup>
import { defineProps, defineEmits } from "vue";
import { useI18n } from "vue-i18n";

defineProps({
  loginActive: Boolean,
});
const { t } = useI18n();

const emit = defineEmits(["close-login"]);
function closeLogin() {
  emit("close-login");
}
</script>

<template>
  <transition
    enter-active-class="transition-opacity ease-in duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity ease-out duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="loginActive"
      id="medium-modal"
      tabindex="-1"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    >
      <div
        class="relative w-full max-w-lg max-h-full bg-white rounded-lg shadow pb-6"
      >
        <div
          class="flex items-center bg-gray-900 justify-between p-2 md:p-3 border-b rounded-t"
        >
          <h1 class="text-white pl-5 font-bold text-xl">{{ t("login") }}</h1>
          <button
            @click="closeLogin"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-500 hover:text-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="medium-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal content -->
        <form class="max-w-sm mx-auto pt-3">
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >{{ t("email") }}</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900"
              >{{ t("password") }}</label
            >
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white font-semibold bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {{ t("login") }}
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>
