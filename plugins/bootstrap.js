import { defineNuxtPlugin } from '#app';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css'
const myPlugin = defineNuxtPlugin((nuxt) => {
  if (process.client) {
  
    import('bootstrap');
  }
});

export default myPlugin;
