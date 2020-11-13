module.exports = {
	client: {
		service: {
			name: 'with-apollo',
			url: 'https://nextjs-graphql-with-prisma-simple.vercel.app/api',
			skipSSLValidation: true,
			includes: [
				'./lib/**/*.ts',
                './components/**/*.js',
                './components/**/*.ts',
				'./lib/apolloClient.ts',
				'./pages/**/*.js'
			]
		}
	}
};
