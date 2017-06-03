import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import About from './Components/About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './boxe.css';
import {Link, Route, BrowserRouter as Router,Switch} from "react-router-dom";





ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
