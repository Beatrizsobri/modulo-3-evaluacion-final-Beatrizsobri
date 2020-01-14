import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import '../stylesheets/characterList.scss'


const CharacterList = props => {
    const { charactersData } = props;
    return (
        < main className="">
            <ul className="list">
                {charactersData.map(characterData =>
                    <li className="list__card" key={characterData.id}>
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
