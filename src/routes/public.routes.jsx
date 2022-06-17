import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { SignIn } from '../pages';
import LandingPage from '../pages/Lading/Landing.page';

const SignIn = lazy(() => import('../pages/Login/SignIn.page'));
const LogIn = lazy(() => import('../pages/Login/LogIn.page'));

const RoutesPublics = () => {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/marketplace/sign-in' element={<SignIn />} />
			<Route path='/marketplace/log-in' element={<LogIn />} />
			<Route path='*' element={<Navigate to='/marketplace/log-in' replace />} />
		</Routes>
	);
};

export default RoutesPublics;
