<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="flex flex-col gap-5 items-center justify-center">
            <NuxtImg format="webp" width="350" quality="80" loading="lazy" src="/images/thank.png" alt="thank image"  />
            <h1 class="text-primary text-center xl:text-[32px] lg:text-[32px] text-[24px] mb-10 font-bold"> {{ $t('thank') }} </h1>
            <nuxt-link class="font-bold bg-orange flex items-center justify-center text-white w-[140px] py-[10px] rounded-[8px]" :to="localePath('/')"> {{ $t('home') }} </nuxt-link>

        </div>
    </div>
</template>
<script setup>
const localePath = useLocalePath();

</script>
<style lang="">
    
</style>