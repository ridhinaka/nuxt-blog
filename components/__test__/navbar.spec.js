import { shallowMount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

describe('Navbar.vue', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(Navbar)
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
