import React, { Component } from 'react';

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

        console.log("1: COMPONENT");
    }      

    componentDidUpdate(){
        
        console.log("2 : UPDATE");
    }

    componentDidMount(){

        console.log("3: DIDMOUNT");

        // this.setState({
        //     proveedor:{
        //         _id: this.props.proveedor._id, 
        //         nombre: this.props.proveedor.nombre
        //     }
        // })
        
    }

    componentDidUnmount(){
        console.log("4: componentDidUnmount");
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
    handleSubmit = e => {
        e.preventDefault();

        //Extraer los valores de state 
        const {nombre} = this.state.proveedor;

        //Se hacen las validaciones 
        if(this.state.error){
            Swal.fire(
                'Error!',
                'No puede dejar el campo vacio!',
                'error'
            )
            return 
        }

        

        this.props.proveedores(this.state.proveedor);

        //Colocar en el state el stateInicial
        this.setState({
            ...stateInicial
        })

        Swal.fire(
            'Información Agregada!',
            '',
            'success'
        )

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
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input id="nombre" 
                                        name="nombre"
                                        value = {this.state.proveedor.nombre}
                                        onChange = {this.handleChange}
                                        type="text" 
                                        className="validate" 
                                        autoComplete="off"/>
                                <label htmlFor="nombre">Nombre del Proveedor</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    {/* evalua el state error y agrega o quita la clase modal-close para que cierre el modal */}
                    <a className={(this.state.error ? "waves-effect waves-light btn" : "modal-close waves-effect waves-light btn" )}
                    
                        onClick={this.handleSubmit}>
                        <i className="material-icons left">save</i>
                        Guardar
                    </a>
                </div>                
                

                
            </div>
        )
    }

}

export default Proveedor;