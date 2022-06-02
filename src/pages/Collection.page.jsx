// import React from 'react';
import { useParams } from 'react-router-dom';

const Collection = () => {
	const { address } = useParams();
	console.log(address);
	return (
		<div>
			<h1>Collection</h1>
			<p>{address}</p>
		</div>
	);
};

export default Collection;
