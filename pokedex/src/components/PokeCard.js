import {useRequestData} from "../hooks/useRequestData"
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const PokemonContainer = styled.div`
    border: black 1px solid;
    border-radius: 5px;
    text-align: center;
    margin: 10px;
`

const ButtonContainer = styled.div`
 display:flex;
 justify-content: center;
`

const PokeCard = (props) => {
    const history = useHistory()
    const url = `https://pokeapi.co/api/v2/pokemon/${props.name}`
    const [pokemon, loading, error] = useRequestData(url)
    
    return (
        <PokemonContainer key={props.id}>
            <h3>{props.name}</h3>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Error</h1>}
            {pokemon.sprites && pokemon.sprites.front_default&&(<img src={pokemon.sprites && pokemon.sprites.front_default}/>)}
            <ButtonContainer>
                <button>Adicionar a Pokedex</button>
                <button onClick={()=>history.push(`/detalhes/${props.name}`)}>Detalhes</button>
            </ButtonContainer>
        </PokemonContainer>
    );
};

export default PokeCard;

