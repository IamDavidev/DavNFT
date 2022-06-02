// import React from 'react';

// imgs
import nftExample from '../assets/images/exampleNft.png';
import layer from '../assets/images/layerBg.png';
// icons
import RowIcon from '../components/icons/Row.icon';
import HeartIcon from '../components/icons/Heart.icon';
import VerificationIcon from '../components/icons/verification.icon';

const Marketplace = () => {
	return (
		<header class='text-light relative '>
			<img src={layer} alt='layer' className='absolute top-[-40rem]' />
			<div className='relative z-10 my-20 text-center flex justify-center itmes-center flex-col gap-8'>
				<h1 className='text-6xl w-[20ch] text-center mx-auto '>
					<span>Discover</span>, collect <span>and </span>sale{' '}
					<span>extraordinary NFTs</span>
				</h1>
				<nav>
					<button className='font-bold border-glow_gree border-solid border bg-glow_gree text-dark p-2 rounded-2xl mx-4'>
						Get Started
					</button>
					<button className='p-2 rounded-2xl mx-4 text-light font-bold'>
						learn More
						<RowIcon color='#fff' style='inline mx-4' />
					</button>
				</nav>
			</div>
			<section className='relative z-10 w-72 sm:w-72 box-border rounded-2xl'>
				{/* cards nfts */}

				<article className='p-4 border-solid border-light border rounded-2xl text-light'>
					<header className='mb-3'>
						<img src={nftExample} alt='nft example' />
					</header>
					<footer>
						<div class='flex w-full justify-between items-center'>
							<h2 className='text-xl font-bold'>cute Morning cofe</h2>
							<span className='text-glow_gree'>30.5 SOL</span>
						</div>
						<span className='inline-block my-4'>
							ben colfex
							<VerificationIcon style='inline ml-4' />
						</span>
						<div className='w-full flex justify-between items-center'>
							<button className='border-solid border-2 border-glow_gree py-2 px-2 rounded-lg font-bold'>
								buy now
								<RowIcon color='#fff' style='inline mx-2' />
							</button>
							<button>
								<HeartIcon color='#35f599' />
							</button>
						</div>
					</footer>
				</article>
			</section>
		</header>
	);
};

export default Marketplace;
