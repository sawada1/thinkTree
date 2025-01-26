import { defineNuxtPlugin } from '#app';
import Vue3TelInput from 'vue3-tel-input';
import 'vue3-tel-input/dist/vue3-tel-input.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3TelInput);
});
