import React, { Component } from 'react';
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
            <div id="" className="Modal">
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
                {/* <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div> */}
            </div>
        </div>,
        // <div className="Modal">
        //     <div class="Modal__container">
        //     <h4>Modal Header</h4>
        //      <p>A bunch of text</p>
        //     </div>
        // </div>,
            document.getElementById('modal')
    )

}

export default Modal2;