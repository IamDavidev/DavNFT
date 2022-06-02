import { Routes, Route, Navigate } from 'react-router-dom';
import Marketplace from '../pages/Marketplace.page';

const RoutesPublics = () => {
	return (
		<Routes>
			<Route path='/' element={<Marketplace />} />
			<Route path='/login' element={<p>login</p>} />
			<Route path='/register' element={<p>register</p>} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default RoutesPublics;
