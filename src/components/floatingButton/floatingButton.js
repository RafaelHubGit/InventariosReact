import React, { Component } from 'react';

// css
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

// js
var M = require('../../../node_modules/materialize-css/dist/js/materialize');

class floatingButton extends Component{

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {
                direction: 'top'
            });

            var elemsT = document.querySelectorAll('.tooltipped');
            var instances = M.Tooltip.init(elemsT);

        });
    }

    render(){
        return (
            <div className="fixed-action-btn">
                <a class="btn-floating btn-large red">
                    <i class="large material-icons">add</i>
                </a>
                <ul>
                    <li>
                        <a class="btn-floating blue tooltipped"
                            data-position="left" 
                            data-tooltip="Nuevo">
                            <i class="material-icons">add</i>
                        </a>
                    </li>
                    <li>
                        <a class="btn-floating yellow tooltipped"
                            data-position="left" 
                            data-tooltip="Configuración">
                            <i class="material-icons">settings</i>
                        </a>
                    </li>
                    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
                </ul>
            </div>
        )
    }

}

export default floatingButton;