import { Link } from 'react-router-dom';

import RowIcon from './icons/Row.icon';
import VerificationIcon from '../components/icons/verification.icon';

const CardCollection = ({ banner, name, image, address, slug }) => {
	return (
		<article className='w-full rounded-2xl sm:w-[30%] overflow-hidden relative z-50  p-2'>
			<div className='border border-solid border-light flex rounded-2xl flex-row items-center justify-start gap-5'>
				<img
					src={banner}
					alt={name}
					className='w-36 h-32 rounded-2xl object-cover'
				/>
				<div className='flex flex-col items-start gap-4 w-full pr-4'>
					<div>
						<h2>
							{name.substring(0, 20)}
							<VerificationIcon style={'inline mx-2'} />
						</h2>
						{/* <span>{creator}</span> */}
						<span>{slug}</span>
					</div>
					<div className='w-full flex flex-row justify-between gap-5 items-center'>
						<figure className='flex items-center gap-2'>
							<img src={image} alt='' className='w-11 h-11 rounded-full' />
							{/* <span className='inline text-glow_gree'>{price}ETH</span> */}
						</figure>
						<Link
							to={`/collection/${address}/${slug}/items`}
							className='border-solid border border-glow_gree p-2  rounded-2xl text-glow_gree'>
							more
							<RowIcon color='#36f599' style={'inline mx-2'} />
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};

export default CardCollection;
