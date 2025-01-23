<template>
      <div data-aos="fade-up" class="container mt-[70px]">
            <div class="flex flex-col items-center justify-center gap-5">
                <h3 class="text-primary text-center xl:text-[32px] lg:text-[32px] text-[26px] font-bold"> {{ $t('certificate1') }} </h3>
                <img :src="Certificate_Image" class="w-full xl:h-[540px] lg:h-[540px] border-[4px] border-primary h-[300px] rounded-[24px]" alt="">
            </div>
        </div>
</template>

<script setup>
let props = defineProps({
    Certificate_Image:{
        default:"/images/certificate.png"
    }
})
</script>