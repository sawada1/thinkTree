<template>
    <layoutNav />
 
        <slot />
   
    <layoutFooter />
</template>
<script setup>
const { locale, setLocale } = useI18n();
const checkInt = ref(false);
const handleOffline = () => {
  checkInt.value = true;
};
const handleOnline = () => {
  checkInt.value = false;
};

onBeforeMount(() => {
  window.addEventListener("online", handleOnline);
  window.addEventListener("offline", handleOffline);
  if(process.client){
    locale.value = localStorage.getItem("preferredLang") ? localStorage.getItem("preferredLang") : "ar";
  }
  useHead({
    htmlAttrs: {
      lang: locale.value == "en" ? "en" : "ar",
      dir: locale.value == "en" ? "ltr" : "rtl",
    },
  });
});
</script>
<style lang="">

</style>