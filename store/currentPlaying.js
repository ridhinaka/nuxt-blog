export const state = () => ({
	url_cotg: '',
	url_karaoke: '',
	url_playstage: '',

	url_playcinema: '',

	url_network: '',
	url_talkshow: '',
	url_workshop: '',
	url_conference: ''
})

export const mutations = {
	SET_PLAYSTAGE(state, payload) {
		state.url_playstage = payload
	},
	SET_KARAOKE(state, payload) {
		state.url_karaoke = payload
	},
	SET_COTG(state, payload) {
		state.url_cotg = payload
	},

	SET_PLAYCINEMA(state, payload) {
		state.url_playcinema = payload
	},

	SET_NETWORK(state, payload) {
		state.url_network = payload
	},
	SET_TALKSHOW(state, payload) {
		state.url_talkshow = payload
	},
	SET_WORKSHOP(state, payload) {
		state.url_workshop = payload
	},
	SET_CONFERENCE(state, payload) {
		state.url_conference = payload
	}
}

export const actions = {
  setPlaystage({ commit }, payload) {
    commit('SET_PLAYSTAGE', payload)
  },
  setKaraoke({ commit }, payload) {
    commit('SET_KARAOKE', payload)
  },
  setCotg({ commit }, payload) {
    commit('SET_COTG', payload)
	},
	
  setPlaycinema({ commit }, payload) {
    commit('SET_PLAYCINEMA', payload)
	},
	
	setNetwork({ commit }, payload) {
		commit('SET_NETWORK', payload)
	},
  setTalkshow({ commit }, payload) {
    commit('SET_TALKSHOW', payload)
  },
  setWorkshop({ commit }, payload) {
    commit('SET_WORKSHOP', payload)
  },
  setConference({ commit }, payload) {
    commit('SET_CONFERENCE', payload)
  }
}