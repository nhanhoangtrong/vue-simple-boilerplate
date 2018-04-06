import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
import routes from './routes';
import App from './App';
import storeConfig from './storeConfig';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);
const router = new VueRouter({ mode: 'history', routes });
sync(store, router);

new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
    store,
    router,
});
