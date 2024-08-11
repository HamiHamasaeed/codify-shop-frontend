<template>
    <div
      class="p-10 justify-items-center content-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <!-- Default card for all shops -->
      <div
        class="w-full max-w-[250px] bg-white border cursor-pointer border-gray-200 rounded-lg shadow square-card transition-transform transform hover:scale-110"
        @click="navigateToAllShops"
      >
        <div class="flex items-center justify-center h-full relative">
          <img
            class="absolute inset-0 object-contain w-full h-full px-2 rounded-t-lg"
            src="https://alloutactionfund.myshopify.com/cdn/shop/files/ShareImage_Shopify.png?v=1669659768"
            alt="All"
          />
        </div>
      </div>
  
      <!-- Cards for individual shops -->
      <StoreCard
        v-for="shop in shops"
        :key="shop.id"
        :logoSrc="shop.image"
        :shopId="shop.id"
        @click="navigateToShop(shop.id)"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import StoreCard from "./store-card.vue"; // Adjust the path to your card component
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  const shops = ref([]);
  
  const fetchShops = async () => {
    const response = await fetch("/shops.json");
    shops.value = await response.json();
  };
  
  const navigateToAllShops = () => {
  // No need to pass any shopId here
  router.push({ name: "shop", params: { shopId: "all" } });
  console.log("Navigating to all shops");
};
  const navigateToShop = (shopId) => {
    router.push({ name: "shop", params: { shopId } });
    console.log(`Navigating to shop with ID: ${shopId}`);
  };
  
  onMounted(() => {
    fetchShops();
  });
  </script>
  