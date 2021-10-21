import { useRequestData } from "../hooks/useRequestData";
import PokeCard from "../components/PokeCard";
import styled from "styled-components";

const Card = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
`

const HomePage = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const [pokemons, loading, error] = useRequestData(url)
    const newPokemons = pokemons.results
    const showPokemons =
    newPokemons &&
    newPokemons.map((poke) => {
        return <PokeCard key={poke.name} name={poke.name} url={poke.url}/>;
    });
    return (
    <Card>
        {loading && <h1>Loading...</h1>}
        {!loading && error && <h1>Error</h1>}
        {showPokemons}
    </Card>
    );
};

export default HomePage;