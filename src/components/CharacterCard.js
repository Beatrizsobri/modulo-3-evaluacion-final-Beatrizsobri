import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



class CharacterCard extends Component {
    render() {
        const { id, image, name, species } = this.props.characterData
        return (
            <React.Fragment>
                <div className="card-img-top justify-content-center ">
                    <img className="rounded-lg mx-auto img-thumbnail" src={image} alt={`Imagen de ${name}`} />
                </div>
                <div>
                    <Link to={`/character/${id}`}>
                        <h2>{name}</h2>
                    </Link>
                    <p>{species}</p>
                </div>
            </React.Fragment>

        );
    }
}

CharacterCard.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
}

export default CharacterCard;