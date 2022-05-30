import useOpenSea from './lib/hooks/useOpenSea';

function App() {
	const { openSea, loading, setOpenSeaLimit } = useOpenSea();

	return (
		<div className='bg-black p-4  min-h-screen w-ful text-white'>
			<h1 className='text-center text-2xl text-purple'>App OpenSea</h1>
			<button onClick={() => setOpenSeaLimit(openSea?.limit + 5)}>
				more 5 nft
			</button>
			{loading && <p>loading ... </p>}

			<ul className='flex flex-wrap gap-4 justify-center'>
				{openSea &&
					openSea?.results?.bundles?.map(open => {
						return (
							<li
								key={open.slug}
								className='border-4 rounded-2xl border-purpleLite border-solid p-4 w-96'>
								{open.asset_contract.collection?.name}
								<img
									src={open?.asset_contract.collection?.banner_image_url}
									alt=''
								/>
								<img src={open?.asset_contract.collection?.image_url} />
							</li>
						);
					})}
			</ul>
		</div>
	);
}

/**
 * banner /
 *  price /
 * description /
 * assest(imgaes) /
 * display(data)/
 */
export default App;
