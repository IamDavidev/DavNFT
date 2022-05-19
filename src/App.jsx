import { useEffect, useState } from 'react';
import { API_URL_BASE } from './config/Api.instance';

// lib/api
export async function searchOpenSea(params) {
	const { limit, offset } = params;
	// const res = await fetch(
	// 	`https://api.opensea.io/api/v1/bundles?limit=${limit}&offset=${offset}`
	// );
	const response = await API_URL_BASE.get('/bundles', {
		params: {
			limit,
			offset,
		},
	});
	// const data = await response.json();
	console.log(response);
}

// export async function getOpenSea({ limit, setOpenSea }) {
// 	const response = await fetch(
// 		'https://api.opensea.io/api/v1/bundles?limit=10&offset=0'
// 	).then(res => res.json());
// 	conosole.log(limit);
// 	setOpenSea(response.bundles);
// }

function App() {
	const [openSea, setOpenSea] = useState([]);
	const [limit, _] = useState(25);
	const [offset, __] = useState(0); // offset = limit * page

	useEffect(() => {
		// getOpenSea({ limit, setOpenSea });
		searchOpenSea({ limit, offset });
	}, [limit, offset]);

	console.log(openSea);
	return (
		<div className='bg-black p-4  min-h-screen w-ful text-white'>
			<h1 className='text-center text-2xl text-purple'>App OpenSea</h1>
			<ul>
				{openSea &&
					openSea?.map(open => {
						return <li key={open.slug}>{open.name}</li>;
					})}
			</ul>
		</div>
	);
}

export default App;
