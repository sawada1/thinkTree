<template>
    <div class="mt-14">
        <plans :Packages="generalData?.Packages"></plans>
      
        <HomeSlider :Customer_rate="generalData?.Customer_rate"></HomeSlider>
        
    </div>
    <loading v-if="checkLoader"></loading>
</template>
<script setup>
const checkLoader = ref(true);
const generalData = ref();
 const getData = async()=>{
    let result  = await useApi().get('general');
    if(result.status == 200){
        generalData.value = result.data.data;
        setTimeout(() => {
            checkLoader.value = false;
        }, 500);
    }
 }
 onMounted(() => {
     getData();
 });
</script>
<style lang="">
    
</style>