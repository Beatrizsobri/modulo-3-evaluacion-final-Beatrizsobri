import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


class CharacterDetail extends Component {
    render() {
        const { image, name, status, species, origin, episode } = this.props.character;
        const isDead = status === 'Dead' ? <FontAwesomeIcon icon={faDizzy} /> : <p>Estoy vivito y coleando</p>
        return (
            <main>
                <section id='1'>
                    <div>
                        <Link to='/'>
                            <div className="d-flex flex-row justify-content-end">
                                <FontAwesomeIcon icon={faArrowCircleLeft} />
                                <p> Volver </p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <img src={image} alt={`Imagen del personaje ${name}`} />
                        </div>
                        <div>
                            <h3 className="card-title">{name}</h3>
                            <ul className="card-body">
                                <li className="card-text">Status:{isDead}</li>
                                <li className="card-text">Species: {species}</li>
                                <li className="card-text">Origin: {origin.name}</li>
                                <li className="card-text">Episodes: {episode.length} </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

        );
    }
}

CharacterDetail.propTypes = {
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.object.isRequired,
    episode: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterDetail;