import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/';

let store = createStore(reducers);




ReactDOM.render(
	<Provider store ={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();