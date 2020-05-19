import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Css/index.css';
import AppRouter from '../src/routes/AppRouter';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {getBlogs} from './actions/increment';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/Reducer';

const store=createStore(combineReducers,applyMiddleware(thunk));
store.dispatch(getBlogs()).then(()=>{
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
});


serviceWorker.unregister();
