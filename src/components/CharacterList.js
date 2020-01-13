import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';


const CharacterList = props => {
    const { charactersData } = props;
    // const isCharacterDataEmpty = charactersData? <p> NO hay personajitos </p> : 
    return (
        < main >
            <ul clasName="list-group container ">
                {charactersData.map(characterData =>
                    <li className="card list-group-item text-center " key={characterData.id}>
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
