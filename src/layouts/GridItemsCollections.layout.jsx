import useAssetsNFTs from '../lib/hooks/useAssetsNFTs.hook';

const GridItemsCollections = ({ address }) => {
	const { assetsNFTs } = useAssetsNFTs(address);

	console.log({ assetsNFTs });

	console.log('address>>', address);

	return (
		<div className='flex flex-row flex-wrap items-center justify-center'>
			{assetsNFTs?.results?.assets?.map(item => {
				return (
					<div key={item.id} className='w-1/4 p-5 rounded-2xl'>
						<img
							src={item.image_url}
							alt={item.name}
							className='w-full rounded-2xl'
						/>
					</div>
				);
			})}
		</div>
	);
};

export default GridItemsCollections;
