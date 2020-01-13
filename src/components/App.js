import React, { Component } from 'react';
import '../stylesheets/App.scss';
import { fetchRickyMorty } from '../services/Api';
import logo from '../images/RickandMortylogo.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: '',
    }
  }
  componentDidMount() {
    fetchRickyMorty().then(data => console.log(data))
  }

  render() {
    return (
      <div className="app" >
        <img src={logo} alt="Rick and Morty logo" />
      </div>
    );
  }
}

export default App;
