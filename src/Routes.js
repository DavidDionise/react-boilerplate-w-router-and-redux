import React from 'react';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import {
  App,
  SignInContainer
} from 'components';

class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/admin' component={SignInContainer} />
      </Router>
    );
  }
}

export default Routes;
