import React, { Fragment } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import PropTypes from 'prop-types';


const Home = props => {
    const { handleSearch, charactersData, value, resetSearch, especie } = props
    return (
        <Fragment >
            <Filters handleSearch={handleSearch} value={value} resetSearch={resetSearch} especie={especie} />
            <CharacterList charactersData={charactersData} />
        </Fragment>
    )
}

Home.propTypes = {
    charactersData: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    resetSearch: PropTypes.func.isRequired,
    especie: PropTypes.string.isRequired,
}


export default Home;

