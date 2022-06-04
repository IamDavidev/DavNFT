import CardNft from '../components/CardNft.component';
import useAssetsNFTs from '../lib/hooks/useAssetsNFTs.hook';

const GridItemsCollections = ({ address }) => {
	const { assetsNFTs } = useAssetsNFTs(address);

	console.log('grid items', { assetsNFTs });

	console.log('address>>', address);

	return (
		<div className='flex flex-row flex-wrap items-center justify-center gap-7'>
			{assetsNFTs?.results?.map(nft => {
				return (
					<CardNft
						key={nft.tokenId}
						nft={nft.image}
						creator={nft.user}
						name={nft.name}
						permalink={nft.link}
						token={nft.tokenId}
					/>
				);
			})}
		</div>
	);
};

export default GridItemsCollections;
