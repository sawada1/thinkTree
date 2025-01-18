<template>
    <div class="mt-14">
        <plans :Packages="generalData?.Packages"></plans>
      
        <HomeSlider :Customer_rate="generalData?.Customer_rate"></HomeSlider>
        
    </div>
</template>
<script setup>
const generalData = ref();
 const getData = async()=>{
    let result  = await useApi().get('general');
    if(result.status == 200){
        generalData.value = result.data.data;
    }
 }
 getData();
</script>
<style lang="">
    
</style>