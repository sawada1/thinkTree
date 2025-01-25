<template>
    <layoutNav :linkTest="linkTest" />
 
        <slot />
        <div v-if="checkInt" class="fixed game-container flex flex-col items-center overflow-y-auto justify-center h-screen w-screen bg-[] top-0 game-container z-50" style="background: linear-gradient(0deg, rgba(37,109,32,1) 15%, rgba(253,187,45,1) 100%);">
          <h1 class="xl:text-[40px] lg:text-[40px] md:text-[40px] text-[28px] text-center font-bold mb-8 text-white"> الإنترنت غير متصل! اللعبة مستمرة بدون اتصال. </h1>
          <div class=" xl:w-[800px] lg:w-[800px] md:w-[700px] w-[340px] ">
            <TheChessboard class="w-full !h-[100%]" />
          </div>

      </div>
       <a v-if="generalData?.whatsapp_number" aria-label="Whatsapp" :href="`https://wa.me/${generalData?.whatsapp_number}`" target="_blank" class="fixed z-40 bottom-[80px] left-5">
         <client-only>
             <Vue3Lottie :animation-data="whatsappIcon" :height="70" :width="70" />
           </client-only>

       </a>
       <Toast />
   
    <layoutFooter :linkTest="linkTest" :generalData="generalData" />
</template>
<script setup>
import { TheChessboard } from 'vue3-chessboard';
import 'vue3-chessboard/style.css';
import { Vue3Lottie } from "vue3-lottie";
import whatsappIcon from "~/assets/animations/whatsapp.json";
const { locale, setLocale } = useI18n();
const checkInt = ref(false);
const handleOffline = () => {
  checkInt.value = true;
};
const handleOnline = () => {
  checkInt.value = false;
};
const linkTest = ref();

const getData = async()=>{
    let result  = await useApi().get('test_link');
    if(result.status == 200){
        linkTest.value = result.data.data;
    }
 }
 getData();
 const generalData = ref();
 const getData2 = async()=>{
    let result  = await useApi().get('footer');
    if(result.status == 200){
        generalData.value = result.data.data;
    }
 }
 getData2();

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
<style>
.game-container .main-wrap{
  max-width: 100% !important;
  width: 100%;
}
</style>