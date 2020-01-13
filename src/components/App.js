import React, { Component } from 'react';
import '../stylesheets/App.scss';
import { fetchRickyMorty } from '../services/Api';
import { Route, Switch } from 'react-router-dom';
import Header from './Header'
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterCard from './CharacterCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      characters: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }
  componentDidMount() {
    fetchRickyMorty().then(data => this.setState({
      characters: data.results
    }));
  }
  handleSearch(data) {

    this.setState({
      search: data.value
    })
  }
  filterCharacters() {
    return this.state.characters
      .filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }

  renderCharacterDetail(props) {
    const routeId = props.match.params.id;
    const character = this.state.characters.find(item => item.id === routeId);
    if (character === undefined) {
      return <p>Email no encontrado</p>
    } else {
      return <CharacterCard />
    }
  }

  render() {
    return (
      <div className="app" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <Filters handleSearch={this.handleSearch} />
            <CharacterList charactersData={this.filterCharacters()} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
