import React, { Component } from 'react';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'


class BodyTable extends Component{

    handleClick = ( ev ) => {
        this.props.sendInfoModal(ev.currentTarget.dataset.nombre, 
                                    ev.currentTarget.dataset.idcategoria,
                                    ev.currentTarget.dataset.descripcion);
    }

    render(){

        return(
            
            <tr onClick={this.handleClick} 
                data-nombre={this.props.categoria.nombre} 
                data-idcategoria={this.props.categoria._id}
                data-descripcion={this.props.categoria.descripcion}
            >
                <td> 
                    {this.props.categoria.nombre}
                </td>
                <td> 
                    {this.props.categoria.descripcion}
                </td>
            </tr>
        )
    }
}

class table extends Component{

    render(){
        return(
            <div className="container-fluid">
                <table id="tableCategoria" className="highlight centered responsive-table">
                    <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Descripción</th>
                    </tr>
                    </thead>

                    <tbody>
                        {this.props.categorias.map( categoria => {
                            return(
                                <BodyTable 
                                    key ={ Math.random()}
                                    categoria = {categoria}
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
