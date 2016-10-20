import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import MainPage from './pages/mainPage.js';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainPage} />
      </Router>
    )
  }
}

export default Routes
