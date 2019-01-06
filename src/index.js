import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';

import opengateAppReducer from './reducers/opengateApp.reducer'
import * as serviceWorker from './serviceWorker';
import HomePageComponent from './homepage/HomePage';

const store = createStore(opengateAppReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={HomePageComponent} />
        <Route path="/app" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
