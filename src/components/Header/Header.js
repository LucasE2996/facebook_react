import React, { Component } from 'react';

import './styles.css';

import logo from '../../assets/facebookLogo.png';
import profile from '../../assets/profile.png';

class Header extends Component {
    render() {
        return (<div className="header">
            <img className="logo" src={logo} />
            <div className="menu">
                <h5 className="menu--text">Meu perfil</h5>
                <img className="menu--profile" src={profile} />
            </div>
        </div>);
    }
}

export default Header;