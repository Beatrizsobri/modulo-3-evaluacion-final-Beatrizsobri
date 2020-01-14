import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
    const handleSearch = ev => {
        ev.preventDefault();
        props.handleSearch({
            value: ev.target.value
        });
    }
    const preventDefault = ev => ev.preventDefault();

    return (
        <form className="form-group" onSubmit={preventDefault} action="POST">
            <label htmlFor="search">Busca un personaje:</label>
            <input className="form-control shadow-lg p-3 mb-5 bg-white rounded" name="search" id="search" onChange={handleSearch} type="text" placeholder='Escribe aquí mozuel@!' value={props.value} />
            <button onClick={props.resetSearch}>Borrar búsqueda</button>
        </form>
    );
};

Filters.propTypes = {
    value: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
}

export default Filters;
