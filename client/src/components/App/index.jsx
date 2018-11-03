import React from 'react';
import './reset.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Components
import Navigation from '../Navigation/';
import Home from '../Home/';
import Page from '../Page/';
import Login from '../Login/';


// const App = () => {
//   return(
//     <div>
//       <Navigation />
//       <Home/>
//       <Login />
//       <Page />
//     </div>
//   )
// }

// export default App;

const App = () => (
  <div>
    <Navigation />
    <Switch>
      {/* <Route path='/' component={Navigation} /> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/page" component={Page} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </div>
);
export default App;