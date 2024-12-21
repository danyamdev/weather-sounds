const { merge } = require('webpack-merge')

const webpackConfigCommon = require('./webpack.config.common')

module.exports = merge(webpackConfigCommon, {
	mode: 'development',
	devServer: {
		port: 3000,
		hot: true, // Включение горячей замены модулей
		open: true, // Автоматическое открытие браузера
	}
})
