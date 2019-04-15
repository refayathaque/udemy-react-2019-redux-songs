import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    {/* Any component in our application can access the Redux store because the entire application is being wrapped by the Provider tag/component */}
    <App />
  </Provider>,
  document.querySelector('#root')
);
