<template>
  <div
    class="w-full max-w-[250px] bg-white border cursor-pointer border-gray-200 rounded-lg shadow square-card transition-transform transform hover:scale-110"
    @click="handleClick"
  >
    <div class="flex items-center justify-center h-full relative">
      <img
        class="absolute inset-0 object-contain w-full h-full px-2 rounded-t-lg"
        :src="logoSrc"
        :alt="`Shop ${shopId} logo`"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  logoSrc: {
    type: String,
    required: true,
  },
  shopId: {
    type: String,
  },
});

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click', props.shopId);
};
</script>

<style scoped>
.square-card {
  height: 13rem;
  display: flex;
  flex-direction: column;
}
</style>
