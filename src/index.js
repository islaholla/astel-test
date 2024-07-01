import React from 'react';
import ReactDOM from 'react-dom/client';
import { compose,applyMiddleware,createStore } from 'redux';
import { Provider } from 'react-redux';
import {thunk} from "redux-thunk";
import reducer from './redux/reducer';
import './index.css';
import Main from './Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer,compose(applyMiddleware(thunk)))

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Main/>
  </Provider>
  </React.StrictMode>
);