import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useToggle from './lib/hooks/useToogle';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	const [logged, setLogged] = useToggle(false);
	console.log(logged);
	return (
		<div className='bg-black p-4  min-h-screen w-ful text-light font-manrope overflow-hidden'>
			<button
				onClick={() => setLogged.toggle()}
				className='bg-glow_gree px-4 py-2 rounded-2xl text-dark font-semibold relative z-10'>
				logged
			</button>
			<Suspense fallback={<p>loading ...</p>}>
				<BrowserRouter>
					{logged ? <RoutesPrivates /> : <RoutesPublics />}
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
