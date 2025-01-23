<template>
    <div class="container mt-10 mb-10">
        <div v-if="currentStep == '4'" class="flex flex-col gap-5 items-center justify-center">
            <img src="/images/thank.png" alt="">
            <h1 class="text-primary text-center xl:text-[32px] lg:text-[32px] text-[24px] mb-10 font-bold"> {{ $t('thank') }} </h1>
            <nuxt-link class="font-bold bg-orange flex items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]" :to="localePath('/')"> {{ $t('home') }} </nuxt-link>

        </div>
        <div v-else>
            <h1 class="text-primary text-center xl:text-[32px] lg:text-[32px] text-[24px] mb-10 font-bold"> {{ $t('plans2') }} </h1>
    
            <div class="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-10  ">
                <div class="">
                    <div class="card flex justify-center">
                        <Stepper v-model:value="currentStep" class="basis-[50rem]">
                            <StepList>
                                <Step value="1"> {{ $t('data') }} </Step>
                                <Step value="2"> {{ $t('confirm') }} </Step>
                                <Step value="3"> {{ $t('pickData') }} </Step>
                            </StepList>
                            <StepPanels>
                                <StepPanel v-slot="{ activateCallback }" value="1">
                                    <div
                                        class="form-container flex flex-col gap-5 border-[#E1E3E5] border-[1px] p-[16px] rounded-[8px]">
                                        <div class="input flex flex-col gap-3">
                                            <label class="text-black" for="">
                                                {{ $t('name1') }} <span class="text-red"> * </span>
                                            </label>
                                            <input v-model="name" type="text"
                                                class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name=""
                                                id="">
                                                <div class="text-red"> {{ errors.name }} </div>
                                                <div class="text-red" v-if="errorData?.name"> {{ errorData?.name[0] }} </div>
                                        </div>
                                        <div class="input flex flex-col gap-3">
                                            <label class="text-black" for="">
                                                {{ $t('email') }} <span class="text-red"> * </span>
                                            </label>
                                            <input v-model="email" type="email"
                                                class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name=""
                                                id="">
                                                <div class="text-red"> {{ errors.email }} </div>
                                                <div class="text-red" v-if="errorData?.email"> {{ errorData?.email[0] }} </div>

                                        </div>
                                        <div class="input flex flex-col gap-3">
                                            <label class="text-black" for="">
                                               {{ $t('phone2') }} <span class="text-red"> * </span>
                                            </label>
                                            <input v-model="phone" type="text"
                                                class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name=""
                                                id="">
                                                <div class="text-red"> {{ errors.phone }} </div>
                                                <div class="text-red" v-if="errorData?.phone"> {{ errorData?.phone[0] }} </div>

                                        </div>
                                        <div class="input flex flex-col gap-3">
                                            <label class="text-black" for="">
                                              {{ $t('name2') }}  <span class="text-red"> * </span>
                                            </label>
                                            <input v-model="child_name" type="text"
                                                class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name=""
                                                id="">
                                                <div class="text-red"> {{ errors.child_name }} </div>
                                                <div class="text-red" v-if="errorData?.child_name"> {{ errorData?.child_name[0] }} </div>

    
                                        </div>
                                        <div class="input flex flex-col gap-3">
                                            <label class="text-black" for="">
                                                {{ $t('date1') }} <span class="text-red"> * </span>
                                            </label>
                                            <input v-model="birth_date_of_child" type="date"
                                                class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name=""
                                                id="">
                                                <div class="text-red"> {{ errors.birth_date_of_child }} </div>
                                                <div class="text-red" v-if="errorData?.birth_date_of_child"> {{ errorData?.birth_date_of_child[0] }} </div>

    
                                        </div>
                                        <!-- @click="activateCallback('2')" -->
                                        <button
                                        :disabled="pending1"
                                        @click="onSubmit(activateCallback)"
                                            class="bg-orange w-full py-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold flex items-center rounded-[4px]">
                                            {{ $t('send') }} </button>
                                    </div>
                                    <!-- <div class="flex pt-6 justify-end">
                                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right"
                                            @click="activateCallback('2')" />
                                    </div> -->
                                </StepPanel>
                                <StepPanel v-slot="{ activateCallback }" value="2">
                                    <div class="p-[16px] flex flex-col  border-[1px] border-[#E1E3E5] rounded-[8px]">
                                        <h2 class="text-primary font-bold mb-5 text-center"> {{ $t('enterOtp') }} OTP {{ $t('subOn') }} 20100000000000+ {{ $t('or') }} testtest@gmail.com </h2>
                                        <div class="flex items-center justify-center">
                                            <InputOtp v-model="otp" size="large" />
                                        </div>
                                        <div class="flex items-center gap-2 mt-5 mb-5">
                                            <p class="text-[18px] text-[#8E8E8E]"> {{ $t('not1') }} OTP؟  </p>
                                            <button class="text-orange underline font-bold text-[18px]"> {{ $t('resend') }} OTP </button>
                                        </div>
                                        <div class="flex items-center mb-10 gap-2">
                                            <p  class="text-[18px] text-[#8E8E8E]"> {{ $t('error1') }} </p>
                                            <button  @click="activateCallback('1')" class="text-orange underline font-bold text-[18px]"> {{ $t('edit') }} </button>
                                        </div>
                                        <button
                                        :disabled="pending2"
                                        @click="step2()"
                                            class="bg-orange w-full py-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold flex items-center rounded-[4px]">
                                            {{ $t('confirm2') }} </button>
                                    </div>
                                    <!-- <div class="flex pt-6 justify-between">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left"
                                            @click="activateCallback('1')" />
                                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right"
                                            @click="activateCallback('3')" />
                                    </div> -->
                                </StepPanel>
                                <StepPanel v-slot="{ activateCallback }" value="3">
                                 <div class="p-[16px] flex flex-col  border-[1px] border-[#E1E3E5] rounded-[8px]">
                                     <div class="flex items-center justify-center gap-5 flex-col">
                                        <div class="head flex items-center gap-10">
                                            <span class="text-[#8E8E8E]"> {{ $t('pickDay') }} </span>
                                            <!-- <p class="text-[#242826]"> الأثنين 13 يناير 2025  </p> -->
                                        </div>
                                        <div class="dates xl:w-[500px] lg:w-[450px] w-[300px] rounded-[8px] flex items-center justify-center bg-[#F1D8C9] border-[1px] border-[#E1E3E5] h-[180px]">
                                           <div class="items-date-container flex items-center gap-3 overflow-x-auto pb-5">
                                             <button v-for="i in planData?.groups" @click="group_id = i?.id , day_id = i?.day?.id , getTimes(i?.day?.date)" class="flex flex-col gap-2 py-[8px] px-5 rounded-[8px] transition-all hover:bg-orange hover:text-white bg-white items-center text-orange">
                                                 <span> {{ i?.day?.name }} </span>
                                                 <span> {{ returnDate(i?.day?.date).day }} </span>
                                                 <span> {{ returnDate(i?.day?.date).month }} </span>
                                             </button>
                                           </div>
                                        </div>
                                        <div class="text-red" v-if="errorData?.group_id"> {{ errorData?.group_id[0] }} </div>
                                        <div class="text-red" v-if="errorData?.day_id"> {{ errorData?.day_id[0] }} </div>
                                        <div class="times-slot flex items-center flex-wrap gap-5">
                                          <button v-for="i , index in timesData" @click="time = i?.id" :class="{'text-white bg-orange': time == i?.id}" class="xl:px-[16px] xl:py-[8px] lg:px-[16px] lg:py-[8px] px-[8px] py-[6px] border-[1px] border-orange rounded-[8px]"> {{ i?.duration }} </button>
                                        </div>
                                        <div class="text-red" v-if="errorData?.time_id"> {{ errorData?.time_id[0] }} </div>
    
                                        <div class="flex flex-col items-center gap-4 w-full">
                                            <button @click="Choose_duration_later = 1 , step3()" class="text-[18px] text-orange font-bold"> {{ $t('pickDate2') }} </button>
                                            <button
                                            :disabled="pending3"
                                            @click="Choose_duration_later = 0 , step3()"
                                            class="bg-orange w-full py-2 disabled:opacity-50 disabled:cursor-not-allowed justify-center text-white font-bold flex items-center rounded-[4px]">
                                            {{ $t('book') }} </button>
                                        </div>

    
                                    </div>
                                 </div>
                                    <div class="pt-6">
                                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left"
                                            @click="activateCallback('2')" />
                                    </div>
                                </StepPanel>
                            </StepPanels>
                        </Stepper>
                    </div>
    
                </div>
                <div
                 v-if="planData"
                data-aos="fade-up" data-aos-duration="500"
                    class="box relative transition-[0.4s] hover:shadow-card2 hover:border-orange bg-[#FDFDFD] justify-between rounded-[8px] border-[1px] border-[#E1E3E5] p-[16px] flex flex-col">
                    <div>
                        <div class="flex flex-col items-center">
                            <!-- <SvgStep1></SvgStep1> -->
                             <img :src="planData?.icon" class="w-11 h-11" alt="">
                            <span class="block text-[18px] text-dark font-bold my-[8px]"> {{ planData?.name }} </span>
                        </div>
                        <div class="price flex flex-col items-center gap-[8px]">
                            <div class="flex items-center gap-4">
                                <h4 class="font-bold text-primary text-[28px]"> {{ planData?.price }} {{ $t('pound1') }}</h4>
                                <span class="text-red text-[14px] line-through"> {{ planData?.old_price }} {{ $t('pound2') }} </span>
                            </div>
                            <span> {{ planData?.price_per_session }} {{ $t('pound1') }} / {{ $t('session') }} </span>
                            <div class="bg-lightGreen px-[16px] py-1 text-primary rounded-[8px]"> {{ planData?.duration_monthelly }} {{ $t('month') }} -  {{ planData?.number_of_session_per_week }} {{ $t('weekSession') }}
                            </div>
                            <span class="font-bold"> {{ planData?.number_of_levels }} {{ $t('level') }}  - {{ planData?.number_of_sessions }} {{ $t('sessions') }} </span>
                        </div>
                        <div class="bg-[#E1E3E5] w-full h-[2px] my-[8px]"></div>
                        <p class="text-black text-[18px] text-center">
                         {{ planData?.description }}
                        </p>
                        <div class="bg-[#E1E3E5] w-full h-[2px] my-[8px]"></div>
                        <h6 class="text-primary font-bold"> {{ $t('whatGet') }} : </h6>
                        <div class="flex flex-col gap-[8px] mt-[8px]">
                            <div v-for="i in planData?.outcomes" class="flex items-center gap-3">
                                <img :src="i?.full_image_path" class="w-5 h-5" alt="">
                                <span>  {{ i?.name }}  </span>
                            </div>
                     
                        </div>
                        <div class="bg-[#E1E3E5] w-full h-[2px] my-[8px]"></div>
                        <h6 class="text-primary font-bold"> {{ $t('features') }} : </h6>
                        <div class="flex flex-col gap-[8px] mt-[8px]">
                            <div v-for="i in planData?.features" class="flex items-center gap-3">
                                <img :src="i?.full_image_path" class="w-5 h-5" alt="">
                                <span>  {{ i?.name }}  </span>    
                            </div>
                         
                        </div>
                    </div>
                    <div class="best bg-[#3BB44A] text-white px-3 py-1 rounded-r-[4px] absolute top-[55px] left-0"> {{ $t('best') }} </div>
                </div>
           
    
            </div>

        </div>

    </div>
    <loading v-if="checkLoader"></loading>

