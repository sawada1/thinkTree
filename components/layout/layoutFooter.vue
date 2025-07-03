<template >
    <div class="bg-primary py-10">
        <div class="container">
            <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3">
              <div class="flex flex-col items-center mb-5 xl:mb-0 lg:mb-0 xl:items-start lg:items-start text-center xl:text-start lg:text-start gap-5">
                <nuxt-link :to="localePath('/')">
                  <NuxtImg  format="webp" quality="80" loading="lazy" src="/images/logo2.svg" class="w-[105px]" :alt="generalData?.website_description" />
                </nuxt-link> 
                 <p class="text-[18px] text-white">
                  {{ generalData?.website_description }}
                </p>
              </div>
              <div class="links flex items-center mb-5 xl:mb-0 lg:mb-0 flex-col gap-5">
                 <h4 class="text-orange text-[20px] font-bold"> {{ $t('importantLink') }}</h4>
                 <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" :to="localePath('/')">
                     {{ $t('home') }}
                   </nuxt-link>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" :to="localePath('/about')">
                    {{ $t('about') }}
                  </nuxt-link>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" :to="localePath('/plans')">
                    {{ $t('plans') }}
                   </nuxt-link>
                   <a v-if="linkTest?.Test_link" :href="linkTest?.Test_link" target="_blank" class="text-white text-[16px] font-[400] hover:text-orange transition-all" :to="localePath('/test')">
                    {{ $t('test') }}
                   </a>
                   <nuxt-link class="text-white text-[16px] font-[400] hover:text-orange transition-all" :to="localePath('/contact')">
                  {{ $t('contact') }}
                   </nuxt-link>
              </div>
              <div class="links flex items-center flex-col gap-5">
                 <h4 class="text-orange text-[20px] font-bold"> {{ $t('contact') }}</h4>
                  <div class="flex items-center gap-3">
                      <SvgPhone></SvgPhone>
                      <a :href="`tel:${generalData?.whatsapp_number}`">
                        <span class="text-[#FDFDFD]"> {{ generalData?.whatsapp_number }} </span>
                      </a>
                    </div>
                    <div class="flex items-center gap-3">
                      <SvgMail></SvgMail>
                      <a :href="`mailto:${generalData?.email}`">
                        <span class="text-[#FDFDFD]"> {{ generalData?.email }} </span>
                      </a>
                  </div>
                 <h4 class="text-orange text-[20px] font-bold"> {{ $t('sub') }} </h4>

                 <div class="input bg-white rounded-[4px] xl:w-[80%] lg:w-[80%] flex items-center justify-between">
                   <input type="text" v-model="email" @keypress.enter="getNewsLetter()" class="outline-none bg-transparent py-1 px-2" :placeholder="$t('enterMail')">
                   <button @click="getNewsLetter()" class="send-icon bg-orange py-1 px-2 rounded-e-[4px]">
                    <SvgShare></SvgShare>
                   </button>
                 </div>
                 <span class="text-red" v-if="errorMsg?.email"> {{ errorMsg?.email[0] }} </span>

                 <div class="flex items-center gap-5">
                    <div v-if="generalData?.facebook_link" class="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-orange rounded-[50%]">
                      <a aria-label="Facebook" :href="generalData?.facebook_link" target="_blank">

                        <SvgFacebook></SvgFacebook>
                      </a>
                    </div>
                    <div v-if="generalData?.sms_number" class="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-orange rounded-[50%]">
                      
                      <a aria-label="Whatsapp" :href="`https://wa.me/${generalData?.whatsapp_number}`" target="_blank">
                        <SvgWhatsapp></SvgWhatsapp>
                      </a>
                    </div>
                    <div v-if="generalData?.instagram_link" class="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-orange rounded-[50%]">
                      <a aria-label="Insta" :href="generalData?.instagram_link" target="_blank">
                        <SvgInsta></SvgInsta>
                      </a>
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
import { useToast } from "primevue/usetoast";
// import "mosha-vue-toastify/dist/style.css";
const toast = useToast();

let date = new Date();
let year = date.getFullYear();
const localePath = useLocalePath();
const { locale, setLocale , t } = useI18n();
let props = defineProps(["linkTest" , "generalData"]) 
let email = ref('');
let errorMsg = ref();
let pending = ref(false);
const getNewsLetter = async()=>{
  if(email.value != ""){
    pending.value = true;
    try{
      let result = await useApi().post('news-letter',{
        email: email.value
      });
      if(result.status == 200){
        pending.value = true;
        errorMsg.value = undefined;
        email.value = '';
        toast.add({ severity: 'success', summary: t('success'), detail: '', life: 5000 });
        // const moshaToastify = await import("mosha-vue-toastify");
        // const { createToast } = moshaToastify;
        // createToast(
        //     locale.value == "ar"
        //       ? "تم التواصل بنجاح "
        //       : "Communication was successful",
        //     {
        //       toastBackgroundColor: "#256D20",
        //       position: "top-right",
        //       type: "success",
        //       transition: "bounce",
        //       showIcon: "true",
        //       timeout: 4000,
        //     }
        //   );
      }
    } catch(error){
      errorMsg.value = error.response?.data?.errors
    }

  }
}

 watch(()=> locale.value , (val)=>{
  if(val){
    // getData();
  }
 })

</script>
<style lang="">
    
</style>