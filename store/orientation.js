export const state = () => ({
	deviceOrientation: ''
})

export const mutations = {
	SET_ORIENTATION(state, payload) {
		state.items = payload
	}
}

export const actions = {
	async setOrientation({ commit }, payload) {
		await commit('SET_ORIENTATION', payload)
	}
}