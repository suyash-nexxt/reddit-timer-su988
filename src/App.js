import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Info from './Info';
import Search from './Search';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Info />
        </Route>
        <Route path="/search/:slug">
          <Search />
        </Route>
        <Route path="/search" />
        <Route path="/terms" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
