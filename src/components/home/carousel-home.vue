<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="carousel-item">
        <img :src="slide" alt="Slide Image" />
      </div>
    </div>
    <button class="carousel-control prev rounded-full" @click="prevSlide">&lt;</button>
    <button class="carousel-control next rounded-full" @click="nextSlide">&gt;</button>
  </div>
</template>

<script>
export default {
  name: "CarouselHome",
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.slides.length - 1;
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  margin: auto;
  border-radius: 20px;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-item {
  min-width: 100%;
  box-sizing: border-box;
}
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  padding: 5px 12px;
  cursor: pointer;
}
.carousel-control.prev {
  left: 10px;
}
.carousel-control.next {
  right: 10px;
}
</style>
