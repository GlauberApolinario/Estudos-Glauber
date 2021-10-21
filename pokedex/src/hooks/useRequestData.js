import { useState, useEffect } from "react";
import axios from "axios";


export const useRequestData = (url) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const getPokes = () => {
      setLoading(true);
      axios
        .get(url ? url: "")
        .then((res) => {
        console.log("pokemon request", res.data)
        console.log(url)

          setPokemons(res.data);
         
          setLoading(false);
          
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
          console.log(error);
        });
    };
    useEffect(() => {
      getPokes();
    }, []);
    return [pokemons, loading, error, getPokes];
  };