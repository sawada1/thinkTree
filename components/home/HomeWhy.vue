<template>

<div class="container why-container mt-[70px] xl:mt-[120px] lg:mt-[120px]">
        <h2 class="mb-8 text-[32px] text-primary font-bold text-center"> لماذا ThinkTree ؟ </h2>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:grid-cols-2">
            <div class="order-1">
                <img v-if="chooseImg == 1" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack1.png" alt="">
                <img v-if="chooseImg == 2" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack2.png" alt="">
                <img v-if="chooseImg == 3" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack3.png" alt="">
                <img v-if="chooseImg == 4" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack4.png" alt="">
                <img v-if="chooseImg == 5" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack5.png" alt="">

            </div>
          <div class="tabs xl:order-2 lg:order-2 flex flex-col gap-5">
            <button @click="chooseImg = 1" :class="{'bg-lightGreen shadow-card1': chooseImg == 1}"  class="rounded-[8px] border-[#E1E3E5] border-[1px] p-[16px] flex items-center gap-3 bg-[#FDFDFD] hover:bg-lightGreen hover:shadow-card1 transition-[0.4s all]">
                <img src="/images/why1.svg" alt="">
                <div class="flex flex-col items-start gap-3">
                    <h4 class="font-bold text-[20px]"> تحليل شخصية مخصص </h4>
                    <p> نفهم كل بطل ونحدد نقاط قوته ونساعده على تطويرها </p>
                </div>
            </button>
            <button @click="chooseImg = 2"  :class="{'bg-lightGreen shadow-card1': chooseImg == 2}"  class="rounded-[8px] border-[#E1E3E5] border-[1px] p-[16px] flex items-center gap-3 bg-[#FDFDFD] hover:bg-lightGreen hover:shadow-card1 transition-[0.4s all]">
                <img src="/images/why2.svg" alt="">
                <div class="flex flex-col items-start gap-3">
                    <h4 class="font-bold text-[20px]"> تجربة تعليمية ممتعة</h4>
                    <p> نجمع بين التعلم والمرح لضمان تفاعل و استمتاع الابطال بالتدريب </p>
                </div>
            </button>
            <button @click="chooseImg = 3"  :class="{'bg-lightGreen shadow-card1': chooseImg == 3}"  class="rounded-[8px] border-[#E1E3E5] border-[1px] p-[16px] flex items-center gap-3 bg-[#FDFDFD] hover:bg-lightGreen hover:shadow-card1 transition-[0.4s all]">
                <img src="/images/why3.svg" alt="">
                <div class="flex flex-col items-start gap-3">
                    <h4 class="font-bold text-[20px]"> متابعة دقيقة للتقدم </h4>
                    <p> نوفر تقارير شهرية تساعد الأهل على متابعة تطور أبطالهم خطوة بخطوة </p>
                </div>
            </button>
            <button @click="chooseImg = 4" :class="{'bg-lightGreen shadow-card1': chooseImg == 4}"   class="rounded-[8px] border-[#E1E3E5] border-[1px] p-[16px] flex items-center gap-3 bg-[#FDFDFD] hover:bg-lightGreen hover:shadow-card1 transition-[0.4s all]">
                <img src="/images/why4.svg" alt="">
                <div class="flex flex-col items-start gap-3">
                    <h4 class="font-bold text-[20px]"> مرونة الجلسات </h4>
                    <p> كل الجلسات أونلاين عبر منصات مثل Zoom وChesskid.com لراحة أكبر </p>
                </div>
            </button>
            <button @click="chooseImg = 5" :class="{'bg-lightGreen shadow-card1': chooseImg == 5}"  class="rounded-[8px] border-[#E1E3E5] border-[1px] p-[16px] flex items-center gap-3 bg-[#FDFDFD] hover:bg-lightGreen hover:shadow-card1 transition-[0.4s all]">
                <img src="/images/why5.svg" alt="">
                <div class="flex flex-col items-start gap-3">
                    <h4 class="font-bold text-[20px]"> تحفيز وتشجيع دائم </h4>
                    <p> أطفالنا ليسوا مجرد طلاب، هم أبطال المستقبل</p>
                </div>
            </button>
          </div>
        </div>
       </div>

</template>

<script setup>
const chooseImg = ref(1);

</script>