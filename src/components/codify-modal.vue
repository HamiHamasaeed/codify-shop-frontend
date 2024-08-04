<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modalActive: Boolean,
  desc: String,
  phoneOne: String,
  phoneTwo: String,
  address: String,
  email: String,
  fb: String,
  insta: String,
  linkedin: String,
  tiktok: String,
  github: String,
  imgLogo: String,
});

const emit = defineEmits(["close-modal"]);
function closeModal() {
  emit("close-modal");
}
</script>

<template>
  <transition>
    <div
      v-show="modalActive"
      id="medium-modal"
      tabindex="-1"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div
            class="flex items-center bg-gray-900 justify-between p-4 md:p-5 border-b rounded-t"
          >
            <img class="h-12" :src="imgLogo" alt="Codify Logo" />
            <button
              @click="closeModal"
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
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4 text-justify">
            <p class="text-base leading-relaxed text-gray-500">
              {{ desc }}
            </p>
            <h2 class="font-bold text-lg text-black">
              The Language of Innovative
            </h2>
            <h3 class="text-md font-bold">
              Address: <span v-if="address" class="font-normal">{{ address }}</span>
              <span v-else class="font-normal">Address not available</span>
            </h3>
            <h3 class="text-md font-bold">
              Email: <span v-if="email" class="font-normal">{{ email }}</span>
              <span v-else class="font-normal">No Email Available</span>

            </h3>
            <h3 class="text-md font-bold">
              Phone:
              <span class="font-normal" v-if="phoneOne && phoneTwo"
                >{{ phoneOne }} - {{ phoneTwo }}</span
              >
              <span class="font-normal" v-else-if="phoneOne">{{
                phoneOne
              }}</span>
              <span class="font-normal" v-else-if="phoneTwo">{{
                phoneTwo
              }}</span>
              <span class="font-normal" v-else>No phone number available</span>
            </h3>
            <div class="flex justify-end space-x-3 text-2xl text-gray-900">
              <a :href="fb">
                <ion-icon
                  class="hover:bg-gray-500 hover:text-white hover:rounded-lg p-1 hover:cursor-pointer"
                  name="logo-facebook"
                ></ion-icon>
              </a>
              <a :href="insta">
                <ion-icon
                  class="hover:bg-gray-500 hover:text-white hover:rounded-lg p-1 hover:cursor-pointer"
                  name="logo-instagram"
                ></ion-icon>
              </a>
              <a :href="linkedin">
                <ion-icon
                  class="hover:bg-gray-500 hover:text-white hover:rounded-lg p-1 hover:cursor-pointer"
                  name="logo-linkedin"
                ></ion-icon>
              </a>
              <a :href="tiktok">
                <ion-icon
                  class="hover:bg-gray-500 hover:text-white hover:rounded-lg p-1 hover:cursor-pointer"
                  name="logo-tiktok"
                ></ion-icon>
              </a>
              <a :href="github">
                <ion-icon
                  class="hover:bg-gray-500 hover:text-white hover:rounded-lg p-1 hover:cursor-pointer"
                  name="logo-github"
                ></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
