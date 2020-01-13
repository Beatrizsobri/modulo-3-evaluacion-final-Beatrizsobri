import React, { Component } from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';

class Home extends Component {
    render() {
        return (
            <div className="app" >
                <Filters handleSearch={this.props.handleSearch} />
                <CharacterList charactersData={this.props.charactersData} />
            </div>
        );
    }
}

export default Home;

