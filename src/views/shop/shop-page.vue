<script setup>
import ItemCard from "@/components/item-card.vue";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const products = ref([]);
const selectedCategory = ref("all");
const searchQuery = ref("");

const { t } = useI18n();
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const loadProducts = async () => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Error loading products:", error);
  }
};

const filteredProducts = computed(() => {
  let filtered = products.value;

  if (selectedCategory.value !== "all") {
    filtered = filtered.filter(product =>
      product.categories.includes(selectedCategory.value)
    );
  }
  
  if (searchQuery.value) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  return filtered;
});

onMounted(() => {
  loadProducts();
});

const selectCategory = (category) => {
  selectedCategory.value = category;
  toggleDropdown();
};
</script>

<template>
  <div class="my-background">
    <!-- Search bar container with sticky class -->
    <div class="sticky bg-white bg-opacity-85 top-[126px] z-10 shadow-sm rounded-lg">
      <form class="max-w-3xl mx-auto p-4">
        <div class="flex">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
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
            id="dropdown"
            class="absolute mt-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[150px]"
          >
            <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('all')"
                >
                  {{ t("all") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('boards')"
                >
                  {{ t("boards") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('sensors')"
                >
                  {{ t("sensors") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('drivers')"
                >
                  {{ t("drivers") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('wires')"
                >
                  {{ t("wires") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('kits')"
                >
                  {{ t("kits") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('3d')"
                >
                  {{ t("3d") }}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                  @click="selectCategory('accessories')"
                >
                  {{ t("accessories") }}
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-30"
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
      <div class="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ItemCard
          v-for="(product, index) in filteredProducts"
          :key="index"
          :imageSrc="product.image"
          :title="product.name"
          :price="product.price"
          :discountPrice="product.discount"
          :productLink="product.link"
        />
      </div>
    </div>
  </div>
</template>

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
