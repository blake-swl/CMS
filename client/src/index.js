import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import "./components/App/reset.scss";

import App from './components/App/index.jsx';
import Navigation from './components/Navigation/index';

render(<Router><App /></Router>, document.getElementById('root'));
// render(<Navigation />, document.getElementById('root'));