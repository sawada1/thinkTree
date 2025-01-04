<template >
    <div class="bg-primary py-10">
        <div class="container">
            <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3">
              <div class="flex flex-col items-center mb-5 xl:mb-0 lg:mb-0 xl:items-start lg:items-start text-center xl:text-start lg:text-start gap-5">
                 <img src="/images/logo2.svg" class="w-[105px]" alt="">
                 <p class="text-[18px] text-white">
                    هدفنا يتمثل في تعزيز تطوير شخصية الأطفال بشكل شامل، والعمل على تقوية نقاط ضعفهم وتحويلها إلى مكامن قوة من خلال تقديم تدريب متميز على لعبة الشطرنج.
                 </p>
              </div>
              <div class="links flex items-center mb-5 xl:mb-0 lg:mb-0 flex-col gap-5">
                 <h4 class="text-orange text-[20px] font-bold"> روابط هامة </h4>
                 <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" to="/">
                    الرئيسية
                   </nuxt-link>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" to="/about">
                    من نحن
                   </nuxt-link>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" to="/plans">
                    الباقات
                   </nuxt-link>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" to="/test">
                    اختبار الشخصية
                   </nuxt-link>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" to="/contact">
                    تواصل معنا
                   </nuxt-link>
              </div>
              <div class="links flex items-center flex-col gap-5">
                 <h4 class="text-orange text-[20px] font-bold"> تواصل معنا </h4>
                  <div class="flex items-center gap-3">
                      <SvgPhone></SvgPhone>
                    <span class="text-[#FDFDFD]"> 01099175750 </span>
                  </div>
                  <div class="flex items-center gap-3">
                      <SvgMail></SvgMail>
                    <span class="text-[#FDFDFD]"> thinktree146@gmail.com </span>
                  </div>
                 <h4 class="text-orange text-[20px] font-bold"> النشرة الإخبارية </h4>

                 <div class="input bg-white rounded-[4px] w-[70%] flex items-center justify-between">
                   <input type="text" class="outline-none bg-transparent py-1 px-2" placeholder="ادخل البريد الالكتروني ">
                   <button class="bg-orange py-1 px-2 rounded-e-[4px]">
                    <SvgShare></SvgShare>
                   </button>
                 </div>

                 <div class="flex items-center gap-5">
                    <div class="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-orange rounded-[50%]">
                        <SvgFacebook></SvgFacebook>
                    </div>
                    <div class="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-orange rounded-[50%]">
                        <SvgWhatsapp></SvgWhatsapp>
                    </div>
                    <div class="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-orange rounded-[50%]">
                        <SvgInsta></SvgInsta>
                    </div>
                 </div>

              </div>
            </div>
            <div class="w-full h-[1px] bg-[#FDFDFD] mt-[18px] mb-[18px]"></div>
            <div class="flex items-center justify-center text-[#FDFDFD]">
                Copyright © {{ year }} ThinkTree
            </div>
        </div>
    </div>
</template>
<script setup>
let date = new Date();
let year = date.getFullYear()
</script>
<style lang="">
    
</style>