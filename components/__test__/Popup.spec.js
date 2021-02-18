import { shallowMount } from '@vue/test-utils'
import Popup from '../Popup.vue'

describe('Popup.vue', () => {
	let wrapper = null

	beforeEach(() => {
		wrapper = shallowMount(Popup)
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
