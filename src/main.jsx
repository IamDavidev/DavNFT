import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';

import App from './App';
import './index.css';

import { getLibrary } from './config/web3.config';
import ReduxProvider from './containers/ReduxProvider.container';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Web3ReactProvider getLibrary={getLibrary}>
			<ReduxProvider>
				<App />
			</ReduxProvider>
		</Web3ReactProvider>
	</React.StrictMode>
);