</template>
<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
let route = useRoute();
let id = route.query.id;
let value3 = ref('');
let currentStep = ref('1');
const checkLoader = ref(true);

const localePath = useLocalePath();

const { locale } = useI18n();
const { errors, handleSubmit, values, resetForm, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email(locale.value == 'ar' ? 'يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا' : 'email must be a valid email').required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        name: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        child_name: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        birth_date_of_child: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        phone: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    }),
});
const [name, nameAttrs] = defineField("name");
const [child_name, child_nameAttrs] = defineField("child_name");
const [birth_date_of_child, birth_date_of_childAttrs] = defineField("birth_date_of_child");
const [phone, phoneAttrs] = defineField("phone");
const [email, emailAttrs] = defineField("email");

const checkForm = ref(false);
let errorData = ref();
let pending1 = ref(false);
let pending2 = ref(false);
let pending3 = ref(false);
let otp = ref('');
let group_id = ref();
let day_id = ref();
let Choose_duration_later = ref(1);
const onSubmit = handleSubmit(async(activateCallback) => {
    // console.log(values);
    try{
        pending1.value = true;
        let result  = await useApi().post(`order/store/1`,{
            name: name.value,
            child_name: child_name.value,
            birth_date_of_child: birth_date_of_child.value,
            phone: phone.value,
            email: email.value,
        });
        if(result.status == 200){
            pending1.value = false;
            currentStep.value = '2';
            // checkForm.value = true; 
            otp.value = result.data.data.otp;  
            errorData.value = undefined; 
            
        }
    }catch(error){
        pending1.value = false;
        errorData.value =  error.response?.data?.errors
    }
});

