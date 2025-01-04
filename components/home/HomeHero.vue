<template>
     <div class="hero-section h-fit xl:h-[80vh] lg:h-[80vh] relative w-full bg-[#D8FFA0]">
            <div class="container h-full flex items-center justify-center">
                <div class="grid gap-14 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
                    <div class="flex flex-col  text-center items-center xl:text-start lg:text-start xl:items-start lg:items-start mt-10 xl:mt-0 lg:mt-0 z-20 gap-6">
                        <h1 class="text-[40px] text-primary font-bold"> خطوة بخطوة على رقعة الشطرنج.... نحو مستقبل أكثر
                            ذكاءً </h1>
                        <p class="text-black mb-5 mt-3 text-[18px] font-[400]">
                            نحن نؤمن أن داخل كل طفل بطل ينتظر أن يظهر، والشطرنج هو المفتاح!نحو عالم ممتع ومبتكر، نساعد
                            ابنك على تطوير التفكير الاستراتيجي، بناء ثقته بنفسه، واكتساب مهارات تدوم مدى الحياة.
                        </p>
                        <p class="text-black text-[18px] font-[400]">
                            لا تفوت فرصة تحويل اللعب إلى أداة لتطوير شخصيته... اجعل ابنك يبدأ رحلته معنا اليوم
                        </p>
                        <nuxt-link class="mt-4" to="/contact">
                            <button
                                class="font-bold bg-orange flex transition-all hover:bg-primary items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                                تواصل معنا
                            </button>
                        </nuxt-link>
                    </div>
                    <img src="/images/heroMain.png" class="z-20" alt="">
                </div>
            </div>
            <img src="/images/backHero.png" class="w-full h-full absolute top-2" alt="">
        </div>
</template>

<script setup>

</script>