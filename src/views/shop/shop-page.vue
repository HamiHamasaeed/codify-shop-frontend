<template>
  <div class="my-background">
    <!-- Search bar container with sticky class -->
    <div
      class="sticky bg-white bg-opacity-85 top-[126px] z-10 shadow-sm rounded-lg"
    >
      <form class="max-w-3xl mx-auto p-4">
        <div class="flex">
          <button
            id="dropdown-button"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-3 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
            @click="toggleDropdown"
          >
            {{ t(selectedCategory) }}
            <svg
              class="w-3 h-3 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            v-if="isDropdownOpen"
            class="absolute mt-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px]"
          >
            <ul class="py-2 text-sm text-gray-700">
              <li v-for="category in categories" :key="category">
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory(category)"
                >
                  {{ t(category) }}
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              class="block p-2.5 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300"
              :placeholder="t('search')"
              v-model="searchQuery"
              required
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>

    <div class="container mx-auto py-8">
      <div
        class="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ItemCard
          v-for="items in filtereditems"
          :key="items.id"
          :imageSrc="items.image"
          :title="items.name"
          :price="items.price"
          :discount="items.discount"
          :itemId="items.id"
          :shopId="route.params.shopId"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ItemCard from "@/components/item-card.vue";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const items = ref([]);
const selectedCategory = ref("all");
const searchQuery = ref("");
const route = useRoute();
const { t } = useI18n();
const isDropdownOpen = ref(false);

const categories = [
  "all",
  "boards",
  "sensors",
  "drivers",
  "wires",
  "kits",
  "3d",
  "accessories",
];

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Load items from the JSON file
const loaditems = async () => {
  try {
    const response = await fetch("/shops.json");
    const data = await response.json();
    const shopId = route.params.shopId;
    if (shopId === "all") {
      items.value = data.flatMap((shop) => shop.items);
    } else {
      const shop = data.find((shop) => shop.id === shopId);
      items.value = shop ? shop.items : [];
    }
  } catch (error) {
    console.error("Error loading items:", error);
  }
};

// Filter items based on category and search query
const filtereditems = computed(() => {
  let filtered = items.value;

  if (selectedCategory.value !== "all") {
    filtered = filtered.filter(
      (items) => items.category === selectedCategory.value
    );
  }

  if (searchQuery.value) {
    filtered = filtered.filter((items) =>
      items.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return filtered;
});

onMounted(() => {
  loaditems();
});

// Handle category selection
const selectCategory = (category) => {
  selectedCategory.value = category;
  toggleDropdown();
};
</script>

<style>
.my-background {
  padding: 20px 15% 20px 15%;
}

@media (max-width: 768px) {
  .my-background {
    padding: 20px 40px 20px 40px;
  }
}
</style>
