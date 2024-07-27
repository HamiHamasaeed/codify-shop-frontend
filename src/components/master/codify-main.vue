<script setup>
import TopBar from "@/components/master/top-bar.vue";
import TopBanner from "@/components/master/top-banner.vue";
</script>

<template>
  <div id="app">
    <TopBanner title="Welcome to Codify Store" />
    <TopBar />
    <div class="main-content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style>
.main-content {
  flex-grow: 1;
  padding-top: 120px; /* Adjust this value based on the combined height of TopBanner and TopBar */
}
#app {
  font-family: "Noto Kufi Arabic", sans-serif;
  padding-top: 2px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d2a37;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
