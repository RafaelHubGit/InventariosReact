import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Header
import Header from '../components/Header/Header';

// Pages
import Proveedores from '../pages/Catalogos/Proveedores';
import Categorias from '../pages/Catalogos/Categorias';
import Productos from '../pages/Catalogos/Productos';

import P404 from '../pages/error/404/404';


function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/Catalogos/Proveedores" component={Proveedores} />
        <Route exact path="/Catalogos/Categorias" component={Categorias} />
        <Route exact path="/Catalogos/Productos" component={Productos} />

        <Route path="" component={P404} />
      </Switch>
    </Router>
  );
}

export default App;
