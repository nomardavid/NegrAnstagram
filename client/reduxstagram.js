// let's go!
import React from 'react';

import { render } from 'react-dom';

//import the css
import css from './styles/style.styl';

//import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import Raven for Sentry
import Raven from 'raven-js';
import { sentry_url } from './data/config';

// Raven.config(sentry_url, {
//   tags: {
//     userlevel: 'editor'
//   }
// }).install();

// logException(new Error('Incomplete Data!'), {
//   email: 'omarmobgarcia@gmail.com'
// });

// Obvius, this does not exit
// console.log(window.user.doesNotExit);

// Raven.showReportDialog();

const router = (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={PhotoGrid}> </IndexRoute>
          <Route path="/view/:postId" component={Single}> </Route>
        </Route>
      </Router>
    </Provider>
)

render(router, document.getElementById('root'));

