const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [ './src/containers/master.jsx' ],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ 'env', 'react' ],
						plugins: [ [ 'import', { libraryName: 'antd', libraryDirectory: 'es', style: true } ] ]
					}
				}
			},
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'less-loader',
							options: {
								javascriptEnabled: true,
								modifyVars: {
									'@primary-color': '#D00C0C'
								}
							}
						}
					]
				})
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Boilerplate 2018',
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: './src/assets/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'bundle.css',
			disable: false,
			allChunks: true
		})
	],
	resolve: {
		alias: {
			container: path.resolve(__dirname, './src/containers/'),
			component: path.resolve(__dirname, './src/components/'),
			asset: path.resolve(__dirname, './src/assets/')
		},
		extensions: [ '.jsx', '.js', '.json' ]
	}
};
