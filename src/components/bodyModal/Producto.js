import React, { Component } from 'react';

import M from "materialize-css";

// css
import './style.css';

//Importando SweetAlert2
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
const Swal = require('sweetalert2/dist/sweetalert2.all.min');

// var M = require('../../../node_modules/materialize-css/dist/js/materialize');



const stateInicial = {
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
    proveedores: [], 
    error: true
};

class Producto extends Component{
    state= { ...stateInicial };

    constructor(props){
        super(props);
        this.getProveedores();
    }

    componentDidMount(){

        console.log("3: DIDMOUNT :)) : ");

        this.setState({
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
        })
        
    }

    componentDidUpdate(prevProps, prevState){
        // Inicializa Selects
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    //Levantamiento del STATE
    handleChange  = e =>{

        this.valida();

        this.setState({
            producto : {
                ...this.state.producto, 
                [e.target.name] : e.target.value
            }
        })

    }

    //Cuando el usuario envia el formulario 
    handleInsert = e => {
        e.preventDefault();

        //Se hacen las validaciones 
        if(this.state.error){
            Swal.fire(
                'Error!',
                'No puede dejar el campo vacio!',
                'error'
            )
            return 
        }

        this.props.handleInsert(this.state.producto);

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    }

    handleEdit = e => {
        e.preventDefault();
        this.props.handleEdit(this.state.producto);
    }

    handleDelete = e => {
        e.preventDefault();

        Swal.fire({
            title: 'Esta seguro que desea eliminar?',
            text: "",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminalo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              console.log("Awui debe de enviar");
              this.props.handleDelete(this.state.producto)
            }
          })
    }


    valida = ( ) => {
        // evalua los campos del state y si esta vacio cambia el this.state.error

        const {nombre} = this.state.producto;
        if( nombre === '' ){
            this.setState({
                error: true
            });

            return
        }

        this.setState({
            error: false
        });
        return;
    }

    getProveedores = async () => {

        const response = await fetch(`${process.env.REACT_APP_URL}/services/proveedor`, {
            method: "GET"
        });

        const data = await response.json();

        console.log("INFOR PROVEEDORES : ", data.proveedor);

        this.setState({
            proveedores: data.proveedor
        });

    }

    render(){

        let options = this.state.proveedores.map ((proveedor) => 
            <option key={proveedor._id} value={proveedor._id}> {proveedor.nombre}</option>
        );

        console.log("LA OPCION ES ", this.state.proveedores);
        
        return(
            <div>
                {/* <form onSubmit={this.handleSubmit} > */}
                <div className="row">
                    <form  className="col s12 m12">
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="clave" 
                                        name="clave"
                                        value = {this.state.producto.clave}
                                        onChange = {this.handleChange}
                                        type="text" 
                                        className="validate" 
                                        autoComplete="off"/>
                                {/* Evalua si viene vacio o no para agregar la calse active y que no aparezca encimado */}
                                <label htmlFor="clave" className={(this.state.producto.clave === '')? "" : "active"}>Clave</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="nombre" 
                                        name="nombre"
                                        value = {this.state.producto.nombre}
                                        onChange = {this.handleChange}
                                        type="text" 
                                        className="validate" 
                                        autoComplete="off"/>
                                <label htmlFor="nombre" className={(this.state.producto.nombre === '')? "" : "active"}>Nombre</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m12">
                                <i className="material-icons prefix">account_circle</i>
                                <textarea id="descripcion" 
                                        name="descripcion"
                                        value = {this.state.producto.descripcion}
                                        onChange = {this.handleChange}
                                        className="materialize-textarea" 
                                        autoComplete="off"></textarea>
                                {/* Evalua si viene vacio o no para agregar la calse active y que no aparezca encimado */}
                                <label htmlFor="descripcion" className={(this.state.producto.descripcion === '')? "" : "active"}>Descripcion</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <select id="medida"
                                        name="medida"
                                        value = {this.state.producto.medida}
                                        onChange = {this.handleChange}
                                >
                                    <option value="" disabled>Elige una opción</option>
                                    <option value="Pza">Pieza</option>
                                    <option value="Kg">Kilogramo</option>
                                    <option value="Ltr">Litro</option>
                                </select>
                                <label>Medida</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="disponible" 
                                        name="disponible"
                                        value = {this.state.producto.disponible}
                                        onChange = {this.handleChange}
                                        type="number" 
                                        className="validate" 
                                        autoComplete="off"/>
                                <label htmlFor="disponible" className={(this.state.producto.disponible === '')? "" : "active"}>Disponible</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12 m6">
                                <select id="perecedero"
                                        name="perecedero"
                                        value = {this.state.producto.perecedero}
                                        onChange = {this.handleChange}
                                >
                                    <option value="" disabled>Elige una opción</option>
                                    <option value="0">No perecedero</option>
                                    <option value="1">Perecedero</option>
                                </select>
                                <label>Perecedero</label>
                            </div>
                            <div className="input-field col s12 m6">
                                <select id="proveedor"
                                        name="proveedor"
                                        value = {this.state.producto.proveedor}
                                        onChange = {this.handleChange}
                                >
                                    <option value="" disabled>Elige una opción</option>
                                    {this.state.proveedores.map ((proveedor) => {
                                        console.log("Si los recore");
                                        return (<option key={proveedor._id} value={proveedor._id}> {proveedor.nombre}</option>)}
                                    )}
                                    
                                    {/* {this.state.proveedores.map( proveedor =>{
                                        return(
                                            <optionproveedor 
                                                key ={ Math.random()}
                                                proveedor= {proveedor}
                                            />
                                        )
                                    })} */}
                                </select>
                                <label>Proveedor</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="buttonBar right">
                    {/* evalua el state error y agrega o quita la clase modal-close para que cierre el modal */}
                    <button className={(this.props.producto.edit ? "waves-effect waves-light btn green hide" : "waves-effect waves-light green btn" )}
                        onClick={this.handleInsert}>
                        <i className="material-icons left">save</i>
                        Guardar
                    </button>

                    <button className={(this.props.producto.edit ? "waves-effect waves-light btn  light-blue lighten-1 " : "waves-effect waves-light btn  light-blue lighten-1 hide" )}
                        onClick={this.handleEdit}>
                        <i className="material-icons left">edit</i>
                        Editar
                    </button>

                    <button className={(this.props.producto.edit ? "waves-effect waves-light btn red " : "waves-effect waves-light btn red hide" )}
                        onClick={this.handleDelete}>
                        <i className="material-icons left">delete</i>
                        Eliminar
                    </button>
                </div>                
                

                
            </div>
        )
    }

}


class optionproveedor extends Component {
    render(){
        return(
            <option value="" >Hola que hace</option>
        )
    }
}

export default Producto;