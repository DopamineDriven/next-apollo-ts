import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { AppProps, NextWebVitalsMetric } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
	console.debug(metric);
}

export default App;
