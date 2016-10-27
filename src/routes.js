import React from 'react';
import {Route, IndexRoute} from 'react-router';
import MainPage from './pages/mainPage.js';

const routes = (
    <div>
      <Route path="/" component={MainPage} />
    </div>
);

export default routes;
