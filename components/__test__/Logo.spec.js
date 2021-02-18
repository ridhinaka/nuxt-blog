import { shallowMount } from '@vue/test-utils'
import Logo from '../Logo.vue'

describe('Logo.vue', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(Logo)
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
