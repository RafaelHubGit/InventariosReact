import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// css

// Pages
import Proveedores from '../pages/Catalogos/Proveedores';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/Catalogos/Proveedores" component={Proveedores} />
      </Switch>
    </Router>
  );
}

export default App;
