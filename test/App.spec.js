import Vue from 'vue';
import { shallow } from '@vue/test-utils';
import { expect } from 'chai';
import App from '../src/App.vue';

describe('Test App component', () => {
    it('Render App with suitable content and name', () => {
        const Constructor = Vue.extend(App);
        const vm = new Constructor().$mount();
    });
});
