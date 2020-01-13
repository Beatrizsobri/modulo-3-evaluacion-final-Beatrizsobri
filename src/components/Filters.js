import React from 'react';


const Filters = (props) => {
    const handleSearch = (ev) => {
        ev.preventDefault();
        props.handleSearch({
            value: ev.target.value
        });
    }
    const preventDefault = ev => ev.preventDefault();

    return (
        <form className="form-group" onSubmit={preventDefault} action="POST">
            <input className="form-control shadow-lg p-3 mb-5 bg-white rounded" onChange={handleSearch} type="text" placeholder='Busca tu personaje' />
        </form>
    );
};

//FALTA PROPTYPES

export default Filters;
