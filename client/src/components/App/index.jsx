import React from 'react';
import './reset.scss';

// Components
import Navigation from '../Navigation/';
import Home from '../Home/';
import Page from '../Page/';
import Login from '../Login/';

const App = () => {
  return(
    <div>
      <Navigation />
      <Home/>
      {/* <Login />
      <Page /> */}
    </div>
  )
}

export default App;