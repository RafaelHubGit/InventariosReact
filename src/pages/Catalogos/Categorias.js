import React, { Component } from 'react';

// componentes
import Header from '../../components/Header/Header';
import Table from '../../components/Tables/tableCategorias';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import BodyMCategoria from '../../components/bodyModal/Categoria';

import Modal from '../../components/Modales/Modal2';

//Importando SweetAlert2
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
const Swal = require('sweetalert2/dist/sweetalert2.all.min');

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

class Categorias extends Component{

    state={
        categorias: [], 
        categoria: {
            _id: '', 
            nombre: '',
            descripcion: '',
            edit: false
        }, 
        modalIsOpen: false
    }

    componentDidMount(){
        console.log("MOUNT");
        this.getCategorias();

    }
  
    handleInsert = async ( datos ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/categoria`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({nombre: datos.nombre, descripcion: datos.descripcion})
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
        const categorias = [...this.state.categorias, data.categoria]

        //agregar el nuevo state 
        this.setState({
            categorias, 
            modalIsOpen: false
        });

        Swal.fire(
            'Información Agregada!',
            '',
            'success'
        )
    }

    handleEdit = async ( datos ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/categoria/${datos._id}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({nombre: datos.nombre, descripcion: datos.descripcion})
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
        const categorias = [...this.state.categorias];

        let dataPosition = categorias.findIndex(categoria => categoria._id === datos._id); 

        categorias[dataPosition].nombre = datos.nombre;
        categorias[dataPosition].descripcion = datos.descripcion;

        this.setState({
            categorias, 
            categoria: {
                _id: '', 
                nombre: '',
                descripcion: '',
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
        const response = await fetch(`${process.env.REACT_APP_URL}/services/categoria/${datos._id}`,{
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
        const categoriaActuales = [...this.state.categorias];

        const categorias = categoriaActuales.filter(categoria => categoria._id !== datos._id); 

        this.setState({
            categorias, 
            categoria: {
                _id: '', 
                nombre: '',
                descripcion: '',
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
    


    getCategorias = async () => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/categoria`, {
            method: "GET"
        });

        const data = await response.json();

        console.log("CATEGORIAS : ",data );

        this.setState({
            categorias: data.categoria
        });

    }

    

    sendInfoModal = ( nombre, id, descripcion ) => {
        this.openModal();
        console.log("CLICK : ", nombre, id);
        this.setState({
            categoria:{
                _id: id, 
                nombre: nombre,
                descripcion: descripcion,
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
            <div className="containerr">
                <Header titulo="Categorias"/>
                <div className="container">
                    <SearchBtn idTabla={"tableCategoria"} />
                    <Table categorias={this.state.categorias} sendInfoModal={this.sendInfoModal} />
                    {/* <FloatButton /> */}

                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large red modal-trigger" href="#modal"
                            onClick={this.openModal}>
                            <i className="large material-icons">add</i>
                        </a>
                    </div>

                    <Modal isOpen={this.state.modalIsOpen} onClose={this.closeModal} titulo={"Titulo"}>
                        <BodyMCategoria handleInsert={this.handleInsert} 
                                        handleEdit={this.handleEdit} 
                                        handleDelete={this.handleDelete}
                                        categoria={this.state.categoria}/>
                    </Modal>

                    {/* <Modal titulo="Agrega categoria" >
                        <BodyMCategoria categoria={this.categoria} categoria={this.state.categoria}/>
                    </Modal> */}
                </div>
                
            </div>            
        )
    }

};

export default Categorias;