import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://qayib-app.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
