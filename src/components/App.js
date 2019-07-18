import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// css

// Pages
import Proveedores from '../pages/Catalogos/Proveedores';
import Categorias from '../pages/Catalogos/Categorias';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/Catalogos/Proveedores" component={Proveedores} />
        <Route exact path="/Catalogos/Categorias" component={Categorias} />
      </Switch>
    </Router>
  );
}

export default App;
