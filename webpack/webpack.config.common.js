const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const levelUp = '..'
const setPath = (paths) => path.resolve(__dirname, ...paths)

module.exports = {
	context: setPath([levelUp, 'src']),
	entry: './index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: setPath([levelUp, 'dist']),
		clean: true
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: setPath([levelUp, 'public/index.html'])
		}),
		new CopyPlugin({
			patterns: [
				{ from: setPath([levelUp, 'public/favicon.png']), to: setPath([levelUp, 'dist']) }
			]
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.[tj]sx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	}
}
