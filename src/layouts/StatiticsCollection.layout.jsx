import ReactMarkdown from 'react-markdown';
import HeartIcon from '../components/icons/Heart.icon';
import ShareIcon from '../components/icons/Share.icon';
import WebsiteIcon from '../components/icons/website.icon';
import { useCollectionNFts } from '../lib/hooks/useCollectionNFTs.hook';

const Statiticsresult = ({ slug }) => {
	const { collection } = useCollectionNFts(slug);
	const result = collection?.results;
	console.log(result);

	if (!result.stats) return <p>Loading...</p>;
	if (collection.loading) return <p>Loading...</p>;
	return (
		<div>
			<img
				src={result.banner_image_url}
				alt={result.name}
				className='w-full h-60 object-cover rounded-2xl'
			/>
			<header className='relative'>
				<img
					src={result.image_url}
					alt={result.name}
					className='absolute left-[45%] -top-28 border-solid border-black w-40 border-4 rounded-full object-contain'
				/>
				<h1 className='pt-16 text-center font-bold text-3xl'>{result.name}</h1>
				<p className='text-center'>
					by <span className='text-glow_gree'>@{result.slug}</span>
				</p>
			</header>
			<div className='my-8 flex items-center justify-center  gap-8 '>
				<button>
					<ShareIcon color='#1c2541' style='hover:animate-layer' width='28' />
				</button>
				<button>
					<HeartIcon color='#1c2541' style='hover:animate-layer' width='30' />
				</button>
				<button>
					<WebsiteIcon color='#1c2541' style='hover:animate-layer' width='30' />
				</button>
			</div>
			<div className='flex flex-col flex-wrap justify-center items-center gap-5'>
				<div className='border-2 border-solid border-dark rounded-3xl px-12 py-5 flex flex-row flex-wrap justify-center items-center gap-24'>
					<div className='text-center'>
						<span className='block font-bold'>
							${result?.stats?.floor_price}
						</span>
						<span className='block uppercase text-dark'>Floor price</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>
							${result?.stats.average_price.toLocaleString()}
						</span>
						<span className='block uppercase text-dark'>Average Price</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>
							${result?.stats.total_volume.toLocaleString()}
						</span>
						<span className='block uppercase text-dark'>total volumen</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>{result?.stats.num_owners}</span>
						<span className='block uppercase text-dark'>Ownres</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>{result?.stats.total_sales}</span>
						<span className='block uppercase text-dark'>Sales</span>
					</div>
					<div className='text-center'>
						<span className='block font-bold'>
							{result?.stats.market_cap.toLocaleString()}
						</span>
						<span className='block uppercase text-dark'>market cap</span>
					</div>
				</div>
			</div>
			<div className='text-center flex justify-center align-center my-8'>
				<div className='w-[60ch] '>
					<ReactMarkdown>{result.description}</ReactMarkdown>
				</div>
			</div>
			<nav className=' relative flex flex-row items-center justify-center gap-4 py-2 my-12 after:w-full after:h-1 after:bg-dark after:absolute after:bottom-2 after:right-0 after:left-0'>
				<button className='bg-dark px-8 py-2 rounded-lg'>items</button>
			</nav>
		</div>
	);
};

export default Statiticsresult;
