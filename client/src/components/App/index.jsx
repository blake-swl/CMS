import React from 'react';
import './reset.scss';

// Components
import Navigation from '../Navigation/';
import TableOfContents from '../TableOfContents/';
import Page from '../Page/';

const App = () => {
  return(
    <div>
      <Navigation />
      <TableOfContents />
      <Page />
    </div>
  )
}

export default App;