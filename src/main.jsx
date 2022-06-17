import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './config/web3.config';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Web3ReactProvider getLibrary={getLibrary}>
			<App />
		</Web3ReactProvider>
	</React.StrictMode>
);
