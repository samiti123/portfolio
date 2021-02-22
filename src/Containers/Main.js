import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import View from '../Components/View';

function Main({ state }) {
  return (
    <Switch>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/:title'>
        <View state={state} />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  );
}

export default Main;
