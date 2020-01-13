import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDizzy, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


class CharacterDetail extends Component {
    render() {
        const { image, name, status, species, origin, episode } = this.props.character;
        const isDead = status === 'Dead' ? < FontAwesomeIcon icon={faDizzy} /> : ' Vivit@ y coleando'
        return (
            <main className="w-50 mx-auto ">
                <div>
                    <Link to='/'>
                        <div className="d-flex flex-row justify-content-end">
                            <FontAwesomeIcon icon={faArrowCircleLeft} />
                            <p className="pl-2"> Volver </p>
                        </div>
                    </Link>
                </div>
                <div className="card d-flex flex-row p-1 ">
                    <div className="w-50">
                        <img className="card-img-left img-fluid" src={image} alt={`Imagen del personaje ${name}`} />
                    </div>
                    <div className="text-dark w-50 p-2">
                        <h3 className="card-title font-weight-bold ">{name}</h3>
                        <ul className="card-body p-0">
                            <li className="card-text">Status:{isDead}</li>
                            <li className="card-text">Species: {species}</li>
                            <li className="card-text">Origin: {origin.name}</li>
                            <li className="card-text">Episodes: {episode.length} </li>
                        </ul>
                    </div>
                </div>
            </main >

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