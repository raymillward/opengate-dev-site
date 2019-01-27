import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import 'typeface-roboto';
import 'typeface-lobster';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import opengateAppReducer from './reducers/opengateApp.reducer'
import * as serviceWorker from './serviceWorker';
import HomePageComponent from './homepage/HomePage';
import MenuBarComponent from './menuBar/MenuBar';
import VisionPage from './vision/VisionPage';

const store = createStore(opengateAppReducer)

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#549885'
    },
    secondary: {
      main: '#f50057',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <MenuBarComponent />
          <Route path="/" component={HomePageComponent} exact />
          <Route path="/our-vision-and-values" component={VisionPage} />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
