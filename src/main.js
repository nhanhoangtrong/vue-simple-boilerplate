import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import routes from './routes';
import App from './App';
import storeConfig from './storeConfig';

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
    store: new Vuex.Store(storeConfig),
    router: new VueRouter({ mode: 'history', routes }),
});
