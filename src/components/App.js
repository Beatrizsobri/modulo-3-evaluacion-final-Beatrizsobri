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
      especie: '',
      characters: [],
      origins: [],
      location: '',
      gender: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this)
  }

  handleSearch(data) {
    console.log(data)

    this.setState({
      [data.id]: data.value
    })
  }
  handleOrigin(ev) {
    const origin = ev.target.value;
    this.setState((prevState) => {
      const originIndex = prevState.origins.indexOf(origin);
      if (originIndex < 0) {
        prevState.origins.push(origin);
      } else {
        prevState.origins.splice(originIndex, 1);

      }
      return {
        origins: prevState.origins
      }
    }
    )
  }
  filterCharacters() {
    return this.state.characters
      .filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()))
      .filter(character => character.species.toLowerCase().includes(this.state.especie.toLowerCase()))
      // .filter(character => character.location.name.toLowerCase().includes(this.state.location.toLowerCase()))
      .filter(character => character.gender.toLowerCase().includes(this.state.gender.toLowerCase()))
  }



  resetSearch() {
    this.setState({
      search: '',
      especie: '',
      origins: [],
      location: '',
      gender: ''
    })
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

  componentDidMount() {
    fetchRickyMorty().then(data => this.setState({
      characters: data.results
    }));
  }

  render() {
    console.log(this.state.gender)
    return (
      < div >
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home
              handleSearch={this.handleSearch}
              charactersData={this.filterCharacters()}
              value={this.state.search}
              resetSearch={this.resetSearch}
              especie={this.state.especie}
              handleOrigin={this.handleOrigin}
            />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div >
    );
  }
}

export default App;
