<template>
    <div class="mt-14">
        <contact></contact>

    </div>
    <loading v-if="checkLoader"></loading>

</template>
<script setup>
const checkLoader = ref(true);

onMounted(() => {
    setTimeout(() => {
        checkLoader.value = false;
    }, 500);
});
</script>
<style lang="">

</style>