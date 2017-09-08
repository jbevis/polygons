import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RootReducer from './reducers/RootReducer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, {}, devTools(applyMiddleware(thunk)));



ReactDOM.render(
	<Provider store={ store }>
		<AppContainer />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
