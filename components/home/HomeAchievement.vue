<template>

    <div v-if="Achievement" class="container why-container mt-[70px] xl:mt-[120px] lg:mt-[120px]">
            <h4 class="mb-8 xl:text-[32px] lg:text-[32px] text-[26px] text-primary font-bold text-center"> {{$t('ach')}} </h4>
             <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:grid-cols-3 md:grid-cols-2">
                <div class="rounded-[8px] px-[8px] py-[16px] bg-[#ECFFD1]">
                    <div class="flex items-center gap-4">
                      <SvgAch1></SvgAch1>
                      <div class="flex flex-col gap-">
                        <p class="text-[#3BB44A] font-bold text-[24px]"> {{Achievement?.lessons}} </p>
                        <span class="text-black text-[20px]"> {{$t('Lessons')}} </span>
                      </div>
                    </div>
                </div>
                <div class="rounded-[8px] px-[8px] py-[16px] bg-[#ECFFD1]">
                    <div class="flex items-center gap-4">
                      <SvgAch2></SvgAch2>
                      <div class="flex flex-col gap-">
                        <p class="text-[#3BB44A] font-bold text-[24px]"> {{Achievement?.puzzles}} </p>
                        <span class="text-black text-[20px]"> {{$t('Puzzles')}} </span>
                      </div>
                    </div>
                </div>
                <div class="rounded-[8px] px-[8px] py-[16px] bg-[#ECFFD1]">
                    <div class="flex items-center gap-4">
                      <SvgAch3></SvgAch3>
                      <div class="flex flex-col gap-">
                        <p class="text-[#3BB44A] font-bold text-[24px]"> {{Achievement?.stars}} </p>
                        <span class="text-black text-[20px]"> {{$t('Stars')}} </span>
                      </div>
                    </div>
                </div>
                <div class="rounded-[8px] px-[8px] py-[16px] bg-[#ECFFD1]">
                    <div class="flex items-center gap-4">
                      <SvgAch4></SvgAch4>
                      <div class="flex flex-col gap-">
                        <p class="text-[#3BB44A] font-bold text-[24px]"> {{Achievement?.online}} </p>
                        <span class="text-black text-[20px]"> {{$t('Online')}} </span>
                      </div>
                    </div>
                </div>
                <div class="rounded-[8px] px-[8px] py-[16px] bg-[#ECFFD1]">
                    <div class="flex items-center gap-4">
                      <SvgAch5></SvgAch5>
                      <div class="flex flex-col gap-">
                        <p class="text-[#3BB44A] font-bold text-[24px]"> {{Achievement?.kids_played}} </p>
                        <span class="text-black text-[20px]"> {{$t('KidsPlayed')}} </span>
                      </div>
                    </div>
                </div>
                <div class="rounded-[8px] px-[8px] py-[16px] bg-[#ECFFD1]">
                    <div class="flex items-center gap-4">
                      <SvgAch6></SvgAch6>
                      <div class="flex flex-col gap-">
                        <p class="text-[#3BB44A] font-bold text-[24px]"> {{Achievement?.games}} </p>
                        <span class="text-black text-[20px]"> {{$t('Games')}} </span>
                      </div>
                    </div>
                </div>
             </div>
           </div>
    
    </template>
    
    <script setup>

    let props = defineProps({
        Achievement:{
           required:true,
        }
    });
    
    </script>