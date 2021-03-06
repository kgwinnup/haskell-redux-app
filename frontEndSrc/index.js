import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import App from './components/app';
import Login from './components/login';
import Landing from './components/landing';
import thunk from 'redux-thunk';
import { GET_COOKIE } from './middleware/http';
import { setFromCookie } from './actions/user';

// import reducers
import user from './reducers/user';

require('./stylesheets/semantic.less');
require('./index.html');

const history = createHistory();
const middleware = routerMiddleware(history)

const pushRoute = {
  go: (r) => {push(r)}
}

const store = createStore(
    combineReducers({
      user: user,
      router: routerReducer,
      addr: pushRoute
    }),
    applyMiddleware(thunk, middleware),
);

const userId = GET_COOKIE('userId');
if (userId != null) {
    store.dispatch(setFromCookie(userId, ""));
    store.dispatch(push("/home"));
}

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={App} />
          <Route exact path="/login" component={Login} />
        </div>
      </ConnectedRouter>
    </Provider>,
    document.body
);
