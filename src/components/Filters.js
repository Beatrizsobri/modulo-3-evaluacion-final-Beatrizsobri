import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filters.scss'

const Filters = props => {
    const handleSearch = ev => {
        ev.preventDefault();
        props.handleSearch({
            value: ev.target.value
        });
    }
    const preventDefault = ev => ev.preventDefault();

    return (
        <form className="form" onSubmit={preventDefault} action="POST">
            <label className="form__label" htmlFor="search">Busca un personaje:</label>
            <div className="form__container">
                <input className="form__input" name="search" id="search" onChange={handleSearch} type="text" placeholder='Escribe aquí mozuel@!' value={props.value} />
                <button className="form__button" onClick={props.resetSearch}>Borrar búsqueda</button>
            </div>
            <label className="form__label" htmlFor="especie">Especie: </label>
            <div className="form__container">
                <input id="especie" type="radio" value="human" name="human" />
                <div>Human</div>
                <input id="especie" type="radio" value="alien" name="alien" />
                <div>Alien</div>
            </div>

        </form>
    );
};

Filters.propTypes = {
    value: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
}

export default Filters;
