export const state = () => ({
	device: ''
})

export const getters = {
	getDevice: (state, getters) => {
		if(process.browser) {
      if(window.innerWidth > window.innerHeight) {
        if(window.innerWidth <= 900) {
          return 'MOBILE'
        } else if(window.innerWidth > 900 && window.innerWidth <= 1024) {
          return 'TABLET'
        } else {
          return 'DESKTOP'
        }
      } else {
        if(window.innerHeight <= 900) {
          return 'MOBILE'
        } else if(window.innerHeight > 900 && window.innerHeight <= 1024) {
          return 'TABLET'
        } else {
          return 'DESKTOP'
        }
      }
    }
	},
	getResolution: (state, getters) => {
		if(process.browser) {
      if(window.innerWidth <= 900) {
        return 'MOBILE'
      } else if(window.innerWidth > 900 && window.innerWidth <= 1024) {
        return 'TABLET'
      } else {
        return 'DESKTOP'
      }
    }
  },
  checkIsSafari() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/windows phone/i.test(userAgent)) {
      return false;
    }
    if (/android/i.test(userAgent)) {
      return false;
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return true;
    }
    return false
  },
}

export const mutations = {
	setDevice(state, payload) {
		state.items = payload
	}
}

export const actions = {
	async getDeviceMode({ commit }) {
		// let files = await require.context('~/assets/content/home/', false, /\.json$/)
		let data = ''
		await commit('setItems', data)
	}
}