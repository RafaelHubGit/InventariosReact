import React, { Component } from 'react';

class Proveedor extends Component{
    state= {
        proveedor: {
            nombre : ''
        }
    };

    handleChange  = e =>{
        const nextForm = this.state.proveedor
        nextForm[e.target.name] = e.target.value;

        this.setState({
            form : nextForm,
        })
    }

    render(){
        return(
            <div>
                <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input 
                        id="nombre" 
                        name="nombre"
                        value = {this.state.proveedor.nombre}
                        type="text" 
                        className="validate" 
                        onChange = {this.handleChange}
                        />
                    <label forhtml="nombre">Proveedor</label>
                </div>

                <div>
                    <a className="waves-effect waves-light btn">
                        <i className="material-icons left">save</i>
                        Guardar
                    </a>
                </div>
            </div>
        )
    }

}

export default Proveedor;