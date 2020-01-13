import React, { Component } from 'react';

class CharacterDetail extends Component {
    render() {
        return (
            <li key={this.props.characterData.id}>
                <img src={this.props.characterData.image} alt={`Imagen de ${this.props.characterData.name}`} />
                <h2>{this.props.characterData.name}</h2>
                <p>{this.props.characterData.species}</p>
            </li>

        );
    }
}

export default CharacterDetail;