import Index from './components/Index.vue'
import Notfound from './components/404.vue'

export const routes = [
	{
		name: 'Index',
		path: '/',
		meta: {
			title: 'Index'
		},
		component: Index
	},
	{
		name: '404',
		path: '*',
		meta: {
			title: '404'
		},
		component: Notfound
	}
]

export default routes