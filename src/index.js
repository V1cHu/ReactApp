import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { homeReducer } from './reducers/homeReducer';
import { userReducer } from './reducers/userReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, IndexRedirect } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        userReducer: userReducer,
        homeReducer: homeReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));