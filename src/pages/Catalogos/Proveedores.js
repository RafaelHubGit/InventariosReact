import React, { Component } from 'react';

// componentes
import Header from '../../components/Header/Header';
import Table from '../../components/tableProveedor/table';
import FloatButton from '../../components/floatingButton/floatingButton';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import BodyMProveedor from '../../components/bodyModal/Proveedor';

import Modal from '../../components/Modales/Modal';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

class Proveedores extends Component{

    state={
        proveedores: []
    }

    proveedores = datos => {

        //Copia del estate actual
        const proveedores = [...this.state.proveedores, datos]

        //agregar el nuevo state 
        this.setState({
            proveedores
        })
    }

    render(){
        return(
            <div className="containerr">
                <Header titulo="Proveedores"/>
                <div className="container">
                    <SearchBtn />
                    <Table proveedores={this.state.proveedores} />
                    {/* <FloatButton /> */}

                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large red modal-trigger" href="#modal">
                            <i className="large material-icons">add</i>
                        </a>
                    </div>

                    <Modal titulo="Agrega Proveedor" >
                        <BodyMProveedor proveedores={this.proveedores} />
                    </Modal>
                </div>
                
            </div>            
        )
    }

};

export default Proveedores;