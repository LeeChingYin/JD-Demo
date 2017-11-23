var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var jquery = require('jquery');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');



module.exports = {
	// 入口文件名称
	entry: {
		index: APP_PATH,
		vendor: ["jquery"]
	},
	// 输出文件名称
	output: {
		path: BUILD_PATH,
		filename: '[name].bundle.js',
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader"
			})
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'url-loader',
				options: {
					limit: 40000
				}
			}]
		}]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Hello',
			filename: 'index.html',
			template: 'app/tpl/index.html'
		}),
		new ExtractTextPlugin('styles.css'),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		// 这里使用内置插件生成单独的 vendor file
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
		})
	],
	devtool: 'inline-source-map'
};