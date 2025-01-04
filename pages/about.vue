<template>
    <div class="min-h-screen container mt-14">
        <div class="grid grid-cols-1 gap-[50px] xl:grid-cols-2 lg:grid-cols-2  ">
            <div class="flex  gap-4 ">
                <div class="relative">
                    <div class="line  bg-[#E1E3E5] w-[4px] h-full rounded-[4px] "
                    ></div>
                        <div class="bg-orange absolute w-[4px]  rounded-[4px] top-0" :style="{ height: progressWidth }"></div>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="flex  flex-col gap-4">
                        <div @click="toggleTab(1)" class="flex cursor-pointer items-center gap-3">
                            <SvgAbout1></SvgAbout1>
                            <h4 class="text-orange text-[20px] font-bold"> الخطوة الاولي : تحديد مستوي الطفل في الشطرنج
                            </h4>
                        </div>
                        <div v-if="activeTabs.includes(1)" data-aos="fade-up"
                            class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                            <p> هذه الخطوة عبارة عن مجموعة من الاسئلة مع ولي الامر لكي نحدد المستوي المناسب للطفل من
                                المستويات الثلاثة. </p>
                        </div>
                    </div>
                    <div class="flex  flex-col gap-4">
                        <div @click="toggleTab(2)" class="flex cursor-pointer items-center gap-3">
                            <SvgAbout2></SvgAbout2>
                            <h4 class="text-orange text-[20px] font-bold"> الخطوة الثانية: تحديد شخصية الطفل </h4>
                        </div>
                        <div v-if="activeTabs.includes(2)" data-aos="fade-up"
                            class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                            <p> اختبار مبدئي لاكتشاف نقاط القوة والضعف لدى طفلك. الناتج: تقرير بسيط ومفيد يُرسل لك. </p>
                        </div>
                    </div>
                    <div class="flex  flex-col gap-4">
                        <div @click="toggleTab(3)" class="flex cursor-pointer items-center gap-3">
                            <SvgAbout3></SvgAbout3>
                            <h4 class="text-orange text-[20px] font-bold"> الخطوة الثالثة: بدء التدريب </h4>
                        </div>
                        <div v-if="activeTabs.includes(3)" data-aos="fade-up"
                            class="border-[#E1E3E5] border-[1px] p-[8px] rounded-[8px]">
                            <p> نبدأ بالتدريب لتحسين نقاط الضعف التي تم تحديدها. </p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/about.png" alt="">

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
<style lang="">

</style>