<template>
    <div class="mt-14">
        <plans :Packages="generalData?.Packages"></plans>
      
        <HomeSlider :Customer_rate="generalData?.Customer_rate"></HomeSlider>
        
    </div>
    <loading v-if="checkLoader"></loading>
</template>
<script setup>
const checkLoader = ref(true);
const generalData = ref();
const route = useRoute();
const { locale, setLocale , t } = useI18n();
const mainUrl = ref(process.client ? `${window.location.origin}${route.fullPath}` : '');
 const getData = async()=>{
    let result  = await useApi().get('general');
    if(result.status == 200){
        generalData.value = result.data.data;
        setTimeout(() => {
            checkLoader.value = false;
        }, 500);
    }
 }
 onMounted(() => {
     getData();
     useHead({
      title: `${t('plans')} | thinkTree`,
      meta: [
        { name: 'description', content: t('plans')},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'Your Name or Company' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `${t('plans')} | thinkTree` },
        { property: 'og:description', content: t('plans') },
        { property: 'og:image', content: '/images/about.png' },
        { property: 'og:url', content: mainUrl.value },
      ],
    });
 });
</script>
<style lang="">
    
</style>