import React, { Component } from 'react';

// css
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './style.css';

// js
var M = require('materialize-css');

class Modal extends Component{

   componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });
   }

    render(){
        return(
            <div id="modal" className="modal">
                <div className="modal-title">
                    <div>{this.props.titulo}</div>
                    <button className="modal-close"><i className="material-icons">close</i></button>
                </div>
                <div className="modal-content">
                    {this.props.children}
                </div>
                {/* <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div> */}
            </div>
        )
    }

}

export default Modal;