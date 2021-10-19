import {useRequestData} from "../hooks/useRequestData"
import styled from "styled-components";
import {useHistory} from "react-router-dom";

const PokemonContainer = styled.div`
    border: black 1px solid;
    border-radius: 5px;
    text-align: center;
`

const ButtonContainer = styled.div`
 display:flex;
 justify-content: center;
`




const PokeCard = (props) => {
    const history = useHistory()
    const url = `https://pokeapi.co/api/v2/pokemon/${props.name}`
    const [pokemon, loading, error] = useRequestData(url)
    console.log("card", pokemon.sprites)
    return (
        <PokemonContainer key={props.id}>
            <h3>{props.name}</h3>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Error</h1>}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {/* <img src={pokemon.sprites.back_default} alt={pokemon.name} /> */}
            <ButtonContainer>
                <button>Adicionar a Pokedex</button>
                <button onClick={()=>history.push("/detalhes")}>Detalhes</button>
            </ButtonContainer>
        </PokemonContainer>
    );
};

export default PokeCard;