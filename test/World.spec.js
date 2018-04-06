import Vue from 'vue';
import { expect } from 'chai';
import World from '../src/components/World.vue';

describe('Test World component', () => {
    it('Render World with suitable content and name', () => {
        const Constructor = Vue.extend(World);
        const vm = new Constructor().$mount();
    });
});
