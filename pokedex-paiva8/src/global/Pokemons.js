import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonContext from "./PokemonContext";

export const Pokemons = (props) =>{
    const [pokeName, setPokeName] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    const URL = "https://pokeapi.co/api/v2/pokemon/"

    // useEffect(() => {
    //     getPokemons()
    //   },[])

      
    useEffect(() => {
        axios.get(URL+"?limit=30&offset=0")
        .then(res =>{
            setPokeName(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    },[]) 

    useEffect (() => {
        if(pokeName.length){
            pokeName.forEach((poke) =>{
                axios
                    .get(URL+poke.name)
                    .then((res) =>{
                        setPokemon((newPoke) => [...newPoke, res.data].sort((a,b) => a.id - b.id))
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        }
    }, [pokeName])

    const data = {
        pokemon,
        setPokemon,
        pokedex,
        setPokedex
    }

    return(
        <PokemonContext.Provider value={data}>
            {props.children}
        </PokemonContext.Provider>

    )

}