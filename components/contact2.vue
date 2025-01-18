<template>
    <div class="container mt-[120px] mb-[70px]">
           <h3 class="text-primary text-center mb-8 text-[32px] font-bold"> هل أنت مستعد لنقل نمو عقل إبنك/بنتك إلى المستوى التالي؟ </h3>
           <div class="grid grid-cols-1 gap-10 xl:grid-cols-2 lg:grid-cols-2">
               <div data-aos="fade-left"  class="form-container flex flex-col gap-5 border-[#E1E3E5] border-[1px] p-[16px] rounded-[8px]">
                 <div class="input flex flex-col gap-3">
                   <label class="text-black" for="">
                       {{ $t('name1') }}<span class="text-red"> * </span>    
                   </label>
                   <input type="text" class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="" id="">
                 </div>
                 <div class="input flex flex-col gap-3">
                   <label class="text-black" for="">
                       {{ $t('name2') }} <span class="text-red"> * </span>    
                   </label>
                   <input type="text" class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="" id="">
                 </div>
                 <div class="input flex flex-col gap-3">
                   <label class="text-black" for="">
                       {{ $t('phone') }} <span class="text-red"> * </span>    
                   </label>
                   <input type="text" class="outline-none border-[#E1E3E5] border-[1px] rounded-[4px] p-1" name="" id="">
                 </div>
              
                 <button class="bg-orange w-full py-2 justify-center text-white font-bold flex items-center rounded-[4px]"> {{ $t('send') }} </button>
               </div>
               <img data-aos="fade-right"  src="/images/contact.png" alt="">
           </div>

       </div>
</template>