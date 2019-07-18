import React, { Component } from 'react';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'


class BodyTable extends Component{

    handleClick = ( ev ) => {
        this.props.sendInfoModal(ev.currentTarget.dataset.nombre, ev.currentTarget.dataset.idproveedor);
    }

    render(){

        return(
            
            <tr onClick={this.handleClick} 
                data-nombre={this.props.proveedor.nombre} 
                data-idproveedor={this.props.proveedor._id}>
                <td> 
                    <a className="modal-trigger" href="#modal" >
                        {this.props.proveedor.nombre}
                    </a>
                </td>
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
                            return(
                                <BodyTable 
                                    key ={ Math.random()}
                                    proveedor = {proveedor}
                                    sendInfoModal = {this.props.sendInfoModal}
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
