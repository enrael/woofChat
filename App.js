//@flow
import React from 'react';
import {
	createStore,
	applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import appReducer from './src/appReducer';
import AppWithNavigationState, { navMiddlewere } from './src/navigator/AppWithNavigationState'

const store = createStore(
	appReducer,
	applyMiddleware(navMiddlewere),
);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

