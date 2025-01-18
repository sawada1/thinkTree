<template>
      <div class="container">
            <h3 class="mb-8 xl:text-[32px] lg:text-[32px] text-[24px] text-primary font-bold text-center"> {{ $t('plansTitle') }} 
            </h3>
            <div class="plans-container gap-8 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3">
                <div
                v-for="item in Packages"
                data-aos="fade-up" data-aos-duration="500"
                    class="box relative transition-[0.4s] hover:shadow-card2 hover:border-orange h-[842px] bg-[#FDFDFD] justify-between rounded-[8px] border-[1px] border-[#E1E3E5] p-[16px] flex flex-col">
                    <div>
                        <div class="flex flex-col items-center">
                            <!-- <SvgStep1></SvgStep1> -->
                             <img :src="item?.icon" class="w-11 h-11" alt="">
                            <span class="block text-[18px] text-dark font-bold my-[8px]"> {{ item?.name }} </span>
                        </div>
                        <div class="price flex flex-col items-center gap-[8px]">
                            <div class="flex items-center gap-4">
                                <h4 class="font-bold text-primary text-[28px]"> {{ item?.price }} {{ $t('pound1') }}</h4>
                                <span class="text-red text-[14px] line-through"> {{ item?.old_price }} {{ $t('pound2') }} </span>
                            </div>
                            <span> {{ item?.price_per_session }} {{ $t('pound1') }} / {{ $t('session') }} </span>
                            <div class="bg-lightGreen px-[16px] py-1 text-primary rounded-[8px]"> {{ item?.duration_monthelly }} {{ $t('month') }} -  {{ item?.number_of_session_per_week }} {{ $t('weekSession') }}
                            </div>
                            <span class="font-bold"> {{ item?.number_of_levels }} {{ $t('level') }}  - {{ item?.number_of_sessions }} {{ $t('sessions') }} </span>
                        </div>
                        <div class="bg-[#E1E3E5] w-full h-[2px] my-[8px]"></div>
                        <p class="text-black text-[18px] text-center">
                         {{ item?.description }}
                        </p>
                        <div class="bg-[#E1E3E5] w-full h-[2px] my-[8px]"></div>
                        <h6 class="text-primary font-bold"> {{ $t('whatGet') }} : </h6>
                        <div class="flex flex-col gap-[8px] mt-[8px]">
                            <div v-for="i in item?.outcomes" class="flex items-center gap-3">
                                <img :src="i?.full_image_path" class="w-5 h-5" alt="">
                                <span>  {{ i?.name }}  </span>
                            </div>
                     
                        </div>
                        <div class="bg-[#E1E3E5] w-full h-[2px] my-[8px]"></div>
                        <h6 class="text-primary font-bold"> {{ $t('features') }} : </h6>
                        <div class="flex flex-col gap-[8px] mt-[8px]">
                            <div v-for="i in item?.features" class="flex items-center gap-3">
                                <img :src="i?.full_image_path" class="w-5 h-5" alt="">
                                <span>  {{ i?.name }}  </span>    
                            </div>
                         
                        </div>
                    </div>
                    <div class="best bg-[#3BB44A] text-white px-3 py-1 rounded-r-[4px] absolute top-[55px] left-0"> {{ $t('best') }} </div>
                    <nuxt-link :to="localePath({ path: '/order', query:{id: item.id} })" >
                        <button class="w-full py-[10px] flex items-center justify-center rounded-[4px] bg-orange text-white font-bold"> {{ $t('subscribe') }} </button>
                
                    </nuxt-link>
                </div>
      
            </div>
        </div>
</template>

<script setup>
 const localePath = useLocalePath();

let props = defineProps({
    Packages:{
       required:true
    }
})
</script>