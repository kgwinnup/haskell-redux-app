import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import App from './components/app';
import thunk from 'redux-thunk';
import { GET_COOKIE } from './middleware/http';
import { setFromCookie } from './actions/user';

// import reducers
import user from './reducers/user';

require('./stylesheets/custom.scss');
require('./index.html');

const store = createStore(
    combineReducers({
        user
    }),
    applyMiddleware(thunk)
);

const userId = GET_COOKIE('userId');
//const name = GET_COOKIE('userId');

if (userId != null) {
    store.dispatch(setFromCookie(userId, ""));
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('mount')
);
