<template>
     <div class="container mt-[120px] mb-[70px]">
            <h6 class="text-primary text-center mb-8 xl:text-[32px] lg:text-[32px] text-[26px] font-bold"> {{ $t('contact1') }} </h6>
            <div class="grid grid-cols-1 gap-10 xl:grid-cols-2 lg:grid-cols-2">
                <div data-aos="fade-left"  class="form-container flex flex-col gap-5 border-[#E1E3E5] border-[1px] p-[16px] rounded-[8px]">
                  <div class="input flex flex-col gap-3">
                    <label class="text-black" for="nameInput">
                       {{ $t('name1') }} <span class="text-red"> * </span>    
                    </label>
                    <input type="text" v-model="parent_name" class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="nameInput" id="nameInput">
                    <div class="text-red"> {{ errors.parent_name }} </div>
                    <div class="text-red" v-if="errorsData?.parent_name"> {{errorsData?.parent_name[0] }} </div>
                  </div>
                  <div class="input flex flex-col gap-3">
                    <label class="text-black" for="name2Input">
                        {{ $t('name2') }} <span class="text-red"> * </span>    
                    </label>
                    <input type="text" v-model="child_name" class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="name2Input" id="name2Input">
                    <div class="text-red"> {{ errors.child_name }} </div>
                    <div class="text-red" v-if="errorsData?.child_name"> {{errorsData?.child_name[0] }} </div>
                  </div>
                  <div class="input flex flex-col gap-3">
                    <label class="text-black" for="phoneInput">
                       {{ $t('phone') }} <span class="text-red"> * </span>    
                    </label>
                    <input type="text" v-model="phone" class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="phoneInput" id="phoneInput">
                    <div class="text-red"> {{ errors.phone }} </div>
                    <div class="text-red" v-if="errorsData?.phone"> {{errorsData?.phone[0] }} </div>
                  </div>
                  <div class="input flex flex-col gap-3">
                    <label class="text-black" for="messageInput">
                        {{ $t('msg') }} <span class="text-red"> * </span>    
                    </label>
                    <textarea rows="5" v-model="message"  class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="messageInput" style="resize: none;" id="messageInput"/>
                    <div class="text-red"> {{ errors.message }} </div>   
                    <div class="text-red" v-if="errorsData?.message"> {{errorsData?.message[0] }} </div>

                  </div>
                  <button @click="onSubmit" :disabled="pending" class="bg-orange w-full py-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold flex items-center rounded-[4px]"> {{ $t('send') }} </button>
                </div>
                <NuxtImg data-aos="fade-right" format="webp" quality="80" loading="lazy" src="/images/contact.png" alt="contact us image" />
            </div>

        </div>
        <!-- <Toast /> -->
</template>

<script setup>
import { useForm } from "vee-validate";
import { useToast } from "primevue/usetoast";
import * as yup from "yup";
const localePath = useLocalePath();
const toast = useToast();
let pending = ref(false);
const { locale  , t} = useI18n();
const { errors, handleSubmit, values, resetForm, defineField } = useForm({
    validationSchema: yup.object({
        parent_name: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        child_name: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        message: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
        phone: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    }),
});
const [parent_name, parent_nameAttrs] = defineField("parent_name");
const [child_name, child_nameAttrs] = defineField("child_name");
const [phone, phoneAttrs] = defineField("phone");
const [message, messageAttrs] = defineField("message");
let errorsData = ref();
const onSubmit = handleSubmit(async() => {
  try{
    pending.value = true;
    let result  = await useApi().post('contact_us' , values);
    if(result.status == 200){
      pending.value = false;
      toast.add({ severity: 'success', summary: t('success'), detail: '', life: 5000 });
      resetForm({
        values: {
          parent_name: "",
          child_name: "",
          phone: "",
          message: "",
        },
        errors: {},
      });
    }
  }catch(error){
    pending.value = false;
   errorsData.value = error.response?.data?.errors;
  }
});

</script>