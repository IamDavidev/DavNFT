import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	const [logged, setLogged] = useState(false);

	return (
		<div className='bg-black p-4  min-h-screen w-ful text-white'>
			<button onClick={() => setLogged(!logged)}>logged</button>
			<BrowserRouter>
				{logged ? <RoutesPrivates /> : <RoutesPublics />}
			</BrowserRouter>
		</div>
	);
}

export default App;
