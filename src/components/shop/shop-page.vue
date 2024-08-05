<script setup>
import ItemCard from "../item-card.vue";
import { reactive } from "vue";

const products = reactive([
  {
    imageSrc: require("/src/assets/logo/justC.png"),
    title: "Apple Watch Series 7 GPS",
    price: "$599",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/cover.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/whiteLogo.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/whiteLogo.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/justC.png"),
    title: "Apple Watch Series 7 GPS",
    price: "$599",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/cover.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/whiteLogo.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/whiteLogo.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/justC.png"),
    title: "Apple Watch Series 7 GPS",
    price: "$599",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/cover.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/whiteLogo.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
  {
    imageSrc: require("/src/assets/logo/whiteLogo.png"),
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: "$599",
    discountPrice: "$699",
    productLink: "#",
  },
]);
</script>

<template>
  <div class="my-background">
    <!-- Search bar container with sticky class -->
    <div class= "sticky bg-white bg-opacity-85 top-[126px] z-10 shadow-sm rounded-lg">
      <form class="max-w-3xl mx-auto p-4">
        <div class="flex">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-3 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
          >
            All categories
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
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul
              class="py-2 text-md text-gray-700"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  Mockups
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  Design
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  Logos
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-lg text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Search..."
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
          v-for="(product, index) in products"
          :key="index"
          :imageSrc="product.imageSrc"
          :title="product.title"
          :price="product.price"
          :discountPrice="product.discountPrice"
          :productLink="product.productLink"
        />
      </div>
    </div>
  </div>
</template>

<style>
.my-background {
  padding: 30px 15% 20px 15%;
}

@media (max-width: 768px) {
  .my-background {
    padding: 20px 40px 20px 40px;
  }
}
</style>
