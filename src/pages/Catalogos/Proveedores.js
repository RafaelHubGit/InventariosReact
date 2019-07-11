import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// componentes
import Header from '../../components/Header/Header';
import Table from '../../components/tableProveedor/table';
import FloatButton from '../../components/floatingButton/floatingButton';
import SearchBtn from '../../components/SearchBtn/SearchBtn';

import Modal from '../../components/Modales/Modal';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Proveedores extends Component{

    render(){
        return(
            <div className="container-fluid">
                <Header titulo="Proveedores"/>
                <SearchBtn />
                <Table />
                {/* <FloatButton /> */}

                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red modal-trigger" href="#modal">
                        <i className="large material-icons">add</i>
                    </a>
                </div>

                <Modal titulo="Agrega Proveedor" >
                    <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" class="validate" />
                        <label for="icon_prefix">Proveedor</label>
                    </div>
                </Modal>
            </div>            
        )
    }

};

export default Proveedores;