const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const levelUp = '..'
const setPath = (paths) => path.resolve(__dirname, ...paths)

module.exports = {
	context: setPath([levelUp, 'src']),
	entry: './index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: setPath([levelUp, 'dist']),
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: setPath([levelUp, 'public/index.html'])
		}),
		new CopyPlugin({
			patterns: [
				{ from: setPath([levelUp, 'public/favicon.png']), to: setPath([levelUp, 'dist']) }
			]
		})
	]
}
