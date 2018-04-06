import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueApollo from 'vue-apollo';
import { sync } from 'vuex-router-sync';
import routes from './routes';
import App from './App';
import storeConfig from './storeConfig';
import apolloClient from './apolloClient';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueApollo);

const store = new Vuex.Store(storeConfig);
const router = new new VueRouter({ mode: 'history', routes })();
sync(store, router);

new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
    store,
    router,
    provide: new VueApollo({
        defaultClient: apolloClient,
    }).provide(),
});
