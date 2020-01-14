import React, { Component } from 'react';
import logo from '../images/RickandMortylogo.png';
import '../stylesheets/header.scss'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="header__hero" src={logo} alt="Rick and Morty logo" />
            </header>
        );
    }
}

export default Header;