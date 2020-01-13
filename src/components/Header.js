import React, { Component } from 'react';
import logo from '../images/RickandMortylogo.png';

class Header extends Component {
    render() {
        return (
            <header>
                <img src={logo} alt="Rick and Morty logo" />
            </header>
        );
    }
}

export default Header;