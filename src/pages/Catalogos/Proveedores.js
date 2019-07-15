import React, { Component } from 'react';

// componentes
import Header from '../../components/Header/Header';
import Table from '../../components/tableProveedor/table';
import FloatButton from '../../components/floatingButton/floatingButton';
import SearchBtn from '../../components/SearchBtn/SearchBtn';
import BodyMProveedor from '../../components/bodyModal/Proveedor';

import Modal from '../../components/Modales/Modal2';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

class Proveedores extends Component{

    state={
        proveedores: [], 
        proveedor: {
            _id: '', 
            nombre: ''
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

    proveedores = datos => {

        //Copia del estate actual
        // const proveedores = [...this.state.proveedores, datos]

        console.log("datos Prov : ", datos);

        //Aqui se tiene que insertar elproducto en BD
        this.insertProveedor(datos.nombre);

        //Aqui se actualiza el state 
        // this.getProveedores();

        //Este no es mecesario pero de momento se deja para que pinte la informacion 
        //agregar el nuevo state 
        // this.setState({
        //     proveedores
        // })
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

    insertProveedor = async ( nombre ) => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/proveedor`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({nombre: nombre})
        });

        const data = await response.json();

        //Copia del estate actual
        const proveedores = [...this.state.proveedores, data.proveedor]

        //agregar el nuevo state 
        this.setState({
            proveedores
        });

    }

    sendInfoModal = ( nombre, id ) => {
        console.log("CLICK : ", nombre, id);
        this.setState({
            proveedor:{
                _id: id, 
                nombre: nombre
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
                <Header titulo="Proveedores"/>
                <div className="container">                    
                    <SearchBtn />
                    <Table proveedores={this.state.proveedores} sendInfoModal={this.sendInfoModal} />
                    {/* <FloatButton /> */}

                    <div className="fixed-action-btn">
                        <a className="btn-floating btn-large red modal-trigger" href="#modal"
                            onClick={this.openModal}>
                            <i className="large material-icons">add</i>
                        </a>
                    </div>

                    <Modal isOpen={this.state.modalIsOpen} onClose={this.closeModal} titulo={"Titulo"}>
                        <BodyMProveedor proveedores={this.proveedores} proveedor={this.state.proveedor}/>
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