import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.js'
import { Provider, connect } from 'react-redux'
import store from './store/store.js';

ReactDom.render(
		<Provider store={store}>
			<Routes/>
		</Provider>,
		document.getElementById('application')
);
