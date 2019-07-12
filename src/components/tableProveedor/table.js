import React, { Component } from 'react';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'

class table extends Component{

    render(){
        return(
            <div className="container-fluid">
                <table id="tbale" className="highlight centered responsive-table">
                    <thead>
                    <tr>
                        <th>Proveedores</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Alvin</td>
                    </tr>
                    <tr>
                        <td>Alan</td>
                    </tr>
                    <tr>
                        <td>Jonathan</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default table;
