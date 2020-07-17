import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './store/reducers';
// import 'react-bootstrap/dist/';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDom.render(
         <Provider store={store}>
          <App/>
         </Provider>,
          document.getElementById('app')
    );
