import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import GridCollections from '../layouts/GridCollections';

const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard.page'));

const RoutesPrivates = () => {
	return (
		<Routes>
			<Route path='/dashboard/collections/' element={<GridCollections />} />
			<Route path='/collection/:address/:slug' element={<Dashboard />} />
			<Route
				path='*'
				element={<Navigate to='/dashboard/collections' replace />}
			/>
		</Routes>
	);
};

export default RoutesPrivates;
