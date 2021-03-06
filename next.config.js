module.exports = {
	webpack(config, options) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-tag/loader' }]
		});

		config.module.rules.push({
			test: /\.ya?ml$/,
			type: 'json',
			use: 'yaml-loader'
		});

		return config;
	}
};
