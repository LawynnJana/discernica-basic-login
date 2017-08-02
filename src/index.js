import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {browserHistory} from 'react-router';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducers); //ARG: reducers

ReactDOM.render(
	<Provider store={store}>
	  <BrowserRouter>
	   <App className="container"/>
	  </BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
