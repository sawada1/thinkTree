<template>
  <div class="users-container container mt-[70px]">
            <h2 class="text-center mb-8 text-primary xl:text-[32px] lg:text-[32px] text-[26px] font-bold"> {{ $t('users1') }} </h2>
            <Vue3Marquee duration="25" class="mt-8" dir="ltr" :gradient="true" :gradient-color="[255, 255, 255]"
                gradient-length="30%">
                <div class="grid grid-cols-6  gap-[40px]" :dir=" locale == 'ar' ? 'rtl' : 'ltr' ">
                    <div v-for="item in ourheroes" class="flex flex-col mx-5 w-full " >
                        <NuxtImg :src="item.image" width="600" height="400" format="webp" quality="80" loading="lazy" :alt="item?.name" class="rounded-t-[8px] object-cover w-full h-[140px]"/>
                        <div class="p-[10px] bg-lightGreen rounded-b-[8px]">
                            <div class="flex items-center gap-2">
                                <!-- <SvgEgypt></SvgEgypt> -->
                                 <img class="w-[20px] h-[20px]" :src="item?.city?.full_image_path" alt="">
                                <span class="text-primary font-bold"> {{ item?.name }} </span>
                            </div>
                            <p class="text-black mt-2"> {{ item?.age }} {{ $t('years') }} </p>
                        </div>
                    </div>
                </div>
            </Vue3Marquee>
            <div class="flex items-center justify-center gap-8 mt-10">
                      <a class="mt-3"  :href="`https://wa.me/${infoData?.whatsapp_number}`" target="_blank"> 
                        <button
                            class="font-bold bg-orange flex transition-all hover:bg-primary items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                            {{ $t('contact') }}
                        </button>
                    </a>
             

                <!-- <button
                    class="font-bold border-[1px] border-orange transition-all hover:bg-primary hover:border-primary hover:text-white flex items-center justify-center text-orange w-[140px] py-[10px] rounded-[8px]">
                    {{ $t('more') }}
                </button> -->
            </div>

        </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
let props = defineProps({
    ourheroes:{
       required:true
    },
    infoData:{
        required:true
    }
})
let personArr = ref([
    {
        name: " حسين محمد  ",
        year: 10,
        image: "/images/placeholder/person1.png"
    },
    {
        name: " جاسر غنيم ",
        year: 9,
        image: "/images/placeholder/person2.png"
    },
    {
        name: " أنس محمود ",
        year: 8,
        image: "/images/placeholder/person3.png"
    },
    {
        name: " ابراهيم خالد ",
        year: 11,
        image: "/images/placeholder/person4.png"
    },
    {
        name: " أدهم خالد ",
        year: 12,
        image: "/images/placeholder/person5.png"
    },
    {
        name: " آن هاني ",
        year: 15,
        image: "/images/placeholder/person6.png"
    },
    {
        name: " حسين محمد  ",
        year: 10,
        image: "/images/placeholder/person1.png"
    },
    {
        name: " جاسر غنيم ",
        year: 9,
        image: "/images/placeholder/person2.png"
    },
    {
        name: " أنس محمود ",
        year: 8,
        image: "/images/placeholder/person3.png"
    },
    {
        name: " ابراهيم خالد ",
        year: 11,
        image: "/images/placeholder/person4.png"
    },
    {
        name: " أدهم خالد ",
        year: 12,
        image: "/images/placeholder/person5.png"
    },
    {
        name: " آن هاني ",
        year: 15,
        image: "/images/placeholder/person6.png"
    },
])
</script>