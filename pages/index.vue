<template>
    <div class="">
        <HomeHero :herosection="generalData?.herosection" :infoData="infoData"></HomeHero>
        <HomeUsers :ourheroes="generalData?.ourheroes" :infoData="infoData"></HomeUsers>
        <HomeNumbers :numbers="generalData?.numbers" :targetNumbers="targetNumbers"></HomeNumbers>
        <HomeAchievement :Achievement="generalData?.Achievement"></HomeAchievement>
        <HomeWhy :whythinktree="generalData?.whythinktree"></HomeWhy>
        <div class="container mb-[200px] mt-[70px]">
            <h4 class="mb text-[32px] text-primary font-bold text-center"> {{ $t('levels') }} </h4>
            <div class="grid grid-cols-1 xl:gap-8 lg:gap-8 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
                <div v-for="item, index in generalData?.Ourlevel" :style="{ top: `${(index) * 50}px` }"
                    data-aos="fade-up" data-aos-duration="500" class="relative  ">
                    <div class="flex justify-end">
                        <SvgShape1></SvgShape1>
                    </div>
                    <div
                        class="box text-center items-center p-[16px] min-h-[250px] flex flex-col gap-4 rounded-[8px] bg-lightGreen">
                        <!-- <SvgLevel1></SvgLevel1> -->
                        <NuxtImg format="webp" quality="80" loading="lazy" :src="item?.image" class="w-[45px] h-[45px]" :alt="item?.name" />
                        <h5 class="text-primary font-bold text-[24px]"> {{ item?.name }} </h5>
                        <p class="text-primary text-[18px]"> {{ item?.description }} </p>
                    </div>
                </div>
            </div>
        </div>
        <HomeSlider :Customer_rate="generalData?.Customer_rate"></HomeSlider>
        <plans :Packages="generalData?.Packages" :infoData="infoData"></plans>

        <HomeCertificate :Certificate_Image="generalData?.Certificate_Image"></HomeCertificate>

        <contact></contact>

    </div>
    <loading v-if="checkLoader"></loading>

</template>
<script setup>
const checkLoader = ref(true);
const generalData = ref();
const route = useRoute();
const { locale, setLocale , t } = useI18n();
const mainUrl = ref(process.client ? `${window.location.origin}${route.fullPath}` : '');
let targetNumbers = ref([0, 0, 0, 0]); 

 const infoData = ref();
 const getData2 = async()=>{
    let result  = await useApi().get('footer');
    if(result.status == 200){
        infoData.value = result.data.data;
    }
 }
const getData = async () => {
    let result = await useApi().get('general');
    if (result.status == 200) {
        generalData.value = result.data.data;
  targetNumbers.value[0] = generalData.value?.numbers?.parents_experiment;
  targetNumbers.value[1] = generalData.value?.numbers?.training_hours;
  targetNumbers.value[2] = generalData.value?.numbers?.our_heroes;
  targetNumbers.value[3] = generalData.value?.numbers?.heroes_rate;
        setTimeout(() => {
            checkLoader.value = false;
        }, 500);
    }
}
const getMeta = async () => {
    let result = await useApi().get('meta_tags');
    if (result.status == 200) {
        useHead({
      title: `${t('home')} | ThinkTree`,
      meta: [
        { name: 'description', content: result.data.data?.meta_home },
        { name: 'keywords', content: result.data.data?.keys },
        { property: 'og:title', content: `${t('home')} | thinkTree` },
        { property: 'og:description', content: result.data.data?.meta_home },
        { property: 'og:url', content: mainUrl.value },
      ],
    });
    }
}

onMounted(() => {
    getMeta();
    getData();
    getData2();

});

</script>
<style lang="scss">
.arrows {
    .box {
        cursor: pointer;

        &:hover {
            svg {
                path {
                    fill: #FDFDFD !important;
                }
            }

        }
    }
}
</style>