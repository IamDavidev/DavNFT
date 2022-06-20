import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layouts/Navbar.layout';

import { useSelector } from 'react-redux';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	// const [isLogged, setIsLogged] = useToogle(false);
	const { isLoggedIn } = useSelector(state => state.user);
	console.log(useSelector(state => state.user));
	return (
		<div className='p-2 bg-black min-h-screen w-ful text-light font-manrope overflow-hidden relative pb-8'>
			<Suspense fallback={<p>loading ...</p>}>
				<BrowserRouter>
					<Navbar />
					{isLoggedIn ? <RoutesPrivates /> : <RoutesPublics />}
				</BrowserRouter>
			</Suspense>{' '}
		</div>
	);
}

export default App;
