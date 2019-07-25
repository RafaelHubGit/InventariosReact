import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './styles.css';

var userImg = require('../../images/yuna.jpg');
var officeImg = require('../../images/office.jpeg');
// js
// import '../../../node_modules/bootstrap/dist/js/bootstrap';
var M = require('../../../node_modules/materialize-css/dist/js/materialize');



class Header extends Component{
    state={
        titulo: 'Bienvenido'
    }

    componentDidMount(){
        // Inicializa el SLIDENAV
        var options = {
            edge: 'left',
            closeOnClick: false
        }
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, options);

        // Inicializa boton dropdown
        var dropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdown);
    }

    changeTitutlo = ( titulo ) =>{
        this.setState({
            titulo
        })
    }

    render(){
        return(

            <div className="">
                <nav className="white">
                    <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">{this.state.titulo}</a>
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>

                    <ul className="right hide-on-med-and-down">
                        {/* <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li> */}
                        {/* <!-- Dropdown Trigger --> */}
                        <li>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                                Catálogos<i className="material-icons right">arrow_drop_down</i>
                            </a>
                        </li>
                        <li> 
                            <a className="btn-floating waves-effect black waves-light">
                                <img className="circle responsive-img" src={userImg}></img>
                            </a>
                        </li>
                        
                    </ul>
                    </div>
                </nav>

                {/* Son los valores que va a tener el dropdown de categoria */}
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/Catalogos/Categorias" onClick={() => this.changeTitutlo("Categorías")}>Categorías</Link></li>
                    <li><Link to="/Catalogos/Productos" onClick={() => this.changeTitutlo("Productos")}>Productos</Link></li>
                    <li><Link to="/Catalogos/Proveedores" onClick={() => this.changeTitutlo("Proveedores")}>Proveedores</Link></li>
                </ul>

                {/* Es la informacion que se muestra en el menu con dispositivo mobil */}
                {/* <ul id="mobile-demo" className="sidenav" >
                    <li><Link to="/Catalogos/Categorias" onClick={() => {this.changeTitutlo("Categorías"); this.closeNavBar()}}>Categorías</Link></li>
                    <li><Link to="/Catalogos/Productos" onClick={() => this.closeNavBar()}>Productos</Link></li>
                    <li><Link to="/Catalogos/Proveedores" onClick={() => this.changeTitutlo("Proveedores")}>Proveedores</Link></li>
                </ul> */}
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={officeImg}/>
                            </div>
                            <a href="#user"><img className="circle" src={userImg}/></a>
                            <a href="#name"><span className="white-text name">John Doe</span></a>
                            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    {/* <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li> */}
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Catálogos</a></li>
                    <li><Link to="/Catalogos/Categorias" className="sidenav-close" onClick={() => {this.changeTitutlo("Categorías")}}>Categorías</Link></li>
                    <li><Link to="/Catalogos/Productos" className="sidenav-close" onClick={() => this.changeTitutlo("Productos")}>Productos</Link></li>
                    <li><Link to="/Catalogos/Proveedores" className="sidenav-close" onClick={() => this.changeTitutlo("Proveedores")}>Proveedores</Link></li>
                </ul>
            </div>
            
        )
    }

}

export default Header;