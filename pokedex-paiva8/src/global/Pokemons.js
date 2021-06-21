import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonContext from "./PokemonContext";

export const Pokemons = (props) =>{
    const [pokeName, setPokeName] = useState([])
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [pagination, setPagination] = useState(1)
    const URL = "https://pokeapi.co/api/v2/pokemon/"

     useEffect(() => {
         getPokemons()
       },[pagination])

      
    const getPokemons = () => {
        const limit = 20*(pagination-1)
        axios.get(URL+"?limit=20&offset="+limit)
        .then(res =>{
            setPokeName(res.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect (() => {
        const pokeList = []
        pokeName.forEach((poke) =>{
            axios
                .get(URL+poke.name)
                .then((res) =>{
                    pokeList.push(res.data)
                    if(pokeList.length === 20 && pagination < 56) {
                        const orderList = pokeList.sort((a,b) => a.id - b.id)
                        setPokemon(orderList)
                    }else if(pagination === 56 && pokeList.length === 18){
                        const orderList = pokeList.sort((a,b) => a.id - b.id)
                        setPokemon(orderList)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        })
        
    }, [pokeName, pagination])

    const data = {
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        pagination,
        setPagination
    }

    return(
        <PokemonContext.Provider value={data}>
            {props.children}
        </PokemonContext.Provider>

    )

}