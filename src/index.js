import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import rootReducer from './redux/reducers';
import rootEpic from './redux/epics'; // remember this defaults to the index file in the folder

const loggerMiddleware = createLogger({});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    createEpicMiddleware(rootEpic), loggerMiddleware
  )
);

// I make a new component here that wraps the App component in a provider, THIS provider
// is what allows redux to communicate with the application on the whole
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
