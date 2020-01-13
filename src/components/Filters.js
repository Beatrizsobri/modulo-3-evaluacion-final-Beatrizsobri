import React, { Component } from 'react';

const Filters = (props) => {
    const handleSearch = (ev) => {
        ev.preventDefault();
        props.handleSearch({
            value: ev.target.value
        });
    }
    const preventDefault = ev => ev.preventDefault();

    return (
        <form onSubmit={preventDefault} action="POST">
            <input onChange={handleSearch} type="text" placeholder='Hola estoy aqui' />
        </form>
    );
};

export default Filters;
