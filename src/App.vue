<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./assets/css/fonts.css";

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Rubik", "Noto Kufi Arabic", sans-serif;
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
