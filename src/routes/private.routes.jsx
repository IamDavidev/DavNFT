import { Routes, Route, Navigate } from 'react-router-dom';
import GridCollections from '../layouts/GridCollections';

const RoutesPrivates = () => {
	return (
		<Routes>
			<Route path='/collections/' element={<GridCollections />} />
			<Route path='*' element={<Navigate to='/collections' replace />} />
		</Routes>
	);
};

export default RoutesPrivates;
