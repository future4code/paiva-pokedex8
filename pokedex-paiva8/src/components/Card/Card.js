import React, { useContext, useEffect } from 'react';
import { CardContainer, PokeImg, TypeText } from './styles';
import Button from '@material-ui/core/Button';
import { goToDetails, goToPokedex } from '../../routes/coordinator';
import { useHistory, useParams } from "react-router-dom";
import PokemonContext from '../../global/PokemonContext';

function Card(props) {
    const { name, type, image, poke } = props
    const { pokedex, setPokedex} = useContext(PokemonContext)


    const addPokedex = (toPokedex) =>{
        const addPokemon = [...pokedex, toPokedex]      
        setPokedex(addPokemon)
       
    }

    const removePokedex = (noDex) =>{
        const removeDex = pokedex.filter(remove =>{
            return remove.id !== noDex.id
        })
        setPokedex(removeDex)
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
                <Button onClick={ props.isOnPokedex ? (props.viewFromHome ? ()=>goToPokedex(history) : ()=>removePokedex(poke)) : (()=>addPokedex(poke)) }variant="contained" color="secondary">{props.isOnPokedex ? (props.viewFromHome ? ("Ver na Pokedex") : ("Remover")) :("Adicionar") }</Button>
            </div>
        </CardContainer>
    )
}
export default Card;