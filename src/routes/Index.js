import { Switch, Route } from 'react-router-dom';
import Checkout from '../views/Checkout';
import Order from '../views/Order';
import Welcome from '../views/Welcome';
import React from 'react';
import Category from '../views/Category';
import Language from '../views/Language';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/categories" component={Category} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/language" exact component={Language} />
      <Route path="/order" exact component={Order} />
    </Switch>
  );
};

export default Routes;
