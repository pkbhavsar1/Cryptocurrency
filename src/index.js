import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../src/app/store';
import { Provider } from 'react-redux';

import App from './App';

ReactDom.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    , document.getElementById('root'));