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
  
        <div class=""> 
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
    </div>
  </template>
  

<script>
import Carousel from "./carousel-home.vue";
import ItemCard from "../item-card.vue";

export default {
  components: {
    Carousel,
    ItemCard,
  },
  data() {
    return {
      slideImages: [
        require("/src/assets/logo/cover.png"),
        require("/src/assets/logo/cover.png"),
        require("/src/assets/logo/cover.png"),
      ],
      products: [
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
      ],
    };
  },
};
</script>

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
