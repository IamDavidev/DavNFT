import CardCollection from '../components/CardCollection.component.jsx';
import useBundlesNFTs from '../lib/hooks/useBundles.js';

const GridCollections = () => {
	const { bundles } = useBundlesNFTs();

	return (
		<>
			<section className=' my-8 flex flex-wrap  justify-center items-center gap-6 min-h-screen'>
				<div>
					<h2>Discover More Collections</h2>
				</div>
				{bundles.loading && <p>Loading...</p>}
				{bundles?.results?.map(collection => {
					if (!collection) return null;
					return (
						<CardCollection
							key={collection.id}
							banner={collection.banner}
							creator={collection.symbol}
							image={collection.imgCollection}
							name={collection.nameCollection}
							address={collection.address}
							slug={collection.slug}
						/>
					);
				})}
				<span>{bundles.limit}/1200</span>
			</section>
		</>
	);
};

export default GridCollections;
