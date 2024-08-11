<template>
  <div v-if="product" class="container mx-auto p-4 flex flex-col items-center">
    <div class="sticky z-10 top-[135px] w-full max-w-4xl flex justify-start">
      <h1
        @click="$router.push({ name: 'shop' })"
        class="mb-4 py-2 px-2 text-orange-600 rounded-md bg-white shadow-md hover:text-orange-700 hover:cursor-pointer hover:bg-gray-100 transition"
      >
        &#8592; Back
      </h1>
    </div>

    <div class="flex flex-col lg:flex-row items-center w-full max-w-4xl">
      <!-- Product Image -->
      <div class="flex-shrink-0 w-full md:w-1/3 lg:w-1/3 mb-4 lg:mb-0">
        <img
          class="object-contain w-full h-auto lg:mt-5 rounded-lg"
          :src="props.imageSrc"
          alt="Product image"
        />
      </div>

      <!-- Product Details -->
      <div class="lg:ml-6 md:w-1/3 lg:w-2/3 text-left">
        <h1 class="text-4xl font-bold text-gray-800 text-center lg:text-left">
          {{ props.title }}
        </h1>
        <p class="text-xl text-gray-500 mt-2 text-center lg:text-left">
          #{{ props.id }}
        </p>

        <p
          class="mt-3 px-2 py-1 text-center text-sm font-semibold rounded-full mx-auto lg:mx-0"
          :class="{
            'bg-green-200 text-green-800 max-w-20': props.stock > 0,
            'bg-red-200 text-red-800 max-w-28': props.stock === 0,
          }"
        >
          {{ props.stock > 0 ? 'In Stock' : 'Out of Stock' }}
        </p>

        <!-- Conditional Pricing -->
        <div class="mt-3 text-center lg:text-left">
          <p v-if="props.discount" class="text-lg text-gray-500">
            Old Price: <span class="line-through">{{ props.price }} IQD</span>
          </p>
          <div class="bg-indigo-400 mt-2 max-w-[250px] rounded-lg text-white text-center mx-auto lg:mx-0">
            <p v-if="props.discount" class="text-2xl font-semibold">
              Price: {{ props.discount }} IQD
            </p>
            <p v-else class="text-2xl font-semibold">
              Price: {{ props.price }} IQD
            </p>
          </div>
        </div>

        <p class="mt-3 text-lg text-gray-700 text-center lg:text-left">
          Condition: {{ props.condition }}
        </p>
        <p class="mt-3 text-lg text-gray-700 text-center lg:text-left">
          Brand: {{ props.brand }}
        </p>

        <!-- Categories as Badges -->
        <div class="flex flex-wrap gap-2 justify-center lg:justify-start mt-4">
          <span
            v-for="category in props.category.split(',')"
            :key="category"
            class="px-3 py-1 text-md font-medium bg-indigo-100 text-indigo-800 rounded-full"
          >
            {{ category }}
          </span>
        </div>

        <!-- Description -->
        <p class="mt-4 text-lg text-gray-500 text-center lg:text-left">
          {{ props.description }}
        </p>
      </div>
    </div>

    <!-- Suggested Items -->
    <div class="w-full max-w-6xl mt-20 mb-3 px-20">
      <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
        Suggested Items
      </h2>
      <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
        <ItemCard
          v-for="item in suggestedItems"
          :key="item.id"
          :imageSrc="item.imageSrc"
          :title="item.name"
          :price="item.price"
          :discountPrice="item.discount"
          :productId="item.id"
        />
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
import { ref, onMounted, defineProps } from 'vue';
import ItemCard from '@/components/item-card.vue'; // Adjust the path as needed

const props = defineProps({
  id: String,
  shopId: String,
  imageSrc: String,
  title: String,
  price: Number,
  discount: Number,
  description: String,
  brand: String,
  condition: String,
  category: String,
  stock: Number
});

const suggestedItems = ref([]);

const fetchSuggestedItems = async () => {
  try {
    const response = await fetch('/shops.json'); // Fetch all products
    const data = await response.json();
    
    // Filter suggested items
    suggestedItems.value = data
      .filter(
        (p) =>
          p.categories.some((category) =>
            props.category.split(',').includes(category)
          ) && p.id !== props.id
      )
      .slice(0, 5); // Fetch a few items in the same category, excluding the current product
  } catch (error) {
    console.error('Error loading suggested items:', error);
  }
};

onMounted(() => {
  fetchSuggestedItems();
});
</script>
