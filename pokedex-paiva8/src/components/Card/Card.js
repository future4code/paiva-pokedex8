import React, { useContext, useEffect } from 'react';
import { CardContainer, PokeImg, TypeText } from './styles';
import Button from '@material-ui/core/Button';
import { goToDetails } from '../../routes/coordinator';
import { useHistory, useParams } from "react-router-dom";
import PokemonContext from '../../global/PokemonContext';

function Card(props) {
    const { name, type, image, poke } = props
    const { pokedex, setPokedex, pokemon, setPokemon} = useContext(PokemonContext)


    const addPokedex = (toPokedex) =>{
        const addPokemon = [...pokedex, toPokedex]
        
        const newPokeList = pokemon.filter(noPoke =>{
            return noPoke.id !== toPokedex.id
        })
        setPokedex(addPokemon)
        setPokemon(newPokeList)
        
    }
    

    const history = useHistory()
    return (
        <CardContainer>
            <PokeImg src={image} alt={name} className="pokemonLogo" />
            <div className="infoPoke">
                <h1>{(name).toUpperCase()}</h1>
            </div>

            <div className="pokeType">
                <div className="pokeAlign">
                    <TypeText>{type}</TypeText>
                </div>
            </div>

            <div className="buttonArea">
                <Button onClick={() => goToDetails(history, name)} variant="outlined" color="secondary">DETALHES</Button>
                <Button onClick={()=> addPokedex(poke)} variant="contained" color="secondary">ADICIONAR</Button>
            </div>
        </CardContainer>
    )
}
export default Card;