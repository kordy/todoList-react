import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory, browserHistory  } from 'react-router';
import routes from './routes.js';
import { Provider, connect } from 'react-redux';
import store from './store/store';

ReactDOM.render(
		<Provider store={store}>
			<Router routes={routes} history={browserHistory}/>
		</Provider>,
		document.getElementById('application')
);
