<script setup>
import Carousel from "./carousel-home.vue";
import ItemCard from "@/components/item-card.vue";
import { ref, computed, onMounted } from "vue";

// Using ref for the slide images
const slideImages = ref([
  require("/src/assets/logo/cover.png"),
  require("/src/assets/logo/cover.png"),
  require("/src/assets/logo/cover.png"),
]);

const products = ref([]);

const loadProducts = async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error loading products:", error);
  }
};

// Computed property for filtering featured products
const filteredProducts = computed(() => {
  return products.value.filter(product => product.featured);
});

// Load products on component mount
onMounted(() => {
  loadProducts();
});
</script>

<template>
  <div class="carousel-img">
    <div class="pb-[20px]">
      <Carousel :slides="slideImages" />
    </div>

    <div class="container mx-auto py-5">
      <div class="flex pb-5">
        <h1 class="text-3xl font-bold">Featured</h1>
        <br />
      </div>

      <div
        class="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ItemCard
          v-for="(product, index) in filteredProducts"
          :key="index"
          :imageSrc="product.image"
          :title="product.name"
          :price="product.price"
          :discountPrice="product.discount"
          :productLink="product.productLink"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-img {
  padding: 60px 15% 20px 15%;
}

@media (max-width: 768px) {
  .carousel-img {
    padding: 20px 40px 20px 40px;
  }
}
</style>
