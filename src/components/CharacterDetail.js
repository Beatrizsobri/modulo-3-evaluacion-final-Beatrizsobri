import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/characterDetail.scss'

const CharacterDetail = props => {
    const { image, name, status, species, origin, episode } = props.character;
    const isDead = status === 'Dead' ? < FontAwesomeIcon icon={faDizzy} /> : ' Vivit@ y coleando'
    return (
        <main className="card">
            <div className="card__button">
                <Link to='/'>
                    <button className="button">
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                        Volver
                    </button>
                </Link>
            </div>
            <div className="card__description">
                <div className="description--image">
                    <img className="description--image--details" src={image} alt={`Imagen del personaje ${name}`} />
                </div>
                <div className="description--text">
                    <h3 className="card--title">{name}</h3>
                    <ul className="card--list">
                        <li >Status:{isDead}</li>
                        <li >Species: {species}</li>
                        <li >Origin: {origin.name}</li>
                        <li >Episodes: {episode.length} </li>
                    </ul>
                </div>
            </div>
        </main >

    );
}

CharacterDetail.propTypes = {
    character: PropTypes.object.isRequired,
}

export default CharacterDetail;