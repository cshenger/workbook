import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import marked from 'marked'

Vue.use(Vuex)

const state = {
	rawHtml: '',
	renderHtml: ''
}

const mutations = {
	MARKDOWN_SUCCESS (state, _rawHtml, _renderHtml) {
		state.rawHtml = _rawHtml
		_renderHtml = marked(_rawHtml)
		console.log(_rawHtml, _renderHtml)
		state.renderHtml = _renderHtml
	}
}

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations
})
