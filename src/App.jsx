import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './layouts/Navbar.layout';

// import { useSelector } from 'react-redux';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';
import { supabase } from './config';

function App() {
	// state user
	// const { isLoggedIn } = useSelector(state => state.user);

	const isLoggedIn = true;

	const [session, setSession] = useState(null);

	useEffect(() => {
		setSession(supabase.auth.session());
		console.log('session:', session);

		supabase.auth.onAuthStateChange((_event, session) => {
			console.log('supabase.auth.onAuthStateChange'); // THIS DOES NOT RUN WHEN USER LOGS IN
			setSession(session);
		});
	}, []);

	console.log('>>session - ', session);

	// const [user, setUser] = useState()
	// const [loading, setLoading] = useState(true)

	// useEffect(() => {
	//   // Check active sessions and sets the user
	//   const session = supabase.auth.session()

	//   setUser(session?.user ?? null)
	//   setLoading(false)

	//   // Listen for changes on auth state (logged in, signed out, etc.)
	//   const { data: listener } = supabase.auth.onAuthStateChange(
	// 	async (event, session) => {
	// 	  setUser(session?.user ?? null)
	// 	  setLoading(false)
	// 	}
	//   )

	//   return () => {
	// 	listener?.unsubscribe()
	//   }
	// }, [])

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
