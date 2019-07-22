import React, { Component } from 'react';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'


class BodyTable extends Component{

    handleClick = ( ev ) => {
        this.props.sendInfoModal(ev.currentTarget.dataset.idproducto, 
                                    ev.currentTarget.dataset.clave,
                                    ev.currentTarget.dataset.nombre,
                                    ev.currentTarget.dataset.descripcion, 
                                    ev.currentTarget.dataset.medida, 
                                    ev.currentTarget.dataset.disponible, 
                                    ev.currentTarget.dataset.perecedero, 
                                    ev.currentTarget.dataset.idproveedor,
                                    ev.currentTarget.dataset.proveedor);
    }

    render(){

        return(
            
            <tr onClick={this.handleClick} 
                data-idproducto={this.props.producto._id}
                data-clave={this.props.producto.clave}
                data-producto={this.props.producto.nombre} 
                data-descripcion={this.props.producto.descripcion}
                data-medida={this.props.producto.medida}
                data-disponible={this.props.producto.disponible}
                data-perecedero={this.props.producto.perecedero}
                data-idproveedor={this.props.producto.proveedor._id}
                data-proveedor={this.props.producto.proveedor.nombre}
                
            >
                <td> 
                    {this.props.producto.clave}
                </td>
                <td> 
                    {this.props.producto.nombre}
                </td>
                <td> 
                    {this.props.producto.proveedor.nombre}
                </td>
                <td> 
                    {this.props.producto.disponible} {this.props.producto.medida}
                </td>
            </tr>
        )
    }
}

class table extends Component{

    render(){
        return(
            <div className="container-fluid">
                <table id="tableProducto" className="highlight centered responsive-table">
                    <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Producto</th>
                        <th>Proveedor</th>
                        <th>Disponible</th>
                    </tr>
                    </thead>

                    <tbody>
                        {this.props.productos.map( producto => {
                            return(
                                <BodyTable 
                                    key ={ producto._id}
                                    producto = {producto}
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
