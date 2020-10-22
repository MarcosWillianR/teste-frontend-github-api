import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Repositories from '../pages/Repositories';
import StarredRepositories from '../pages/StarredRepositories';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:user/repositories" component={Repositories} />
      <Route
        exact
        path="/:user/repositories/starred"
        component={StarredRepositories}
      />

      <Route path="*" component={() => <h1>Page not Found!</h1>} />
    </Switch>
  );
};

export default Routes;
