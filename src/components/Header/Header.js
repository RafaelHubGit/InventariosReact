import React, { Component } from 'react';

// css
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class Header extends Component{

    render(){
        return(
            <div className="container-fluid">
                <div className="backGroundHeader">
                    <div className="header">{this.props.titulo}</div>
                </div>
            </div>
        )
    }

}

export default Header;