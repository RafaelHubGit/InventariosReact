import React, { Component } from 'react';



// css
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './style.css';

// js
// import {collapsible} from '../../../node_modules/materialize-css/dist/js/materialize.js';
var M = require('../../../node_modules/materialize-css/dist/js/materialize.js');

var $ = require('jquery');



class SearchBtn extends Component {

    componentDidMount(){
        
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems);


        $("#inptBusqueda").keyup(function(){
            let _this = this;
            $.each($("#tbale tbody tr"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
            $(this).hide();
            else
            $(this).show();
            });
        });
    
    }

    render(){
        return (
            <div className="container-fluid">
                 <ul class="collapsible">
                    <li>
                        <div class="collapsible-header"><i class="material-icons">search</i>Buscar . . .</div>
                        <div class="collapsible-body">
                        <input type="text" id="inptBusqueda"
                        placeholder="Buscar..." 
                        title="Busqueda..." />
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

}

export default SearchBtn;