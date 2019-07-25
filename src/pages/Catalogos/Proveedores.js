import React, { Component } from 'react';

// componentes
// import Header from '../../components/Header/Header';
import Table from '../../components/Tables/tableProveedores';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import BodyMProveedor from '../../components/bodyModal/Proveedor';

import Modal from '../../components/Modales/Modal2';

//Importando SweetAlert2
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
const Swal = require('../../../node_modules/sweetalert2/dist/sweetalert2.all.min.js');

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

class Proveedores extends Component{

    state={
        proveedores: [], 
        proveedor: {
            _id: '', 
            nombre: '', 
            edit: false
        }, 
        modalIsOpen: false
    }

    constructor(props){
        super(props);
        // console.log("Contructor : ", props);
        // this.getProveedores();
    }

    componentDidMount(){
        console.log("MOUNT");
        this.getProveedores();

    }

    componentDidUpdate(prevProps, prevState){
        console.log("UPDATE ");
        // this.getProveedores;
    }

    handleInsert = async ( datos ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/proveedor`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({nombre: datos.nombre})
        });

        const data = await response.json();

        if(!data.ok){
            Swal.fire(
                'No se pudo insertar la información!',
                'Intentelo de nuevo, si el error persiste ponganse en contacto con el Administrador',
                'error'
            )
            return
        }

        //Copia del estate actual
        const proveedores = [...this.state.proveedores, data.proveedor]

        //agregar el nuevo state 
        this.setState({
            proveedores, 
            modalIsOpen: false
        });

        Swal.fire(
            'Información Agregada!',
            '',
            'success'
        )
    }

    handleEdit = async ( datos ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/proveedor/${datos._id}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({nombre: datos.nombre})
        });

        const data = await response.json();

        if(!data.ok){
            Swal.fire(
                'No se pudo editar la información!',
                'Intentelo de nuevo, si el error persiste ponganse en contacto con el Administrador',
                'error'
            )
            return
        }


        // Busca y edita la infomacion en el state
        const proveedores = [...this.state.proveedores];

        let dataPosition = proveedores.findIndex(proveedor => proveedor._id === datos._id); 

        proveedores[dataPosition].nombre = datos.nombre;

        this.setState({
            proveedores, 
            proveedor: {
                _id: '', 
                nombre: '', 
                edit: false
            }, 
            modalIsOpen: false
        })

        Swal.fire(
            'Información Modificada!',
            '',
            'success'
        )
    }

    handleDelete = async( datos ) => {
        const response = await fetch(`${process.env.REACT_APP_URL}/services/proveedor/${datos._id}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        });

        const data = await response.json();

        if(!data.ok){
            Swal.fire(
                'No se pudo eliminar la información!',
                'Intentelo de nuevo, si el error persiste ponganse en contacto con el Administrador',
                'error'
            )
            return
        }

        // Busca y elimina la informacion en el state
        const proveedoresActuales = [...this.state.proveedores];

        const proveedores = proveedoresActuales.filter(proveedor => proveedor._id !== datos._id); 

        this.setState({
            proveedores, 
            proveedor: {
                _id: '', 
                nombre: '', 
                edit: false
            }, 
            modalIsOpen: false
        })

        Swal.fire(
            'Información Eliminada!',
            '',
            'success'
        )

    }
    


    getProveedores = async () => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/proveedor`, {
            method: "GET"
        });

        const data = await response.json();

        this.setState({
            proveedores: data.proveedor
        });

    }

    

    sendInfoModal = ( nombre, id ) => {
        this.openModal();
        console.log("CLICK : ", nombre, id);
        this.setState({
            proveedor:{
                _id: id, 
                nombre: nombre, 
                edit: true
            }
        })
    }

    openModal = e => {
        this.setState({ modalIsOpen: true});
    }

    closeModal = e => {
        this.setState({ modalIsOpen: false});
    }

    render(){
        return(
            <div className="container-fluid">
                {/* <Header titulo="Proveedores"/> */}
                <div className="">                    
                    <SearchBtn idTabla={"tbale"}/>
                    <Table proveedores={this.state.proveedores} sendInfoModal={this.sendInfoModal} />
                    {/* <FloatButton /> */}

                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large red modal-trigger" href="#modal"
                            onClick={this.openModal}>
                            <i className="large material-icons">add</i>
                        </a>
                    </div>

                    <Modal isOpen={this.state.modalIsOpen} onClose={this.closeModal} titulo={"Titulo"}>
                        <BodyMProveedor handleInsert={this.handleInsert} 
                                        handleEdit={this.handleEdit} 
                                        handleDelete={this.handleDelete}
                                        proveedor={this.state.proveedor}/>
                    </Modal>

                    {/* <Modal titulo="Agrega Proveedor" >
                        <BodyMProveedor proveedores={this.proveedores} proveedor={this.state.proveedor}/>
                    </Modal> */}
                </div>
                
            </div>            
        )
    }

};

export default Proveedores;