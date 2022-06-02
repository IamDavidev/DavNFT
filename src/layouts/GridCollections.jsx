// import React from 'react';
import CardCollection from '../components/CardCollection.component.jsx';
import useOpenSea from '../lib/hooks/useOpenSea';

const GridCollections = () => {
	const { openSea } = useOpenSea();
	console.log(openSea);
	return (
		<>
			<section className=' my-8 flex flex-wrap  justify-center items-center gap-6 min-h-screen'>
				{openSea.loading && <p>Loading...</p>}
				{openSea?.results?.collections.map(collection => {
					if (!collection) return null;
					return (
						<CardCollection
							key={collection.id}
							banner={collection.banner}
							creator={collection.creator}
							image={collection.imgCollection}
							desciption={collection.description}
							name={collection.nameCollection}
						/>
					);
				})}
			</section>
			<span>{openSea.limit}/1200</span>
		</>
	);
};

export default GridCollections;
