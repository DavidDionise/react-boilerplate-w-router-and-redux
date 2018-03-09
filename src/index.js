import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './reducers/store';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Routes />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

if(module.hot) {
  module.hot.accept('./Routes', () => {
    render();
  });
}
