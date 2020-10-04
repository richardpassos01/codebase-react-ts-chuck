import Home from '../../pages/Home/Home';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { APP_ROUTES } from '../../utils/enums/internal-routes';
import NotFound from '../../pages/NotFound';

const App: React.FC = () => (
  <Switch>
    <Route exact path={APP_ROUTES.HOME} component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
