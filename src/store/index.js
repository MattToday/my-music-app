import { init } from '@rematch/core'

const middlewares = [require('redux-logger').createLogger()]

const models = {}

const files = require.context("./models", false, /\.js$/);
files.keys().forEach(key => {
	if (key === "./index.js") return;
	const filename = key.replace(/(\.\/|\.js)/g, "")
	models[`${filename}`] = files(key).default
})

const store = init({
	models,
	plugins: [],
	redux: {
		middlewares,
	},
})
export default store



