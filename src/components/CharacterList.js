import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';


const CharacterList = props => {
    const { charactersData } = props;
    return (
        < main className="">
            <ul className="card-group d-flex flex-wrap">
                {charactersData.map(characterData =>
                    <li className="card" key={characterData.id}>
                        <CharacterCard characterData={characterData} />
                    </li>
                )}
            </ul>
        </main >
    )
}

CharacterList.propTypes = {
    charactersData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharacterList;