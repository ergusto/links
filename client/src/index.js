import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/startup';
import * as serviceWorker from './serviceWorker';

import 'typeface-raleway';
import 'normalize.css/normalize.css';
import './css/site.scss';
import 'whatwg-fetch';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
