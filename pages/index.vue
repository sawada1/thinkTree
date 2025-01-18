<template>
    <div class="">
        <HomeHero :herosection="generalData?.herosection"></HomeHero>
        <HomeUsers :ourheroes="generalData?.ourheroes"></HomeUsers>
        <HomeNumbers></HomeNumbers>
        <HomeWhy :whythinktree="generalData?.whythinktree"></HomeWhy>
        <div class="container mb-[200px] mt-[70px]">
            <h2 class="mb text-[32px] text-primary font-bold text-center"> {{ $t('levels') }} </h2>
            <div class="grid grid-cols-1 xl:gap-8 lg:gap-8 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
                <div v-for="item ,index in generalData?.Ourlevel" :style="{ top: `${(index) * 50}px` }" data-aos="fade-up" data-aos-duration="500" class="relative  ">
                    <div class="flex justify-end">
                        <SvgShape1></SvgShape1>
                    </div>
                    <div
                        class="box text-center items-center p-[16px] min-h-[250px] flex flex-col gap-4 rounded-[8px] bg-lightGreen">
                        <!-- <SvgLevel1></SvgLevel1> -->
                         <img :src="item?.image" class="w-[45px] h-[45px]" alt="">
                        <h4 class="text-primary font-bold text-[24px]"> {{ item?.name }} </h4>
                        <p class="text-primary text-[18px]">  {{ item?.description }} </p>
                    </div>
                </div>
                <!-- <div data-aos="fade-up" data-aos-duration="800" class="relative top-[50px]">
                    <div class="flex justify-end">
                        <SvgShape1></SvgShape1>
                    </div>
                    <div
                        class="box text-center items-center p-[16px] min-h-[250px] flex flex-col gap-4 rounded-[8px] bg-lightGreen">
                        <SvgLevel2></SvgLevel2>
                        <h4 class="text-primary font-bold text-[24px]"> قسم التكتيكات </h4>
                        <p class="text-primary text-[18px]"> يضم 4 مستويات تُساعد اللاعبين على اكتشاف الحلول الإبداعية
                            وتطبيق التكتيكات المختلفة لتحسين أدائهم في المباريات. </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" class="relative top-[100px]">
                    <div class="flex justify-end">
                        <SvgShape1></SvgShape1>
                    </div>
                    <div
                        class="box text-center items-center p-[16px] min-h-[250px] flex flex-col gap-4 rounded-[8px] bg-lightGreen">
                        <SvgLevel3></SvgLevel3>
                        <h4 class="text-primary font-bold text-[24px]"> قسم الاستراتيجيات المتقدمة </h4>
                        <p class="text-primary text-[18px]"> يشمل 3 مستويات تُركز على التحكم باللعبة، تطبيق استراتيجيات
                            متقدمة، وتحليل المواقف بذكاء. </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1200" class="relative top-[150px]">
                    <div class="flex justify-end">
                        <SvgShape1></SvgShape1>
                    </div>
                    <div
                        class="box text-center items-center p-[16px] min-h-[250px] flex flex-col gap-4 rounded-[8px] bg-lightGreen">
                        <SvgLevel4></SvgLevel4>
                        <h4 class="text-primary font-bold text-[24px]">  قسم النهايات </h4>
                        <p class="text-primary text-[18px]"> يتضمن 3 مستويات تُركز على إتقان استراتيجيات النهايات، تحقيق
                            الفوز بثقة، والاستفادة القصوى من المواقف النهائية. </p>
                    </div>
                </div> -->
            </div>
        </div>
        <plans :Packages="generalData?.Packages"></plans>
      
        <HomeSlider :Customer_rate="generalData?.Customer_rate"></HomeSlider>
      
        <HomeCertificate :Certificate="generalData?.Certificate_Image"></HomeCertificate>

       <contact></contact>

    </div>
</template>
<script setup>
const generalData = ref();
 const getData = async()=>{
    let result  = await useApi().get('general');
    if(result.status == 200){
        generalData.value = result.data.data;
    }
 }
 getData();

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