module.exports = {
	siteName: 'samanatashi',
	plugins: [],
	chainWebpack: (config) => {
		config.module
			.rule('postcss-loader')
			.test(/.css$/)
			.use(['tailwindcss', 'autoprefixer'])
			.loader('postcss-loader');
	},
};
