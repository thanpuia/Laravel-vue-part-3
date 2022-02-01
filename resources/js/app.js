import router from './router'

import Vue from 'vue';

import VueRouter from 'vue-router';

import App from './components/App';


Vue.use(VueRouter);


require('./bootstrap');


const app = new Vue({
    el: '#app',
    components: {
        App
    },
    router,
  
});


