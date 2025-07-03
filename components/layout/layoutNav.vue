<template >
    <div class="bg-white py-3 shadow-card1 sticky top-[0px] z-50">
        <div class="container z-50 navbar-container flex items-center justify-between">
            <div class="mainLinks flex items-center gap-10 ">
                <nuxt-link :to="localePath('/')" aria-label="home">
                    <NuxtImg format="webp" quality="80" width="130"  class="!h-fit" loading="lazy" src="/images/logo.svg" alt="navbar logo" />
                </nuxt-link>
                 <div class="hidden items-center gap-10 xl:flex lg:flex md:flex">
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/')">
                   {{ $t('home') }}
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/about')">
                   {{ $t('about') }}
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/plans')">
                    {{ $t('plans') }}
                   </nuxt-link>
                   <nuxt-link class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/contact')">
                    {{ $t('contact') }}
                   </nuxt-link>
                   <a v-if="linkTest?.Test_link" :href="linkTest?.Test_link" target="_blank" class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/test')">
                     {{ $t('test') }}
                   </a>
                </div>
            </div>
     
            <div class="flex items-center gap-4">
                <button @click="changeLang()" class="text-orange hidden xl:block lg:block border-orange border py-[9px] px-3 capitalize font-bold rounded-[8px]">
                    {{ locale == 'ar' ? 'en' : 'ar' }} 
                </button>
          
                  <a class="hidden xl:block lg:block md:block"  :href="`tel:${generalData?.whatsapp_number}`">
                       <button class="font-bold bg-orange flex items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                    {{ $t('contact') }}
                  </button>
                    </a>
            </div>
            <button @click="activeNavMobile = !activeNavMobile" class="bar-icon w-[30px] h-[30px] block xl:hidden lg:hidden md:hidden">
                
                <svg v-if="!activeNavMobile" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000" viewBox="0 0 448 512">
                    <path fill="#000" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32
                     32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384
                      0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448
                     416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 
                     32-32l384 0c17.7 0 32 14.3 32 32z"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
            </button>
            <div class="nav-mobile flex items-center xl:hidden lg:hidden md:hidden flex-col justify-center gap-5" :class="{'active': activeNavMobile}">
                <nuxt-link @click="activeNavMobile = false" class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/')">
                    {{ $t('home') }}
                   </nuxt-link>
                   <nuxt-link @click="activeNavMobile = false" class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/about')">
                    {{ $t('about') }}
                </nuxt-link>
                   <nuxt-link @click="activeNavMobile = false" class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/plans')">
                   {{ $t('plans') }}
                   </nuxt-link>
                   <nuxt-link @click="activeNavMobile = false" class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/contact')">
                   {{ $t('contact') }}
                   </nuxt-link>
                   <a v-if="linkTest?.Test_link" @click="activeNavMobile = false" :href="linkTest?.Test_link" target="_blank" class="text-black text-[18px] font-[400] hover:text-orange transition-all" :to="localePath('/test')">
                     {{ $t('test') }}
                   </a>
                <div class="flex items-center gap-4">
                  <button @click="changeLang() , activeNavMobile = false" class="text-orange border-orange border py-[9px] px-3 capitalize font-bold rounded-[8px]">
                  {{ locale == 'ar' ? 'en' : 'ar' }} 
              </button>

                    <a class="mt-3" :href="`tel:${generalData?.whatsapp_number}`">
                       <button class="font-bold bg-orange flex items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]">
                    {{ $t('contact') }}
                  </button>
                    </a>
             
                  
                </div>

                   
            </div>
        </div>
        <div v-if="activeNavMobile" @click="activeNavMobile = false" class="overlay-nav-mobile z-30 fixed top-0 right-0 left-0 w-screen h-screen block xl:hidden lg:hidden md:hidden"></div>
      </div>
   
</template>
<script setup>
import { NuxtImg } from '#components';

 let activeNavMobile = ref(false);
 const localePath = useLocalePath();
 const { locale, setLocale } = useI18n();
 let props = defineProps(["linkTest" , "generalData"]) 


const changeLang = async () => {
  if(process.client){
    const newLang = locale.value === 'en' ? 'ar' : 'en';
  
    // Update locale and store preference in localStorage
    locale.value = newLang;
    localStorage.setItem('preferredLang', newLang);
    setLocale(newLang);
  
    // Update HTML language and direction attributes
    useHead({
      htmlAttrs: {
        lang: newLang,
        dir: newLang === 'ar' ? 'rtl' : 'ltr',
      },
    });
  
    // Redirect to the language-specific route
    const route = useRoute();
    const newPath = localePath({ path: route.path });
    await navigateTo({
      path: newPath,
      query: route.query,
    });

  }
};


</script>
<style lang="">
    
</style>