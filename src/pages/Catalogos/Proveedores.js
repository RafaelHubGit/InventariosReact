import React, { Component } from 'react';

// componentes
import Header from '../../components/Header/Header';
import Table from '../../components/tableProveedor/table';
import FloatButton from '../../components/floatingButton/floatingButton';
import SearchBtn from '../../components/SearchBtn/SearchBtn';

// css
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Proveedores extends Component{

    render(){
        return(
            <div>
                <Header titulo="Proveedores"/>
                <SearchBtn />
                <Table />
                <FloatButton />
            </div>            
        )
    }

};

export default Proveedores;