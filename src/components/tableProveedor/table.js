import React, { Component } from 'react';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'


class BodyTable extends Component{
    render(){
        // console.log("hola si entra ", this.props.proveedor);
        return(
            <tr>
                <td> {this.props.proveedor.nombre} </td>
            </tr>
        )
    }
}

class table extends Component{

    render(){
        return(
            <div className="container-fluid">
                <table id="tbale" className="highlight centered responsive-table">
                    <thead>
                    <tr>
                        <td>Proveedores</td>
                    </tr>
                    </thead>

                    <tbody>
                        {this.props.proveedores.map( proveedor => {
                            console.log("Provider : ", proveedor);
                            return(
                                <BodyTable 
                                    key ={ Math.random()}
                                    proveedor = {proveedor}
                                />
                            )
                                
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default table;
