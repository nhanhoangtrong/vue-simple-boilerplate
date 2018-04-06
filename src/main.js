import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueApollo from 'vue-apollo';
import routes from './routes';
import App from './App';
import storeConfig from './storeConfig';
import apolloClient from './apolloClient';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueApollo);

new Vue({
    el: '#app',
    render(h) {
        return h(App);
    },
    store: new Vuex.Store(storeConfig),
    router: new VueRouter({ mode: 'history', routes }),
    provide: new VueApollo({
        defaultClient: apolloClient,
    }).provide(),
});
