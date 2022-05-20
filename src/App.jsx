import useOpenSea from './lib/hooks/useOpenSea';

function App() {
	const { openSea, loading, setOpenSeaLimit } = useOpenSea();
	console.log('openSea', openSea);
	console.log('limit', openSea?.limit);

	return (
		<div className='bg-black p-4  min-h-screen w-ful text-white'>
			<h1 className='text-center text-2xl text-purple'>App OpenSea</h1>
			<button onClick={() => setOpenSeaLimit(openSea?.limit + 5)}>
				more 5 nft
			</button>
			{loading && <p>loading ... </p>}
			<ul className='flex flex-wrap gap-4 '>
				{openSea &&
					openSea?.results?.bundles?.map(open => {
						return (
							<li
								key={open.slug}
								className='border-4 rounded-2xl border-purpleLite border-solid p-4'>
								{open.name}
							</li>
						);
					})}
			</ul>
		</div>
	);
}

export default App;
