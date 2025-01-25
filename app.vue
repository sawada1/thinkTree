<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<script setup>
const isDarkMode1 = ref(false);
const isDarkMode = ref(false);

onMounted(() => {
  const loadFont = () => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  };

  if (document.readyState === 'complete') {
    loadFont();
  } else {
    window.addEventListener('load', loadFont);
  }
});
</script>
