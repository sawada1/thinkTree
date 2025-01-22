<template>
    <div class=" mt-14">
        <div class="container">
        <h1 class="text-primary font-bold xl:text-[32px] lg:text-[32px] text-[24px] text-center mb-10"> {{ $t('about2')
            }} </h1>
            <div class="grid grid-cols-1 gap-[50px] xl:grid-cols-2 lg:grid-cols-2  ">
                <div class="flex  gap-4 ">
                    <div class="relative">
                        <div class="line  bg-[#E1E3E5] w-[4px] h-full rounded-[4px] "></div>
                        <div class="bg-orange absolute w-[4px]  rounded-[4px] top-0" :style="{ height: progressWidth }">
                        </div>
                    </div>
                    <div class="flex flex-col gap-8">
                        <div v-for="item , index in about_us?.TripChild" class="flex  flex-col gap-4">
                            <div @click="toggleTab(index + 1)" class="flex cursor-pointer items-center gap-3">
                                <!-- <SvgAbout1></SvgAbout1> -->
                                 <img :src="item?.icon" class="w-[45px] h-[45px]" alt="">
                                <h4 class="text-orange text-[20px] font-bold"> {{ item?.name }} </h4>
                            </div>
                            <div v-if="activeTabs.includes(index + 1)" data-aos="fade-up"
                                class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                                <p>
                                    {{ item?.description }}
                                </p>
                            </div>
                        </div>
                   
                    </div>
                </div>

                <img src="/images/about.png" alt="">

            </div>
        </div>

        <div class="bg-[#ECFFD1] xl:py-[72px] lg:py-[72px] py-[50px] mt-[100px] mb-">
            <h2 class="text-primary font-bold xl:text-[32px] lg:text-[32px] text-[24px] text-center mb-10"> {{
                $t('about3') }} </h2>
         
            <div class="container">
                <div class="grid xl:grid-cols-3 gap-10 lg:grid-cols-3 grid-cols-1">
                    <div
                    v-for="i in  about_us?.skills"
                        class="bg-white aboutBox px-[16px] pb-[26px] relative text-center pt-[16px] flex flex-col items-center gap-3  rounded-[8px] border-[1px] border-[#E1E3E5]">
                         <img :src="i?.image" class="w-[70px] h-[70px]" alt="">
                        <h5 class="text-black font-bold text-[20px]"> {{ i?.name }} </h5>
                        <p> {{ i?.description }} </p>
                        <div class="arrow bg-orange p-3 absolute rounded-full top-[90%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M8.4647 5.63589H18.3642M18.3642 5.63589V15.5354M18.3642 5.63589L5.63627 18.3638"
                                    stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
        <div class="container mb-[100px] mt-10">
            <h2 class="text-primary font-bold xl:text-[32px] lg:text-[32px] text-[24px] text-center mb-10"> {{
                $t('about4') }} </h2>
                <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-8">
                    <div v-for="i in about_us?.visions" class="min-h-[160px] rounded-lg  flex items-center gap-3 shadow-card1 p-[16px]">
                        <img :src="i?.image" class="w-[60px] h-[60px] rounded-full" alt="">
                        <div class="text flex flex-col gap-3">
                            <h4 class="text-black xl:text-[20px] lg:text-[20px] text-[16px] font-bold"> {{ i?.name }} </h4>
                            <p class="text-black xl:text-[18px] lg:text-[18px] text-[14px] line-clamp-3 hover:line-clamp-none"> {{ i?.description }} </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>
let activeTabs = ref([1]);
let num = ref(10)
const progressWidth = computed(() => {
    return `${Math.round((activeTabs.value.length / 3) * 100)}%`;
});
const progressClass = computed(() => {
    return `before:content-['']  before:h-[${num.value}%]`;
});
const toggleTab = (index) => {
    if (activeTabs.value.includes(index)) {
        activeTabs.value = activeTabs.value.filter((i) => i !== index);
    } else {
        activeTabs.value.push(index);
    }
};

const about_us = ref();
 const getData = async()=>{
    let result  = await useApi().get('about_us');
    if(result.status == 200){
        about_us.value = result.data.data;
    }
 }
 getData();
</script>
<style lang="scss">
.aboutBox {
    transition: 0.4s all;

    &:hover {
        box-shadow: 0px 4px 4px 0px #FFAA01;
        border: 1px solid #FFAA01;

        .arrow {
            svg {
                transform: rotate(45deg);
            }
        }
    }
}
</style>