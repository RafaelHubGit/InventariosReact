import React, { Component } from 'react';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './styles.css';

// js
// import '../../../node_modules/bootstrap/dist/js/bootstrap';
var M = require('../../../node_modules/materialize-css/dist/js/materialize');

class Header extends Component{

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        });
    }

    render(){
        return(
            // <div className="container-fluid">
            //     <div className="backGroundHeader">
            //         <div className="header">{this.props.titulo}</div>
            //     </div>
            // </div>

            <div className="">
                <nav>
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo"><i className="material-icons">label</i>Proveedores</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li> 
                            <a className="btn-floating blue tooltipped">
                                <i className="material-icons">build</i>
                            </a>
                        </li>
                        {/* <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li> */}
                    </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">Configuración</a></li>
                    {/* <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li> */}
                </ul>
            </div>
            
        )
    }

}

export default Header;