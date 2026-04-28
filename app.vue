<template>
  <div class="bg-white min-h-screen overflow-x-hidden">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Y.B. Gipser GmbH' })
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
