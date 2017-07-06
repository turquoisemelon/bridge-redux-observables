import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './redux/reducers';
import { getRecipeByNameEpic } from './redux/epics/recipe.epics'; // remember this defaults to the index file in the folder

const store = createStore(
  rootReducer,
  // you should try adding the redux-logger middleware!
  applyMiddleware(createEpicMiddleware(getRecipeByNameEpic)),
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
