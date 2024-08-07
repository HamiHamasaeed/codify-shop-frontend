<template>
    <div v-if="product" class="container mx-auto p-4 flex flex-col items-center">
      <button 
        @click="$router.go(-1)"
        class="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
      >
        Return
      </button>
  
      <div class="flex flex-col lg:flex-row items-center w-full max-w-4xl">
        <!-- Product Image -->
        <div class="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0">
          <img
            class="object-contain w-full h-auto rounded-lg"
            :src="product.image"
            alt="Product image"
          />
        </div>
  
        <!-- Product Details -->
        <div class="lg:ml-6 lg:w-2/3 text-left">
          <h1 class="text-3xl font-bold text-gray-900 text-center lg:text-left">{{ product.name }}</h1>
          <p class="text-lg text-gray-500 mt-1 text-center lg:text-left">{{ product.code }}</p>
  
          <p
            class="mt-2 px-2 py-1 inline-block text-xs font-semibold rounded-full mx-auto lg:mx-0"
            :class="{
              'bg-green-200 text-green-800': product.status === 'available',
              'bg-red-200 text-red-800': product.status !== 'available',
            }"
          >
            {{ product.status }}
          </p>
  
          <p class="mt-2 text-gray-700 text-center lg:text-left">Condition: {{ product.condition }}</p>
          <p class="mt-2 text-gray-700 text-center lg:text-left">Brand: {{ product.brand }}</p>
          <p class="mt-4 text-2xl font-semibold text-gray-900 text-center lg:text-left">
            Price: {{ product.price }} IQD
          </p>
  
          <!-- Categories as Badges -->
          <div class="mt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span
              v-for="category in product.categories"
              :key="category"
              class="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 rounded-full"
            >
              {{ category }}
            </span>
          </div>
  
          <!-- Description -->
          <p class="mt-4 text-gray-600 text-center lg:text-left">{{ product.description }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        role="status"
        class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div
          class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96"
        >
          <svg
            class="w-10 h-10 text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
            />
          </svg>
        </div>
        <div class="w-full">
          <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 100%;
  }
  </style>
  
  

  
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const product = ref(null);

const fetchProduct = async (id) => {
  try {
    const response = await fetch("/data.json"); // Fetch all products
    const data = await response.json();
    product.value = data.find((p) => p.id === id);
  } catch (error) {
    console.error("Error loading product:", error);
  }
};

onMounted(() => {
  fetchProduct(route.params.id);
});
</script>
