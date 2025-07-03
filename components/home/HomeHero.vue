<template>
    <div class="hero-section h-fit xl:h-[80vh] lg:h-[80vh] relative w-full bg-[#D8FFA0]">
        <div class="container h-full flex items-center justify-center">
            <div class="grid gap-14 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
                <div data-aos="fade-left"
                    class="flex flex-col  text-center items-center xl:text-start lg:text-start xl:items-start lg:items-start mt-10 xl:mt-0 lg:mt-0 z-20 xl:gap-6 lg:gap-6">
                    <h1 class="xl:text-[40px] lg:text-[40px] text-[28px] text-primary font-bold">
                        {{ herosection.title }}
                    </h1>
                    <p class="text-black mb-5 mt-3 text-[18px] font-[400]">
                        {{ herosection.description }}
                    </p>
                    <a class="mt-3" :href="`tel:${infoData?.whatsapp_number}`">
                        <button
                            class="font-bold bg-orange flex transition-all hover:bg-primary items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                            {{ $t('contact') }}
                        </button>
                    </a>
                </div>
                <NuxtImg format="webp" quality="80" loading="lazy" data-aos="fade-right" :src="herosection.image"
                    class="z-20 w-full" :alt="herosection.title" />
            </div>
        </div>
        <NuxtImg format="webp" loading="lazy" src="/images/backHero.png" class="!w-full !h-full absolute top-2"
            alt="backHero" />
    </div>
</template>

<script setup>
import { NuxtImg } from '#components';

let props = defineProps({
    herosection: {
        default: {
            image: "",
            title: " ",
            description: ""
        }
    },
    infoData: {
        required: false
    }
})
</script>