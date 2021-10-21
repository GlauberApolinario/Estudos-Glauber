import {useHistory} from "react-router-dom";
import { useParams } from "react-router";
import { useRequestData } from "../hooks/useRequestData";
import styled from "styled-components";

const DetailContainer = styled.div`
 margin-left: 30px;
`

const Details = () => {
    const params = useParams()
    const history = useHistory()
    const url = `https://pokeapi.co/api/v2/pokemon/${params.nome}`
    const [pokemon, loading, error] = useRequestData(url)
    const types = pokemon.types
    const stats = pokemon.stats
    const abilities = pokemon.abilities
    // console.log("Stats", pokemon.abilities[0].ability.name)
    const allTypes = 
        types && types.map((type)=>{
            return (<h3 key={type.index}>{type.type.name}</h3>)
        })
    const allStats = 
        stats && stats.map((stat)=>{
            return (<h3 key={stats.index}>{stat.stat.name} - {stat.base_stat}</h3>)
        })
    const allAbilities = 
        abilities && abilities.map((ability)=>{
            return <h3 key = {ability.index}>{ability.ability.name}</h3>
        })
   
    
    return ( 
        <DetailContainer>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Error</h1>}
            {pokemon.name && <h1>{pokemon.name}</h1>}
            {pokemon.sprites && pokemon.sprites.front_default&&(<img src={pokemon.sprites && pokemon.sprites.front_default}/>)}
            {pokemon.sprites && pokemon.sprites.back_default&&(<img src={pokemon.sprites && pokemon.sprites.back_default}/>)}
            <h2>Tipo</h2>
            {allTypes}
            <h2>Atributos</h2>
            {allStats}
            <h2>Habilidades</h2>
            {allAbilities}
            <button onClick = {()=> history.push("/")}>Voltar</button>
        </DetailContainer>
     );
}
 
export default Details;