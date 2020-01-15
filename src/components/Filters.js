import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/filters.scss'

const Filters = props => {
    const handleSearch = ev => {
        props.handleSearch({
            value: ev.target.value,
            id: ev.target.id
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
            <div className="form__container">
                <label htmlFor="especie" name="especie">Human</label>
                <input onChange={handleSearch} id="especie" type="radio" value="human" name="especie" checked={props.especie === "human"} />
                <label htmlFor="especie" name="especie">Alien</label>
                <input onChange={handleSearch} id="especie" type="radio" value="alien" name="especie" checked={props.especie === "alien"} />
            </div>
            <label htmlFor="origin" name="origin"><input type="checkbox" id="origin" value="Earth (C-137)" onClick={props.handleOrigin} /> Earth (C-137)</label>
            <label htmlFor="origin" name="origin"><input type="checkbox" id="origin" value="Earth (Replacement Dimension)" onClick={props.handleOrigin} /> Earth (Replacement Dimension)</label>
            <label htmlFor="origin" name="origin"><input type="checkbox" id="origin" value="Abadango" onClick={props.handleOrigin} /> Abadango</label>
            <label htmlFor="origin" name="origin"><input type="checkbox" id="origin" value="unknown" onClick={props.handleOrigin} /> unknown</label>
            <label htmlFor="location">Introduce la localización</label>
            <textarea onChange={handleSearch} name="location" id="location" cols="30" rows="10"></textarea>
            <label htmlFor="gender">Elige Genero</label>
            <select onChange={handleSearch} id="gender" name="gender">
                <option value="male" id="gender">Male</option>
                <option value="female" id="gender">Female</option>
                <option value="unknown" id="gender">unknown</option>
            </select>
        </form>
    );
};

Filters.propTypes = {
    value: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired
}

export default Filters;
