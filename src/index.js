import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Page from './components/Page/Page';

const App = () => (
  <React.Fragment>
    <Header />
    <Page />
    <Footer />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));

console.log('JS started.');
