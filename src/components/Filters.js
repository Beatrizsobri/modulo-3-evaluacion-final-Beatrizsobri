import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filters.scss'

const Filters = props => {
    const handleSearch = ev => {
        console.log(ev.target)

        ev.preventDefault();
        props.handleSearch({
            value: ev.target.value,
            id: ev.target.id
        });
    }
    const preventDefault = ev => ev.preventDefault();
    console.log(typeof (props.especie))
    console.dir(props.especie)
    return (
        <form className="form" onSubmit={preventDefault} action="POST">
            <label className="form__label" htmlFor="search">Busca un personaje:</label>
            <div className="form__container">
                <input className="form__input" name="search" id="search" onChange={handleSearch} type="text" placeholder='Escribe aquí mozuel@!' value={props.value} />
                <button className="form__button" onClick={props.resetSearch}>Borrar búsqueda</button>
            </div>
            <div className="form__container">
                <label htmlFor="especie" name="especie">Human</label>
                <input onChange={handleSearch} id="especie" type="radio" value="human" name="especie" checked={props.especie === "human"} />
                <label htmlFor="especie" name="especie">Alien</label>
                <input onChange={handleSearch} id="especie" type="radio" value="alien" name="especie" checked={props.especie === "alien"} />
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
