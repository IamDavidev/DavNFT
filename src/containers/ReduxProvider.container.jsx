// import { Children } from 'react';
import { Provider } from 'react-redux';
// import store from '@redux/store';
import store from '../lib/redux/store.redux';

const ReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
