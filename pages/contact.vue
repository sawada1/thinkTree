<template>
    <div class="mt-14">
        <contact></contact>

    </div>
    <loading v-if="checkLoader"></loading>

</template>
<script setup>
const checkLoader = ref(true);
const route = useRoute();
const { locale, setLocale , t } = useI18n();
const mainUrl = ref(process.client ? `${window.location.origin}${route.fullPath}` : '');
onMounted(() => {
    setTimeout(() => {
        checkLoader.value = false;
    }, 500);
});

useHead({
      title: `${t('contact')} | thinkTree`,
      meta: [
        { name: 'description', content: t('contact')},
        { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
        { name: 'author', content: 'Your Name or Company' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: `${t('contact')} | thinkTree` },
        { property: 'og:description', content: t('contact') },
        { property: 'og:image', content: '/images/contact.png' },
        { property: 'og:url', content: mainUrl.value },
      ],
    });

</script>
<style lang="">

</style>