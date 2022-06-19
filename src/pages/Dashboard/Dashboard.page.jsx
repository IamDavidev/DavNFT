import { useParams } from 'react-router-dom';

import GridItemsCollections from '../../layouts/ItemsCollections.layout';
import StatiticsCollection from '../../layouts/StatiticsCollection.layout';

// dashboard/collection/:id
const Dashboard = () => {
	const { slug, address } = useParams();
	return (
		<div>
			<header>
				<StatiticsCollection slug={slug} />
			</header>
			<footer>{<GridItemsCollections address={address} />}</footer>
		</div>
	);
};

export default Dashboard;
