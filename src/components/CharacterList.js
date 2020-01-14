import React from 'react';
import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
import '../stylesheets/characterList.scss'
import Emoji from "react-emoji-render";


const CharacterList = props => {
    const isExistingCharacter = props.charactersData.length === 0 ? <h3 className="alert">¡Loco! <Emoji text=":satisfied:" /> El personaje que buscas no éxiste en este universo. ¡ Vuelve a probar!</h3> : ''
    const { charactersData } = props;
    return (
        < main className="">
            {isExistingCharacter}
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
