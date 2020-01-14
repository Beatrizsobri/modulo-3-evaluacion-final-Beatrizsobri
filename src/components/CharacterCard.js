import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/characterCard.scss'


class CharacterCard extends Component {
    render() {
        const { id, image, name, species } = this.props.characterData
        return (
            <React.Fragment>
                <div >
                    <img className="list__card--image" src={image} alt={`Imagen de ${name}`} />
                </div>
                <div className="list__card--body">
                    <Link to={`/character/${id}`}>
                        <h2 className="body--title">{name}</h2>
                    </Link>
                    <p className="body--text">{species}</p>
                </div>
            </React.Fragment>

        );
    }
}

CharacterCard.propTypes = {
    characterData: PropTypes.object.isRequired
}

export default CharacterCard;