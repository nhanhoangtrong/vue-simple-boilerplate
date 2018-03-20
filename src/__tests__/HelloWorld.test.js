import { mount } from '@vue/test-utils';
import World from '../components/World';

it('Should render World component', () => {
    const wrapper = mount(World);
    expect(wrapper.isVueInstance()).toBeTruthy();
});
