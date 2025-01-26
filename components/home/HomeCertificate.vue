<template>
      <div data-aos="fade-up" class="container mt-[70px]">
            <div class="flex flex-col items-center justify-center gap-5">
                <h6 class="text-primary text-center xl:text-[32px] lg:text-[32px] text-[26px] font-bold"> {{ $t('certificate1') }} </h6>
                <NuxtImg  format="webp" quality="80" loading="lazy"  :src="Certificate_Image" class="w-full xl:h-[560px] xl:w-[841px] lg:w-[841px] lg:h-[560px] border-[4px] border-primary h-[300px] rounded-[24px]" alt="Certificate Image"/>
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