const step2 = async(activateCallback)=>{
   try{
    pending2.value = true;
    let result  = await useApi().post(`order/store/1`,{
        name: name.value,
        child_name: child_name.value,
        birth_date_of_child: birth_date_of_child.value,
        phone: phone.value,
        email: email.value,
        otp: otp.value
    });
    if(result.status == 200){
        currentStep.value = '3';
        pending2.value = false;
    }
}catch(error){
       pending2.value = false;
       errorData.value =  error.response?.data?.errors
   }
}
const step3 = async(activateCallback)=>{
   try{
    pending3.value = true;
    let result  = await useApi().post(`order/store/3`,{
        name: name.value,
        child_name: child_name.value,
        birth_date_of_child: birth_date_of_child.value,
        phone: phone.value,
        email: email.value,
        otp: otp.value,
        Choose_duration_later: Choose_duration_later.value,
        package_id: route.query.id,
        group_id:Choose_duration_later.value == 1 ? undefined : group_id.value,
        day_id:Choose_duration_later.value == 1 ? undefined : day_id.value,
        time_id:Choose_duration_later.value == 1 ? undefined : time.value,
    });
    if(result.status == 200){
        currentStep.value = '4';
        pending3.value = false;
    }
}catch(error){
       pending3.value = false;
       errorData.value =  error.response?.data?.errors
   }
}


