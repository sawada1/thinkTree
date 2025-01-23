<template>
  <div :class="{ dark: isDarkMode1 }">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<script setup>
const isDarkMode1 = ref(false);
const isDarkMode = ref(false);

onMounted(() => {
  // Check if the device is in dark mode
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Optionally listen for changes in the system preference
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
      isDarkMode.value = event.matches;
    });
});
</script>
