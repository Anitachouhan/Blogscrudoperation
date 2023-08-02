// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Nuxt Tutorial',
			htmlAttrs: {
				lang: 'en'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ hid: 'title', name: 'title', content: 'Nuxt Tutorial' }
			]
		},
	},
	css: [
		'@/static/global.css',
	],
	plugins: [
		{ src: '~/plugins/bootstrap.js', mode: 'client' }
	]
})


