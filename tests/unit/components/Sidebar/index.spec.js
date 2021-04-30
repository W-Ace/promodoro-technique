import { shallowMount } from '@vue/test-utils';
import Sidebar from '@/components/Sidebar';

describe('menu', () => {
  it('Click newTask of menuItem will add class of active on it', async () => {
    const wrapper = shallowMount(Sidebar);
    const menuItem = wrapper.find('#new-task');
    await menuItem.trigger('click');
    expect(menuItem.classes()).toContain('active');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Click taskLists of menuItem will add class of active on it', async () => {
    const wrapper = shallowMount(Sidebar);
    const menuItem = wrapper.find('#task-lists');
    await menuItem.trigger('click');
    expect(menuItem.classes()).toContain('active');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Click analyticsReport of menuItem will add class of active on it', async () => {
    const wrapper = shallowMount(Sidebar);
    const menuItem = wrapper.find('#analytics-report');
    await menuItem.trigger('click');
    expect(menuItem.classes()).toContain('active');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Click ringTone of menuItem will add class of active on it', async () => {
    const wrapper = shallowMount(Sidebar);
    const menuItem = wrapper.find('#ring-tone');
    await menuItem.trigger('click');
    expect(menuItem.classes()).toContain('active');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
