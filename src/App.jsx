import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layouts/Navbar.layout';
import { useToogle } from './lib/hooks';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	const [isLogged, setIsLogged] = useToogle(false);
	return (
		<div className='p-2 bg-black min-h-screen w-ful text-light font-manrope overflow-hidden relative'>
			<Suspense fallback={<p>loading ...</p>}>
				<BrowserRouter>
					<Navbar />
					{isLogged ? <RoutesPrivates /> : <RoutesPublics />}
				</BrowserRouter>
			</Suspense>{' '}
			<button
				className='bg-black text-white text-sm font-bold relative z-20'
				onClick={() => setIsLogged.on()}>
				Sign In
			</button>
			<button className='relative z-20' onClick={() => setIsLogged.off()}>
				sign out
			</button>
		</div>
	);
}

export default App;
