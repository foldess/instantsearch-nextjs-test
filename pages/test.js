import { useRouter } from 'next/router'

import algoliasearch from 'algoliasearch/lite'
import { findResultsState } from 'react-instantsearch-dom/server'

const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76')

const DEFAULT_PROPS = {
	searchClient,
	indexName: 'instant_search',
}

export async function getStaticProps({ resolvedUrl }) {
	// const searchState = pathToSearchState(resolvedUrl)
	const resultsState = await findResultsState(App, {
		...DEFAULT_PROPS,
	})

	return {
		props: {
			resultsState: JSON.parse(JSON.stringify(resultsState)),
		},
	}
}

function App(props) {
	const router = useRouter()
	console.log(router)

	return <div></div>
}

export default function Test(props) {
	return (
		<div>
			<App {...props} />
		</div>
	)
}
