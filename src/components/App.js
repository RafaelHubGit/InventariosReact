import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// css

// Pages
import Proveedores from '../pages/Catalogos/Proveedores';
import Categorias from '../pages/Catalogos/Categorias';
import Productos from '../pages/Catalogos/Productos';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/Catalogos/Proveedores" component={Proveedores} />
        <Route exact path="/Catalogos/Categorias" component={Categorias} />
        <Route exact path="/Catalogos/Productos" component={Productos} />
      </Switch>
    </Router>
  );
}

export default App;
