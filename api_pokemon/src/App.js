import React from 'react';
import "./App.css"
import axios from 'axios';


export default class App extends React.Component {

  state = {
    pokemons:[],
    pokePicture:''
  }

  componentDidMount(){
    this.getPokemons()
  }

  getPokePicture = async (e) => {
    const response = await axios.get(e.target.value)
    this.setState({pokePicture: response.data.sprites.front_default})
  }

  getPokemons = async()=>{
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    this.setState({pokemons: response.data.results})
    console.log('Pokemons: ', response.data.results)
  }
  render(){
    const popkeList = this.state.pokemons.map((poke)=>{
      return(
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      )
    })
    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange= {this.getPokePicture}>
          <option>Selecione um pokemon</option>
          {popkeList}
        </select><br></br>
        {this.state.pokePicture &&
        <img src={this.state.pokePicture} alt={'Foto pokemon'}/>
        }
      </div>
    );
  }
  
}


