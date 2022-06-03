import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

// const options = { method: 'GET' };

// const options = { method: 'GET' };
// fetch('https://api.opensea.io/api/v1/collection/doodles-official', options)// collections by slug
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export async function getCollectionNFTs({
	slug,
	setCollection,
	setLoading,
	setError,
}) {
	setLoading(true);
	try {
		const response = await fetch(
			`https://api.opensea.io/api/v1/collection/${slug}`
		)
			.then(res => res.json())
			.then(data => data);
		setCollection(response.collection);
	} catch (err) {
		console.log(err);
		setError(err);
	}
}

export function useCollectionNFts(slug) {
	const [collection, setCollection] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		getCollectionNFTs({ setCollection, slug, setLoading, setError });
	}, [slug]);

	return {
		collection,
		loading,
		error,
	};
}

const Collection = () => {
	const { slug } = useParams();
	const { collection } = useCollectionNFts(slug);
	console.log('Collection <<slugData>>', collection);

	return (
		<div>
			<img
				src={collection.banner_image_url}
				alt={collection.name}
				className='w-full h-60 object-cover rounded-2xl'
			/>
			<header className='relative'>
				<img
					src={collection.image_url}
					alt={collection.name}
					className='absolute left-[45%] -top-20 border-solid border-dark border-4 rounded-full'
				/>
				<h1 className='pt-16 text-center font-bold text-3xl'>
					{collection.name}
				</h1>
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
				<p className='text-center w-[60ch]'>{collection.description}</p>
			</div>
			<nav className='flex flex-row items-center justify-center gap'>
				<Link to='/'>items</Link>
				<Link to='/'>stats</Link>
			</nav>
			<footer>
				<Outlet />
			</footer>
		</div>
	);
};

export default Collection;
