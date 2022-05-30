import CardCollection from './components/CardCollection.component';
import useOpenSea from './lib/hooks/useOpenSea';

function App() {
	const { openSea, loading, setOpenSeaLimit } = useOpenSea();

	console.log(openSea);

	return (
		<div className='bg-black p-4  min-h-screen w-ful text-white'>
			<h1 className='text-center text-2xl text-purple'>App OpenSea</h1>
			<button onClick={() => setOpenSeaLimit(openSea?.limit + 5)}>
				more 5 nft
			</button>
			{loading && <p>loading ... </p>}

			{/* <ul className='flex flex-wrap gap-4 justify-center'>
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
			</ul> */}
			<section className='flex flex-wrap justify-center items-center gap-6'>
				{openSea?.results?.collections.map(collecton => {
					return (
						<CardCollection
							key={collecton.id}
							banner={collecton.banner}
							creator={collecton.creator}
							image={collecton.imgCollection}
							desciption={collecton.description}
							name={collecton.nameCollection}
						/>
					);
				})}
			</section>

			{/* <CardCollection /> */}
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
