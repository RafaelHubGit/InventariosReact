import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// css
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
// import './style.css';

// js
// var M = require('materialize-css');

function Modal2 (props){

    if(!props.isOpen){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal">
            <div class="Modal-content">
            <h4>Modal Header</h4>
             <p>A bunch of text</p>
            </div>
            <div class="Modal-footer">
             <a href="#!" class="Modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>,
            document.getElementById('modal')
    )

}

export default Modal2;