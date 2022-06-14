import HeartIcon from './icons/Heart.icon';
import RowIcon from './icons/Row.icon';
import VerificationIcon from './icons/verification.icon';

const CardNft = ({ name, token, creator = 'aninimo', permalink, nft }) => {
	return (
		<>
			<article className='p-4 border-solid border-purple border-2 rounded-2xl text-light w-72'>
				<header className='mb-3'>
					<img src={nft} alt={name} className='rounded-2xl' />
				</header>
				<footer>
					<div className='flex w-full justify-between items-center'>
						<h2 className='text-xl font-bold'>{name}</h2>
						<span className='text-glow_gree'>{token.substring(0, 4)}</span>
					</div>
					<span className='inline-block my-4 font-bold'>
						{creator}
						<VerificationIcon style='inline ml-2' />
					</span>
					<div className='w-full flex justify-between items-center'>
						<a
							href={permalink}
							rel='noopener noreferrer'
							target='_blank'
							className='border-solid border-2 border-purple py-2 px-2 rounded-lg font-bold'>
							buy now
							<RowIcon color='#fff' style='inline mx-2' />
						</a>
						<button>
							<HeartIcon color='#4c67f4' />
						</button>
					</div>
				</footer>
			</article>
		</>
	);
};

export default CardNft;
