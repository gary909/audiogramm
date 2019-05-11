import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
// import registerServiceWorker from './registerServiceWorker';

if (!window.MediaRecorder) {
    window.MediaRecorder = require('audio-recorder-polyfill');
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
// registerServiceWorker();
