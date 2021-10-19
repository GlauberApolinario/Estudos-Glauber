import { useRequestData } from "../hooks/useRequestData";
import PokeCard from "../components/PokeCard";
import styled from "styled-components";

const Card = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(5, 1fr);

`

const HomePage = () => {
    const [pokemons, loading, error] = useRequestData("https://pokeapi.co/api/v2/pokemon/")
    console.log(pokemons, "teste")
    const newPokemons = pokemons.results
    console.log("aux", pokemons)
    console.log("results", newPokemons)
    const showPokemons =
    newPokemons &&
    newPokemons.map((poke) => {
        return <PokeCard key={poke.id} id={poke.id} name={poke.name} />;
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