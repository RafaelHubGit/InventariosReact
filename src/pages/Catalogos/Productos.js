import React, { Component } from 'react';

// componentes
import Header from '../../components/Header/Header';
import Table from '../../components/Tables/tableProductos';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import BodyMproducto from '../../components/bodyModal/Producto';

import Modal from '../../components/Modales/Modal2';

//Importando SweetAlert2
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
const Swal = require('sweetalert2/dist/sweetalert2.all.min');

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

class Productos extends Component{

    state={
        productos: [], 
        producto: {
            _id: '', 
            clave: '',
            nombre: '',
            descripcion: '',
            medida: '', 
            disponible: '',
            perecedero: '', 
            idproveedor:'', 
            proveedor:'',
            edit: false
        }, 
        modalIsOpen: false
    }

    componentDidMount(){
        console.log("MOUNT");
        this.getproductos();

    }
  
    handleInsert = async ( datos ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/producto`,{
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
        const productos = [...this.state.productos, data.producto]

        //agregar el nuevo state 
        this.setState({
            productos, 
            modalIsOpen: false
        });

        Swal.fire(
            'Información Agregada!',
            '',
            'success'
        )
    }

    handleEdit = async ( datos ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/producto/${datos._id}`,{
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
        const productos = [...this.state.productos];

        let dataPosition = productos.findIndex(producto => producto._id === datos._id); 

        productos[dataPosition].nombre = datos.nombre;
        productos[dataPosition].descripcion = datos.descripcion;

        this.setState({
            productos, 
            producto: {
                _id: '', 
                clave: '',
                nombre: '',
                descripcion: '',
                medida: '', 
                disponible: '',
                perecedero: '', 
                idproveedor:'', 
                proveedor:'',
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
        const response = await fetch(`${process.env.REACT_APP_URL}/services/producto/${datos._id}`,{
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
        const productoActuales = [...this.state.productos];

        const productos = productoActuales.filter(producto => producto._id !== datos._id); 

        this.setState({
            productos, 
            producto: {
                _id: '', 
                clave: '',
                nombre: '',
                descripcion: '',
                medida: '', 
                disponible: '',
                perecedero: '', 
                idproveedor:'', 
                proveedor:'',
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
    


    getproductos = async () => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/productos`, {
            method: "GET"
        });

        const data = await response.json();

        console.log("productoS : ",data );

        this.setState({
            productos: data.producto
        });

    }

    

    sendInfoModal = ( id, clave, nombre, descripcion, medida, disponible, perecedero, idproveedor, proveedor ) => {
        this.openModal();
        // console.log("CLICK : ", id, clave, nombre, descripcion, medida, disponible, perecedero, idproveedor, proveedor );
        this.setState({
            producto: {
                _id: id, 
                clave,
                nombre,
                descripcion,
                medida, 
                disponible,
                perecedero, 
                idproveedor, 
                proveedor,
                edit: true
            }, 
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
                <Header titulo="Productos"/>
                <div className="container">
                    <SearchBtn idTabla={"tableProducto"} />
                    <Table productos={this.state.productos} sendInfoModal={this.sendInfoModal} />
                    {/* <FloatButton /> */}

                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large red modal-trigger" href="#modal"
                            onClick={this.openModal}>
                            <i className="large material-icons">add</i>
                        </a>
                    </div>

                    <Modal isOpen={this.state.modalIsOpen} onClose={this.closeModal} titulo={"Titulo"}>
                        <BodyMproducto handleInsert={this.handleInsert} 
                                        handleEdit={this.handleEdit} 
                                        handleDelete={this.handleDelete}
                                        producto={this.state.producto}/>
                    </Modal>

                    {/* <Modal titulo="Agrega producto" >
                        <BodyMproducto producto={this.producto} producto={this.state.producto}/>
                    </Modal> */}
                </div>
                
            </div>            
        )
    }

};

export default Productos;