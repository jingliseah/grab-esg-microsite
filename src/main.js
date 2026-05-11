import 'virtual:svg-icons-register';
import VueSocialSharing from 'vue-social-sharing';
import VueConfetti from 'vue-confetti';
import detectZoom from 'detect-zoom';
import VueSafeHTML, { allowedTags } from 'vue-safe-html';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/main.scss';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(VueSocialSharing);
app.use(VueConfetti);
app.use(detectZoom);
app.use(VueSafeHTML,{
    allowedTags: [...allowedTags, 'div', 'span','p'],
  });


app.directive('click-outside', {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event) => {
            // here I check that click was outside the el and his children
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                binding.value();
            }
        };
        document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted: (el) => {
        document.removeEventListener('click', el.clickOutsideEvent);
    },
});

app.mount('#app');
