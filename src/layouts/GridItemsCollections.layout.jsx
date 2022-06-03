// import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const options = { method: 'GET' };

const MIN_ITEMS = 10;

export async function getAssetsCollection(address) {
	const [assets, setAssets] = useState([]);

	fetch(
		`https://api.opensea.io/api/v1/asset/${address}/1/?include_orders=false`,
		options
	)
		.then(response => response.json())
		.then(response => console.log('Assets :>>', response))
		.catch(err => console.error(err));

	console.log('>>assets', assets);
}

const GridItemsCollections = () => {
	const { address } = useParams();

	useEffect(() => {
		getAssetsCollection(address);
	}, []);

	return (
		<div>
			<span>{address}</span>
		</div>
	);
};

export default GridItemsCollections;
