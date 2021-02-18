import { shallowMount } from '@vue/test-utils'
import Footer from '../Footer.vue'

describe('Footer.vue', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(Footer,{
			propsData : 
			})
	})
	afterEach(() => {
		wrapper.destroy()
	})

	it('should render correctly', () => {
		
		expect(wrapper.element).toMatchSnapshot()
	})

	// it('should change text label when button clicked', () => {
	// wrapper.find('.btn-action').trigger('click.prevent');

	// expect(wrapper.vm.label).toBe('Hello');
	// })
})
