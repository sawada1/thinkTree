<template >
    <div class="bg-white py-3 shadow-card1">
        <div class="container z-50 navbar-container flex items-center justify-between">
            <div class="mainLinks flex items-center gap-10 ">
                <nuxt-link to="/">
                    <img src="/images/logo.svg" alt="">
                </nuxt-link>
                 <div class="hidden items-center gap-10 xl:flex lg:flex md:flex">
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/">
                    الرئيسية
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/about">
                    من نحن
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/plans">
                    الباقات
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/test">
                    اختبار الشخصية
                   </nuxt-link>
                 </div>
            </div>
            <nuxt-link class="hidden xl:block lg:block md:block" to="/contact">
                <button class="font-bold bg-orange flex items-center transition-all hover:bg-primary justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                    تواصل معنا
                </button>
            </nuxt-link>
            <button @click="activeNavMobile = !activeNavMobile" class=" w-[30px] h-[30px] block xl:hidden lg:hidden md:hidden">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 448 512">
                    <path fill="#000" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32
                     32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384
                      0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448
                     416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 
                     32-32l384 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
            </button>
            <div class="nav-mobile flex items-center xl:hidden lg:hidden md:hidden flex-col justify-center gap-5" :class="{'active': activeNavMobile}">
                <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/">
                    الرئيسية
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/about">
                    من نحن
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/plans">
                    الباقات
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" to="/test">
                    اختبار الشخصية
                   </nuxt-link>
                   <nuxt-link to="/contact">
                <button class="font-bold bg-orange flex items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                    تواصل معنا
                </button>
            </nuxt-link>
                   
            </div>
        </div>
        <div v-if="activeNavMobile" @click="activeNavMobile = false" class="overlay-nav-mobile z-30 fixed top-0 right-0 left-0 w-screen h-screen block xl:hidden lg:hidden md:hidden"></div>
    </div>
</template>
<script setup>
 let activeNavMobile = ref(false);
</script>
<style lang="">
    
</style>