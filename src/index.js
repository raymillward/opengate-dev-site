import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import './index.css';
import 'typeface-roboto';
import 'typeface-lobster';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import opengateAppReducer from './reducers/opengateApp.reducer';
import * as serviceWorker from './serviceWorker';
import HomePageComponent from './homepage/HomePage';
import MenuBarComponent from './menuBar/MenuBar';
import VisionPage from './vision/VisionPage';

const history = createBrowserHistory();
const router = routerMiddleware(history);

const middleware = [router, thunk];

const store = createStore(
  opengateAppReducer(history),
  compose(applyMiddleware(...middleware))
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#549885',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <div>
          <MenuBarComponent />
          <Route path="/" component={HomePageComponent} exact />
          <Route path="/our-vision-and-values" component={VisionPage} />
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
