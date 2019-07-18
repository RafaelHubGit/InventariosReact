import React, { Component } from 'react';

// css
import './style.css';

//Importando SweetAlert2
import '../../../node_modules/sweetalert2/dist/sweetalert2.min.css';
const Swal = require('sweetalert2/dist/sweetalert2.all.min');



const stateInicial = {
    categoria: {
        _id: '', 
        nombre: '',
        descripcion: '',
        edit: false
    },
    error: true
};

class Categoria extends Component{
    state= { ...stateInicial };

    componentDidMount(){

        console.log("3: DIDMOUNT :) : ", this.props.categoria.nombre);

        this.setState({
            categoria:{
                _id: this.props.categoria._id, 
                nombre: this.props.categoria.nombre, 
                descripcion: this.props.categoria.descripcion, 
            }
        })
        
    }

    //Levantamiento del STATE
    handleChange  = e =>{

        this.valida();

        this.setState({
            categoria : {
                ...this.state.categoria, 
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

        this.props.handleInsert(this.state.categoria);

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })
    }

    handleEdit = e => {
        e.preventDefault();
        this.props.handleEdit(this.state.categoria);
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
              this.props.handleDelete(this.state.categoria)
            }
          })
    }


    valida = ( ) => {
        // evalua los campos del state y si esta vacio cambia el this.state.error

        const {nombre} = this.state.categoria;
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
                    <form  className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="nombre" 
                                        name="nombre"
                                        value = {this.state.categoria.nombre}
                                        onChange = {this.handleChange}
                                        type="text" 
                                        className="validate" 
                                        placeholder={this.state.categoria.nombre}
                                        autoComplete="off"/>
                                {/* Evalua si viene vacio o no para agregar la calse active y que no aparezca encimado */}
                                <label htmlFor="nombre" className={(this.state.categoria.nombre === '')? "" : "active"}>Nombre de la categoria</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="descripcion" 
                                        name="descripcion"
                                        value = {this.state.categoria.descripcion}
                                        onChange = {this.handleChange}
                                        type="text" 
                                        className="validate" 
                                        autoComplete="off"/>
                                <label htmlFor="descripcion" className={(this.state.categoria.descripcion === '')? "" : "active"}>Descripción</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="buttonBar right">
                    {/* evalua el state error y agrega o quita la clase modal-close para que cierre el modal */}
                    <button className={(this.props.categoria.edit ? "waves-effect waves-light btn green hide" : "waves-effect waves-light green btn" )}
                        onClick={this.handleInsert}>
                        <i className="material-icons left">save</i>
                        Guardar
                    </button>

                    <button className={(this.props.categoria.edit ? "waves-effect waves-light btn  light-blue lighten-1 " : "waves-effect waves-light btn  light-blue lighten-1 hide" )}
                        onClick={this.handleEdit}>
                        <i className="material-icons left">edit</i>
                        Editar
                    </button>

                    <button className={(this.props.categoria.edit ? "waves-effect waves-light btn red " : "waves-effect waves-light btn red hide" )}
                        onClick={this.handleDelete}>
                        <i className="material-icons left">delete</i>
                        Eliminar
                    </button>
                </div>                
                

                
            </div>
        )
    }

}

export default Categoria;