import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class CharacterCard extends Component {
    render() {
        const { id, image, name, species } = this.props.characterData
        return (
            <React.Fragment>
                <div className="card-img-top">
                    <img className="rounded-lg mx-auto img-thumbnail" src={image} alt={`Imagen de ${name}`} />
                </div>
                <div className="card-body">
                    <Link to={`/character/${id}`}>
                        <h2 className="card-title">{name}</h2>
                    </Link>
                    <p className="card-text">{species}</p>
                </div>
            </React.Fragment>

        );
    }
}

CharacterCard.propTypes = {
    characterData: PropTypes.object.isRequired
}

export default CharacterCard;