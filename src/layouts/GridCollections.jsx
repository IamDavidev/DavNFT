import { useNFTs } from '../lib/hooks';

const GridCollections = () => {
	//
	const nfts = useNFTs();

	// console.log('>>nfts', nfts);

	console.log('>>nfts', nfts);

	//

	return (
		<>
			<section className=' my-8  min-h-screen'>
				<div>
					<h2>Discover More Collections</h2>
				</div>
			</section>
		</>
	);
};

export default GridCollections;
