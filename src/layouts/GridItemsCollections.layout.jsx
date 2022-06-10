import CardNft from '../components/CardNft.component';
import useAssetsNFTs from '../lib/hooks/useAssetsNFTs.hook';

const GridItemsCollections = ({ address }) => {
	const { assetsNFTs } = useAssetsNFTs(address);
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
			{assetsNFTs?.results?.length === 0 && (
				<div className='text-center'>
					<h1 className='text-2xl font-bold'>No hay nft</h1>
				</div>
			)}
		</div>
	);
};

export default GridItemsCollections;
