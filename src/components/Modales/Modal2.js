import React from 'react';
import ReactDOM from 'react-dom';

// css
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import './style.css';

// js
// var M = require('materialize-css');

function Modal2 (props){

    if(!props.isOpen){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal-overlay">
            <div id="" className="Modal Modal-lg">
                <div className="Modal-title">
                    <div>{props.titulo}</div>
                    <button className="Modal-close"
                            onClick={props.onClose}>
                        <i className="material-icons">
                            close
                        </i>
                    </button>
                </div>
                <div className="Modal-content">
                    {props.children}
                </div>
            </div>
        </div>,
            document.getElementById('modal')
    )

}

export default Modal2;