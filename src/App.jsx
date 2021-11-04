import React from 'react';
import { Switch, Route } from 'react-router';
import { Header, Footer } from './layout';
// import { About, Home, Singer } from './pages';
import * as Pages from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Pages.About />
        </Route>
        <Route path="/albums">
          <Pages.Singer />
        </Route>
        <Route>
          <h3>Path does not exist</h3>
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
