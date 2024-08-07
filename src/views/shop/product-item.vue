<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Product image" />
    <p>{{ product.description }}</p>
    <p>Price: {{ product.price }} IQD</p>
    <p v-if="product.discount">Discounted Price: {{ product.discount }} IQD</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

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
