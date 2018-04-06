import 'core-js';
import { shallow } from '@vue/test-utils';
import { expect } from 'chai';
import World from '../src/components/World.vue';

describe('Test World component', () => {
    it('Render World with suitable content and name', () => {
        const wrapper = shallow(World);

        expect(wrapper.find('h2').text()).to.be.equal('got "world"');
        expect(wrapper.name()).to.be.eq('world');
    });
});
