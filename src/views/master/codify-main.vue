<script setup>
import TopBar from "@/views/master/top-bar.vue";
import TopBanner from "@/views/master/top-banner.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div id="app">
    <TopBanner :title=  "t('welcome') " />
    <TopBar />
    <div class="main-content">
      <router-view> </router-view>
    </div>
    <div class="footer py-3 bg-[#37393d] text-white">
      <p>© 2024 Codify. All rights reserved.</p>
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
