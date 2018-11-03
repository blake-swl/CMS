import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// import Routes from './components/App/index.jsx'

import App from './components/App/index.jsx';

// const App = (
//   <Routes />
// )

render(<Router><App /></Router>, document.getElementById('root'));