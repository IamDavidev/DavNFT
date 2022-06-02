// import React from 'react';

// imgs
import layer from '../assets/images/layerBg.png';

// icons
import RowIcon from '../components/icons/Row.icon';
import CardNft from '../components/CardNft.component';

const Marketplace = () => {
	return (
		<header className='text-light relative '>
			<img
				src={layer}
				alt='layer'
				className='absolute top-[-40rem] animate-layer '
			/>
			<div className='relative z-10 my-20 text-center flex justify-center itmes-center flex-col gap-8'>
				<h1 className='text-6xl w-[20ch] text-center mx-auto font-bold'>
					<span className='text-dark font-bold'>Discover</span>, collect{' '}
					<span className='text-dark font-bold'>and </span>sale{' '}
					<span className='text-dark font-bold'>extraordinary NFTs</span>
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
			<section className='relative z-10  box-border rounded-2xl flex flex-row justify-around flex-wrap gap-6 my-5'>
				<div className='-rotate-12'>
					<CardNft />
				</div>
				<div className='rotate-6'>
					<CardNft />
				</div>
				<div className='-rotate-12'>
					<CardNft />
				</div>
				<div className='rotate-12'>
					<CardNft className='rotate-12' />
				</div>
			</section>
		</header>
	);
};

export default Marketplace;
