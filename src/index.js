import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './style.css';

import App from './components/App/App';

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);

