<template>
  <div
    @click="goToProductPage"
    class="w-full max-w-xs bg-white border cursor-pointer border-gray-200 rounded-lg shadow square-card transition-transform transform hover:scale-110"
  >
    <div class="flex items-center justify-center h-[400px] relative">
      <img
        class="absolute inset-0 object-contain w-full h-full rounded-t-lg"
        :src="imageSrc"
        alt="product image"
      />
    </div>
    <div class="px-5 pb-5 flex flex-col justify-between h-full">
      <h5 class="pt-5 text-lg font-semibold tracking-tight text-gray-900 text-left">
        {{ title }}
      </h5>
      <div class="flex flex-row items-start justify-between mt-3 mb-2">
        <span class="text-xl font-bold text-sky-600">{{ price }} IQD</span>
        <span
          v-if="discountPrice"
          class="text-base font-semibold text-gray-400 line-through mt-1"
        >
          {{ discountPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from 'vue-router';

// Define props
const props = defineProps({
  shopId: {
    type: String,
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
  productId: {
    type: [Number, String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  }
});

const router = useRouter();

const goToProductPage = () => {
  router.push({ 
    name: 'ProductItem', 
    params: { 
      shopId: props.shopId, 
      id: props.productId 
    },
    query: {
      imageSrc: props.imageSrc,
      title: props.title,
      price: props.price,
      description: props.description,
      brand: props.brand,
      condition: props.condition,
      category: props.category,
      stock: props.stock,
      discount: props.discount
    }
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
