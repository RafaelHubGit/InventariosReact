import React, { Component } from 'react';


// css
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

// js
var M = require('../../../node_modules/materialize-css/dist/js/materialize');

class floatingButton extends Component{

    hola = ( ) => {
        console.log("Hola");
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(elems, {
                direction: 'top'
            });

            var elemsT = document.querySelectorAll('.tooltipped');
            M.Tooltip.init(elemsT);

        });
    }

    render(){
        return (
            <div className="fixed-action-btn">
                <a className="btn-floating btn-large red darken-2 modal-trigger" href="#modal">
                    <i className="large material-icons">add</i>
                </a>
                {/* <ul>
                    <li>
                        <a className="btn-floating blue tooltipped"
                            data-position="left" 
                            data-tooltip="Nuevo">
                            <i className="material-icons">add</i>
                        </a>
                    </li>
                    <li>
                        <a className="btn-floating yellow tooltipped"
                            data-position="left" 
                            data-tooltip="Configuración">
                            <i className="material-icons">settings</i>
                        </a>
                    </li>
                    <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                    <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                </ul> */}
            </div>
        )
    }

}

export default floatingButton;