import React, { Component } from 'react';
import '../stylesheets/App.scss';
import { fetchRickyMorty } from '../services/Api';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import CharacterDetail from './CharacterDetail';

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
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(item => item.id === routeId);
    if (character === undefined) {
      return <p>Tu personaje aún no ha sido creado en este universo</p>
    } else {
      return <CharacterDetail character={character} />
    }
  }

  render() {
    return (
      <div className="app p-3 mb-2 bg-dark text-black" >
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home
              handleSearch={this.handleSearch}
              charactersData={this.filterCharacters()}
            />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
