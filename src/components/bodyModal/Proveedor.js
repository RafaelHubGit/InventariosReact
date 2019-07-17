import React, { Component } from 'react';

// css
import './style.css';

//Importando SweetAlert2
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
const Swal = require('../../../node_modules/sweetalert2/dist/sweetalert2.all.min.js');



const stateInicial = {
    proveedor: {
        _id:'',
        nombre : ''
    }, 
    error: true
};

class Proveedor extends Component{
    state= { ...stateInicial };

    constructor(props){
        super(props)

        console.log("1: COMPONENT :) ");
    }      

    componentDidUpdate(){
        
        console.log("2 : UPDATE :) ");
    }

    componentDidMount(){

        console.log("3: DIDMOUNT :) : ", this.props.proveedor.nombre);

        this.setState({
            proveedor:{
                _id: this.props.proveedor._id, 
                nombre: this.props.proveedor.nombre
            }
        })
        
    }

    componentWillUnmount(){
        console.log("4: componentWillUnmount");
    }

    //Levantamiento del STATE
    handleChange  = e =>{

        this.valida();

        this.setState({
            proveedor : {
                ...this.state.proveedor, 
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

        this.props.handleInsert(this.state.proveedor);

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    }

    handleEdit = e => {
        e.preventDefault();
        this.props.handleEdit(this.state.proveedor);
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
              this.props.handleDelete(this.state.proveedor)
            }
          })
    }


    valida = ( ) => {
        // evalua los campos del state y si esta vacio cambia el this.state.error

        const {nombre} = this.state.proveedor;
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

    render(){
        
        return(
            <div>
                {/* <form onSubmit={this.handleSubmit} > */}
                <div className="row">
                    <form onSubmit={this.handleInsert} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="nombre" 
                                        name="nombre"
                                        value = {this.state.proveedor.nombre}
                                        onChange = {this.handleChange}
                                        type="text" 
                                        className="validate" 
                                        placeholder={this.state.proveedor.nombre}
                                        autoComplete="off"/>
                                {/* Evalua si viene vacio o no para agregar la calse active y que no aparezca encimado */}
                                <label htmlFor="nombre" className={(this.state.proveedor.nombre === '')? "" : "active"}>Nombre del Proveedor</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="buttonBar right">
                    {/* evalua el state error y agrega o quita la clase modal-close para que cierre el modal */}
                    <button className={(this.props.proveedor.edit ? "waves-effect waves-light btn green hide" : "waves-effect waves-light green btn" )}
                        onClick={this.handleInsert}>
                        <i className="material-icons left">save</i>
                        Guardar
                    </button>

                    <button className={(this.props.proveedor.edit ? "waves-effect waves-light btn  light-blue lighten-1 " : "waves-effect waves-light btn  light-blue lighten-1 hide" )}
                        onClick={this.handleEdit}>
                        <i className="material-icons left">edit</i>
                        Editar
                    </button>

                    <button className={(this.props.proveedor.edit ? "waves-effect waves-light btn red " : "waves-effect waves-light btn red hide" )}
                        onClick={this.handleDelete}>
                        <i className="material-icons left">delete</i>
                        Eliminar
                    </button>
                </div>                
                

                
            </div>
        )
    }

}

export default Proveedor;