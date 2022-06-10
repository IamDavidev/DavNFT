import ReactMarkdown from 'react-markdown';
import { useCollectionNFts } from '../lib/hooks/useCollectionNFTs.hook';

const Statiticsresults = ({ slug }) => {
	const { collection } = useCollectionNFts(slug);
	const results = collection?.results;
	return (
		<div>
			<img
				src={results.banner_image_url}
				alt={results.name}
				className='w-full h-60 object-cover rounded-2xl'
			/>
			<header className='relative'>
				<img
					src={results.image_url}
					alt={results.name}
					className='absolute left-[45%] -top-20 border-solid border-dark border-4 rounded-full'
				/>
				<h1 className='pt-16 text-center font-bold text-3xl'>{results.name}</h1>
				<p className='text-center'>
					by <span className='text-glow_gree'>@{'metatoyDragon'}</span>
				</p>
			</header>
			<div className='my-8 flex items-center justify-center  gap-4'>
				<button>share</button>
				<button>follow</button>
			</div>
			<div className='flex flex-col flex-wrap justify-center items-center gap-5'>
				<div className='border border-solid border-dark rounded-2xl px-12 py-5 flex flex-row flex-wrap justify-center items-center gap-24'>
					<div className='text-center'>
						<span className='block font-bold'>${'56.1K'}</span>
						<span className='block uppercase text-dark'>Floor price</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>${'765.1K'}</span>
						<span className='block uppercase text-dark'>Highest sale</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>${'1.2M'}</span>
						<span className='block uppercase text-dark'>total volume</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>{'12K'}</span>
						<span className='block uppercase text-dark'>items</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>{'6.4K'}</span>
						<span className='block uppercase text-dark'>owners</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>{'456M'}</span>
						<span className='block uppercase text-dark'>market cap</span>
					</div>
				</div>
			</div>
			<div className='text-center'>
				<ReactMarkdown>{results.description}</ReactMarkdown>
			</div>
			<nav className=' relative flex flex-row items-center justify-center gap-4 py-2 my-12 after:w-full after:h-1 after:bg-dark after:absolute after:bottom-0 after:right-0 after:left-0'>
				<button className='border border-solid border-dark px-8 py-2 rounded-2xl'>
					items
				</button>
				<button className='border border-solid border-dark  px-8 py-2 rounded-2xl'>
					stats
				</button>
			</nav>
		</div>
	);
};

export default Statiticsresults;
