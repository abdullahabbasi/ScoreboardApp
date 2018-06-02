import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import  playerReducer from "./reducers/player";
import { createStore } from "redux";


const store = createStore(playerReducer,
  window.devToolsExtension && window.devToolsExtension()
);
console.log('store ', store);
ReactDOM.render(<Provider store={store}>
                    <App title="My Dashboard"/>
                </Provider>, document.getElementById('root'));

registerServiceWorker();
