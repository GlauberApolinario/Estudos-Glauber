import axios from 'axios';
import './App.css';
import PokeCard from './components/PokeCard/PokeCard';
import React from 'react';


class App extends React.Component {
  state={
    pokeList:[],
    pokeName:"",
  }
  componentDidMount = ()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res)=>{
        this.setState({pokeList: res.data.results})
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  changePokemonName = (e) =>{
    this.setState({pokeName: e.target.value})
  }
  render(){
  return (
    <div className="App">
      <select onChange={this.changePokemonName}>
        <option value={""}>Nenhum</option>
        {this.state.pokeList.map((pokemon) =>{
          return(
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {this.state.pokeName && <PokeCard pokemon = {this.state.pokeName}/>}
    </div>
  );
}
}
export default App;
