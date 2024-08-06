<template>
  <div
    class="w-full max-w-xs bg-white border cursor-pointer border-gray-200 rounded-lg shadow square-card transition-transform transform hover:scale-110"
  >
    <a
      :href="productLink"
      class="flex items-center justify-center h-[400px] relative"
    >
      <img
        class="absolute inset-0 object-contain w-full h-full rounded-t-lg"
        :src="imageSrc"
        alt="product image"
      />
    </a>
    <div class="px-5 pb-5 flex flex-col justify-between h-full">
      <a :href="productLink">
        <h5
          class="pt-5 text-lg font-semibold tracking-tight text-gray-900 text-left"
        >
          {{ title }}
        </h5>
      </a>
      <div class="flex flex-row items-start justify-between mt-3 mb-2">
        <span class="text-xl font-bold text-sky-600">{{ price }} IQD</span>
        <span
          v-if="discountPrice"
          class="text-base font-semibold text-gray-400 line-through mt-1"
          >{{ discountPrice }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// Define props
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: false,
  },
  productLink: {
    type: String,
  },
});
</script>

<style scoped>
.square-card {
  height: 20rem;
  display: flex;
  flex-direction: column;
}
</style>
