import React from 'react';
import CharacterDetail from './CharacterDetail';


const CharacterList = props => <main><ul>
    {props.charactersData.map(characterData =>
        <CharacterDetail key={characterData.id} characterData={characterData} />
    )}
</ul>
</main>


export default CharacterList;
