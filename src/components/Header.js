import React, { Component } from 'react';
import logo from '../images/RickandMortylogo.png';

class Header extends Component {
    render() {
        return (
            <header className="text-center">
                <img className="img-fluid " src={logo} alt="Rick and Morty logo" />
            </header>
        );
    }
}

export default Header;