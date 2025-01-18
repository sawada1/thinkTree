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
                    <div class="flex flex-col gap-3">
                        <div class="flex  flex-col gap-4">
                            <div @click="toggleTab(1)" class="flex cursor-pointer items-center gap-3">
                                <SvgAbout1></SvgAbout1>
                                <h4 class="text-orange text-[20px] font-bold"> {{ $t('step1') }} </h4>
                            </div>
                            <div v-if="activeTabs.includes(1)" data-aos="fade-up"
                                class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                                <p>
                                    {{ $t('desc1') }}
                                </p>
                            </div>
                        </div>
                        <div class="flex  flex-col gap-4">
                            <div @click="toggleTab(2)" class="flex cursor-pointer items-center gap-3">
                                <SvgAbout2></SvgAbout2>
                                <h4 class="text-orange text-[20px] font-bold"> {{ $t('step2') }}</h4>
                            </div>
                            <div v-if="activeTabs.includes(2)" data-aos="fade-up"
                                class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                                <p> {{ $t('desc2') }} </p>
                            </div>
                        </div>
                        <div class="flex  flex-col gap-4">
                            <div @click="toggleTab(3)" class="flex cursor-pointer items-center gap-3">
                                <SvgAbout3></SvgAbout3>
                                <h4 class="text-orange text-[20px] font-bold"> {{ $t('step3') }} </h4>
                            </div>
                            <div v-if="activeTabs.includes(3)" data-aos="fade-up"
                                class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                                <p> {{ $t('desc3') }} </p>
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
                        class="bg-white aboutBox px-[16px] pb-[26px] relative text-center pt-[16px] flex flex-col items-center gap-3  rounded-[8px] border-[1px] border-[#E1E3E5]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                            <g clip-path="url(#clip0_448_1720)">
                                <path
                                    d="M40.5 35C43.2667 35 45.5 37.2333 45.5 40C45.5 42.7667 43.2667 45 40.5 45C37.7333 45 35.5 42.7667 35.5 40C35.5 37.2333 37.7333 35 40.5 35ZM47.3 51.4C45.3 52.6 43 53.3333 40.5 53.3333C33.1333 53.3333 27.1667 47.3667 27.1667 40C27.1667 32.6333 33.1333 26.6667 40.5 26.6667C46.8333 26.6667 52.1333 31.1 53.4667 37.0333C56.0667 34.9333 59.3 33.6333 62.8667 33.4333C60.0333 23.7667 51.0667 16.6667 40.5 16.6667C27.6333 16.6667 17.1667 27.1333 17.1667 40C17.1667 52.8667 27.6333 63.3333 40.5 63.3333C41.7667 63.3333 42.9667 63.2 44.1667 63C45.6333 61.1667 47.4667 59.6333 49.6 58.5333C48.3 56.4 47.5333 53.9667 47.3 51.3667V51.4ZM68.8333 0H12.1667C5.73333 0 0.5 5.23333 0.5 11.6667V80H40.5V73.3333C40.5 72.2 40.6333 71.0667 40.8333 70H10.5V11.6667C10.5 10.7333 11.2333 10 12.1667 10H68.8333C69.7667 10 70.5 10.7333 70.5 11.6667V34.7333C76.3667 37.3 80.5 43.1667 80.5 50V11.6667C80.5 5.23333 75.2667 0 68.8333 0ZM70.5 63.3333H57.1667C51.6667 63.3333 47.1667 67.8333 47.1667 73.3333V80H80.5V73.3333C80.5 67.8333 76 63.3333 70.5 63.3333ZM63.8333 60C69.3333 60 73.8333 55.5 73.8333 50C73.8333 44.5 69.3333 40 63.8333 40C58.3333 40 53.8333 44.5 53.8333 50C53.8333 55.5 58.3333 60 63.8333 60Z"
                                    fill="#256D20" />
                            </g>
                            <defs>
                                <clipPath id="clip0_448_1720">
                                    <rect width="80" height="80" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h5 class="text-black font-bold text-[20px]"> حل المشكلات</h5>
                        <p> يركز تدريب الشطرنج على التركيز والمهارات التفكيرية النقدية </p>
                        <div class="arrow bg-orange p-3 absolute rounded-full top-[90%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M8.4647 5.63589H18.3642M18.3642 5.63589V15.5354M18.3642 5.63589L5.63627 18.3638"
                                    stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div
                        class="bg-white aboutBox px-[16px] pb-[26px] relative text-center pt-[16px] flex flex-col items-center gap-3  rounded-[8px] border-[1px] border-[#E1E3E5]">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="80" viewBox="0 0 61 80"
                                fill="none">
                                <path
                                    d="M50.48 7.62002C44.1166 1.93335 35.5566 -0.766646 27.02 0.196687C13.5166 1.72335 2.46995 12.6067 0.749955 26.0734C-0.496712 35.8467 2.89662 45.2734 10.0566 51.94C14.6433 56.2034 17.1666 61.6134 17.1666 67.1667V68.1334C17.1666 74.7867 22.29 80 28.8333 80H32.1666C38.6 80 43.8333 74.7667 43.8333 68.3334V65.87C43.8333 60.9167 46.1233 56.1834 50.2766 52.5434C56.7733 46.8467 60.5 38.63 60.5 30C60.5 21.4667 56.8466 13.31 50.48 7.62002ZM32.1666 73.3334H28.8333C26.03 73.3334 23.8333 71.05 23.8333 68.1334V67.1667C23.8333 67 23.81 66.8334 23.8066 66.6667H37.1666V68.3334C37.1666 71.09 34.9233 73.3334 32.1666 73.3334ZM45.88 47.53C41.9566 50.9667 39.25 55.33 37.9866 60H22.76C21.3566 55.2334 18.6 50.7834 14.6 47.0634C9.02995 41.8767 6.38995 34.5367 7.36329 26.92C8.69662 16.4634 17.28 8.01002 27.7666 6.82335C28.6933 6.72002 29.6133 6.66669 30.5266 6.66669C36.2766 6.66669 41.7033 8.72335 46.0333 12.5934C50.9866 17.02 53.83 23.3634 53.83 30C53.83 36.71 50.9366 43.1 45.88 47.53ZM43.8333 25V27.9034C41.84 27.4467 39.2733 27 38.5 27C35.9233 27 33.8333 29.09 33.8333 31.6667C33.8333 34.2434 35.9233 36.3334 38.5 36.3334C39.2733 36.3334 41.84 35.8867 43.8333 35.43V38.3334C43.8333 41.0934 41.5933 43.3334 38.8333 43.3334H25.5C22.74 43.3334 20.5 41.0934 20.5 38.3334V36.1634C19.1633 36.48 17.9433 36.6667 17.1666 36.6667C14.4066 36.6667 12.1666 34.4267 12.1666 31.6667C12.1666 28.9067 14.4066 26.6667 17.1666 26.6667C17.9433 26.6667 19.1633 26.8534 20.5 27.17V25C20.5 22.24 22.74 20 25.5 20H27.7366C27.4333 18.6967 27.2533 17.5134 27.2533 16.7534C27.2533 13.9934 29.4933 11.7534 32.2533 11.7534C35.0133 11.7534 37.2533 13.9934 37.2533 16.7534C37.2533 17.5134 37.0733 18.6967 36.7666 20H38.8333C41.5933 20 43.8333 22.24 43.8333 25Z"
                                    fill="#256D20" />
                            </svg>
                    
                        <h5 class="text-black font-bold text-[20px]"> الثقة بالنفس </h5>
                        <p> نبني ثقة طفلك بنفسه وزيادة إيمانه بقدراته </p>
                        <div class="arrow bg-orange p-3 absolute rounded-full top-[90%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M8.4647 5.63589H18.3642M18.3642 5.63589V15.5354M18.3642 5.63589L5.63627 18.3638"
                                    stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div
                        class="bg-white aboutBox px-[16px] pb-[26px] relative text-center pt-[16px] flex flex-col items-center gap-3  rounded-[8px] border-[1px] border-[#E1E3E5]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
                            <g clip-path="url(#clip0_448_2632)">
                                <path
                                    d="M40.4999 36.6669C45.1032 36.6669 48.8332 40.3969 48.8332 45.0002C48.8332 49.6036 45.1032 53.3336 40.4999 53.3336C35.8966 53.3336 32.1666 49.6036 32.1666 45.0002C32.1666 40.3969 35.8966 36.6669 40.4999 36.6669ZM74.4299 42.4502L69.9066 37.5503L49.1999 56.6669H31.8032L11.0966 37.5503L6.57324 42.4502L27.1699 61.4603V80.0003H33.8366V63.3336H47.1699V80.0003H53.8366V61.4603L74.4299 42.4502ZM23.8332 10.6202C23.8332 4.81025 28.3199 0.0869141 33.8332 0.0869141C36.4399 0.0869141 38.7566 0.986914 40.4999 2.51025C42.2432 0.986914 44.5599 0.0869141 47.1666 0.0869141C52.6799 0.0869141 57.1666 4.81025 57.1666 10.6202C57.1666 19.7169 43.8266 28.5769 42.3066 29.5569L40.4999 30.7236L38.6932 29.5569C37.1732 28.5769 23.8332 19.7169 23.8332 10.6202ZM30.4999 10.6202C30.4999 14.0869 35.8666 19.3436 40.4999 22.7102C45.1332 19.3436 50.4999 14.0869 50.4999 10.6202C50.4999 8.48691 49.0066 6.75358 47.1666 6.75358C45.5066 6.75358 43.8332 7.78358 43.8332 10.0869H37.1666C37.1666 7.78358 35.4932 6.75358 33.8332 6.75358C31.9932 6.75358 30.4999 8.48691 30.4999 10.6202Z"
                                    fill="#256D20" />
                            </g>
                            <defs>
                                <clipPath id="clip0_448_2632">
                                    <rect width="80" height="80" fill="white" transform="translate(0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h5 class="text-black font-bold text-[20px]"> التركيز والانتباه </h5>
                        <p> نساعد طفلك على تحسين قدرته على التركيز والتقليل من التشتت </p>
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
        <div class="container">

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