const planData = ref();
const timesData = ref([]);
const time = ref('');
const returnDate = (val)=>{
    const date = new Date(val);
    
    const dayOfMonth = date.getDate();
    
    console.log(`Day of the month: ${dayOfMonth}`);
    
    // Get the short name of the month in English and Arabic
    const shortMonthEn = date.toLocaleString('en', { month: 'short' }); // English
    const shortMonthAr = date.toLocaleString('ar', { month: 'short' }); // Arabic
    
    // Custom translations
    const monthTranslations = {
      en: { Jan: 'Jan', Feb: 'Feb', Mar: 'Mar', Apr: 'Apr', May: 'May', Jun: 'Jun', Jul: 'Jul', Aug: 'Aug', Sep: 'Sep', Oct: 'Oct', Nov: 'Nov', Dec: 'Dec' },
      ar: { Jan: 'يناير', Feb: 'فبراير', Mar: 'مارس', Apr: 'أبريل', May: 'مايو', Jun: 'يونيو', Jul: 'يوليو', Aug: 'أغسطس', Sep: 'سبتمبر', Oct: 'أكتوبر', Nov: 'نوفمبر', Dec: 'ديسمبر' },
    };
    
    // Translate
    const translatedMonthEn = monthTranslations.en[shortMonthEn];
    const translatedMonthAr = monthTranslations.ar[shortMonthEn];
    
    console.log(`Translated short month name (English): ${translatedMonthEn}`);
    console.log(`Translated short month name (Arabic): ${translatedMonthAr}`);

    return{
        day: dayOfMonth,
        month: locale.value == 'ar' ? translatedMonthAr : translatedMonthEn
    }

}
const getData = async()=>{
    let result  = await useApi().get(`package/${route.query.id}`);
    if(result.status == 200){
        planData.value = result.data.data;
        setTimeout(() => {
            checkLoader.value = false;
        }, 500);
    }
 }
const getTimes = async(date)=>{

    let result  = await useApi().get(`timeslot` , {params:{
        package_id:route.query.id,
        date:date
    }});
    if(result.status == 200){
        timesData.value = result.data.data;
    }
 }

 onMounted(() => {
     getData();
 });



// const onSubmit = (activateCallback) =>{
//     onSubmit2();
//     console.log('obj' , errors._value);
    
//     // console.log(errors.value ? 'true' : 'false');
    
//     if(checkForm.value){
//         activateCallback('2');
//         currentStep.value = '2';
//     }
// }



</script>
<style>
/* For WebKit browsers (e.g., Chrome, Edge, Safari) */
.items-date-container::-webkit-scrollbar {
  width: 12px; /* Set the width of the scrollbar */
}

.items-date-container::-webkit-scrollbar-track {
  background: #FFAA01; /* Background color of the track */
  border-radius: 10px; /* Optional: Rounded corners for the track */
}

.items-date-container::-webkit-scrollbar-thumb {
  background: #FFAA01; /* Color of the scrollbar thumb */
  border-radius: 10px; /* Optional: Rounded corners for the thumb */
}

.items-date-container::-webkit-scrollbar-thumb:hover {
  background: #FFAA01; /* Darker color on hover */
}

/* For Firefox */
.items-date-container {
  scrollbar-width: thin; /* Options: auto, thin, none */
  scrollbar-color: #FFAA01 #f1f1f1; /* thumb color track color */
}
</style>