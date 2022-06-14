import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layouts/Navbar.layout';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	const isLogged = false;
	return (
		<div className='p-2 bg-black min-h-screen w-ful text-light font-manrope overflow-hidden relative'>
			<Navbar />
			<Suspense fallback={<p>loading ...</p>}>
				<BrowserRouter>
					{isLogged ? <RoutesPrivates /> : <RoutesPublics />}
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
