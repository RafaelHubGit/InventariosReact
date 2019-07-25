import React, { Component } from 'react';



// css
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './style.css';

// js
// import {collapsible} from '../../../node_modules/materialize-css/dist/js/materialize.js';
var M = require('../../../node_modules/materialize-css/dist/js/materialize.js');

var $ = require('jquery');



class SearchBtn extends Component {

    componentDidMount(){
        let idTabla = this.props.idTabla;
        
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        $("#inptBusqueda").keyup(function(){
            let _this = this;
            $.each($(`#${idTabla} tbody tr`), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
            $(this).hide();
            else
            $(this).show();
            });
        });
    
    }

    render(){
        return (
            <div className="">
                <div className="wrap">
                    <div className="search">
                        <input id="inptBusqueda" 
                                name="inptBusqueda"
                                type="text" className="searchTerm" 
                                autoComplete="off"
                                placeholder="Qué estas buscando?" />
                        <button type="submit" className="searchButton">
                            <i className="material-icons">search</i>
                        </button>
                    </div>
                </div>
                 {/* <ul className="collapsible">
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">search</i>Buscar . . .</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">search</i>
                                    <input id="inptBusqueda" 
                                            name="inptBusqueda"
                                            type="text" 
                                            className="validate" 
                                            autoComplete="off"/>
                                    <label htmlFor="inptBusqueda">Busqueda</label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </div>
        )
    }

}

export default SearchBtn;