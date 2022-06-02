import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	const [logged, setLogged] = useState(false);

	return (
		<div className='bg-black p-4  min-h-screen w-ful text-light font-manrope overflow-hidden'>
			<button
				onClick={() => setLogged(!logged)}
				class='bg-glow_gree px-4 py-2 rounded-2xl text-dark font-semibold '>
				logged
			</button>
			<BrowserRouter>
				{logged ? <RoutesPrivates /> : <RoutesPublics />}
			</BrowserRouter>
		</div>
	);
}

export default App;
