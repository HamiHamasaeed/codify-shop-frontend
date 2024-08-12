<template>
  <div
    @click="goToProductPage"
    class="w-full max-w-xs bg-white border cursor-pointer border-gray-200 rounded-lg shadow square-card transition-transform transform hover:scale-110"
  >
    <div class="flex items-center justify-center h-[400px] relative">
      <img
        class="absolute inset-0 object-contain w-full h-full rounded-t-lg"
        :src="props.imageSrc"
        alt="product image"
      />
    </div>
    <div class="px-5 pb-5 flex flex-col justify-between h-full">
      <h5
        class="pt-5 text-lg font-semibold tracking-tight text-gray-900 text-left"
      >
        {{ title }}
      </h5>
      <div
        v-if="!discount"
        class="flex flex-row items-start justify-between mt-3 mb-2"
      >
        <span class="text-xl font-bold text-sky-600"
          >{{ price.toLocaleString() }} IQD</span
        >
      </div>
      <div v-else class="flex flex-row items-start justify-between mt-3 mb-2">
        <span class="text-xl font-bold text-sky-600"
          >{{ discount.toLocaleString() }} IQD</span
        >
        <span class="text-base font-semibold text-gray-400 line-through mt-1">
          {{ price.toLocaleString() }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

// Define props

const props = defineProps({
  shopId: {
    type: [String,Number],
  },
  itemId: {
    type: [String,Number],
    required: true,
  },
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
  discount: Number,
});

const router = useRouter();

const goToProductPage = () => {
  router.push({
    name: "ProductItem",
    params: {
      shopId: props.shopId,
      itemId: props.itemId,
    },
  });
};
</script>

<style scoped>
.square-card {
  height: 20rem;
  display: flex;
  flex-direction: column;
}
</style>
