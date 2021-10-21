import './App.css';
import React from 'react';
import Route from './Routes/Route';
import Header from './components/Header';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  //const [listaPokemon, setListaPokemon] = useState([])
  //const [pokedex, setPokedex] = useState([])

  useEffect(()=>{
    //busca dados na api
    // seta os dados no estado com setLista
  },[])
  return (
    <div>
      <Header />
      <Route />
    </div>
  );
}

export default App;