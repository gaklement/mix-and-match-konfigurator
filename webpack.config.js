module.exports = {
	entry: ".\\app.js",

	output: {
		filename: "bundle.js",
		path: __dirname + '/build'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [ "react-hot-loader","babel-loader"]
			}, 
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	},

	resolve: {
		extensions: ['.js', '.css']
	}

};