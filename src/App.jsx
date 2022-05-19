import useOpenSea from './lib/hooks/useOpenSea';

function App() {
	// const [openSea, setOpenSea] = useState([]);
	const { openSea } = useOpenSea();
	console.log('>openSea = ', openSea);

	return (
		<div className='bg-black p-4  min-h-screen w-ful text-white'>
			<h1 className='text-center text-2xl text-purple'>App OpenSea</h1>
			<ul>
				{openSea &&
					openSea?.bundles?.map(open => {
						return <li key={open.slug}>{open.name}</li>;
					})}
			</ul>
		</div>
	);
}

export default App;
