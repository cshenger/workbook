import Vue from 'vue'
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
})

export const renderHtml = ({ commit }, e) => {
	var _rawHtml = e.target.value
	var _renderHtml = marked(_rawHtml)
	
	commit('MARKDOWN_SUCCESS', _rawHtml, _renderHtml)
}
