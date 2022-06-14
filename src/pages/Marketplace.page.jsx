// import React from 'react';

// imgs
import layer from '../assets/images/layerBg.png';
import nft404 from '../assets/images/nft404.png';
import nft from '../assets/images/exampleNft.png';

// icons
import CardNft from '../components/CardNft.component';

const Marketplace = () => {
	return (
		<header className='text-light relative '>
			<img
				src={layer}
				alt='layer'
				className='absolute top-[-35rem] animate-layer '
			/>
			<div className='relative z-10 mt-6 mb-12 text-center flex justify-center itmes-center flex-col gap-8'>
				<h1 className='text-6xl w-[20ch] text-center mx-auto font-bold'>
					<span className='text-dark font-bold'>Discover</span>, collect{' '}
					<span className='text-dark font-bold'>and </span>sale{' '}
					<span className='text-dark font-bold'>extraordinary NFTs</span>
				</h1>
				<nav>
					<button className='font-bold bg-gradient-to-r px-4 from-gray-500 to-glow_gree text-black p-2 rounded-full mx-4'>
						Get Started
					</button>
					<button className='p-2  mx-4 text-light font-extrabold hover:text-glow_gree hover:duration-1000'>
						Learn More
					</button>
				</nav>
			</div>
			<section className='relative z-10  box-border rounded-2xl flex flex-row justify-around flex-wrap gap-6 my-5'>
				<div className='-rotate-12'>
					<CardNft
						nft={nft}
						creator='David lezama'
						name={'nft 404'}
						permalink='/collections'
						token={'489'}
						key={'489'}
					/>
				</div>
				<div className='rotate-6'>
					<CardNft
						nft={nft404}
						creator='David lezama'
						name={'nft 404'}
						permalink='/collections'
						token={'4230'}
						key={'4230'}
					/>
				</div>
				<div className='-rotate-12'>
					<CardNft
						nft={nft}
						creator='David lezama'
						name={'nft next'}
						permalink='/collections'
						token={'42'}
						key={'42'}
					/>
				</div>
				<div className='rotate-12'>
					<CardNft
						nft={nft404}
						creator='David lezama'
						name={'nft toast'}
						permalink='/collections'
						token={'30'}
						key={'230'}
					/>
				</div>
			</section>
		</header>
	);
};

export default Marketplace;
