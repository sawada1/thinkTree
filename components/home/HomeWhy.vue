<template>

<div class="container why-container mt-[70px] xl:mt-[120px] lg:mt-[120px]">
        <h4 class="mb-8 xl:text-[32px] lg:text-[32px] text-[26px] text-primary font-bold text-center"> {{ $t('why') }} ThinkTree ؟ </h4>
        
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:grid-cols-2">
            <div data-aos="fade-up" data-aos-duration="800" class="order-1">
                <NuxtImg width="600" height="400" format="webp" quality="80" loading="lazy"   :src="chooseImgSrc" alt="why choose us" />
                <!-- <img v-if="chooseImg == 2" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack2.png" alt="">
                <img v-if="chooseImg == 3" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack3.png" alt="">
                <img v-if="chooseImg == 4" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack4.png" alt="">
                <img v-if="chooseImg == 5" data-aos="fade-up" data-aos-duration="800" src="/images/whyBack5.png" alt=""> -->

            </div>
          <div class="tabs xl:order-2 lg:order-2 flex flex-col gap-5">
            <button v-for="i, index in whythinktree" @click="chooseImg = index + 1 , chooseImgSrc = i?.image" :class="{'bg-lightGreen shadow-card1': chooseImg == index + 1}"  class="rounded-[8px] border-[#E1E3E5] border-[1px] p-[16px] flex items-center gap-3 bg-[#FDFDFD] hover:bg-lightGreen hover:shadow-card1 transition-[0.4s all]">
                <img :src="i?.icon" class="w-[50px] h-[50px]" alt="">
                <div class="flex flex-col xl:text-start lg:text-start text-center gap-3">
                    <h4 class="font-bold text-[20px]"> {{i?.name}} </h4>
                    <p class="xl:text-start lg:text-start text-center"> {{i?.description}} </p>
                </div>
            </button>
          </div>
        </div>
       </div>

</template>

<script setup>
const chooseImg = ref(1);
const chooseImgSrc = ref('');
let props = defineProps({
    whythinktree:{
       required:true,
       type: Array
    }
});

watch(()=> props.whythinktree , (val)=>{
    if(val){
        chooseImgSrc.value =  val[0]?.image;
    
    }
})

</script>