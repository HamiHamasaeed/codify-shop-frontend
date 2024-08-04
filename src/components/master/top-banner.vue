<!-- src/components/TopBanner.vue -->
<template>
  <div
    :class="['top-banner ', { 'hidden-banner': isHidden }]"
    :style="gradiantColor"
  >
    <h1 class="font-bold">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TopBanner",
  data() {
    return {
      gradiantColor: {
        background:
          "linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      },
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.top-banner {
  background-color: #24232b; /* Change this to your preferred color */
  color: white;
  text-align: center;
  padding: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 90;
}


</style>
