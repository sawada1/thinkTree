<template>
    <div class="">
        <HomeHero></HomeHero>
        <HomeUsers></HomeUsers>
        <HomeNumbers></HomeNumbers>
        <HomeWhy></HomeWhy>
        <div class="container mb-[200px] mt-[70px]">
            <h2 class="mb text-[32px] text-primary font-bold text-center"> مستوياتنا </h2>
            <div class="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
                <div data-aos="fade-up" data-aos-duration="500" class="relative ">
                    <div class="flex justify-end">
                        <SvgShape1></SvgShape1>
                    </div>
                    <div
                        class="box text-center items-center p-[16px] min-h-[250px] flex flex-col gap-4 rounded-[8px] bg-lightGreen">
                        <SvgLevel1></SvgLevel1>
                        <h4 class="text-primary font-bold text-[24px]"> قسم التأسيس </h4>
                        <p class="text-primary text-[18px]"> يضم 3 مستويات تُركّز على فهم القواعد الأساسية للعبة، تعلم
                            الحركات الأولى، وإتقان اللعب الأساسي </p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" class="relative top-[50px]">
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
                </div>
            </div>
        </div>
        <plans></plans>
      
        <HomeSlider></HomeSlider>
      
        <HomeCertificate></HomeCertificate>

       <contact></contact>

    </div>
</template>
<script setup>

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