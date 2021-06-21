import React, { useContext, useEffect } from 'react';
import { CardContainer, PokeImg, TypeText } from './styles';
import Button from '@material-ui/core/Button';
import { goToDetails, goToPokedex } from '../../routes/coordinator';
import { useHistory, useParams } from "react-router-dom";
import PokemonContext from '../../global/PokemonContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Card(props) {
    const { name, type, image, poke } = props
    const { pokedex, setPokedex} = useContext(PokemonContext)
    

    const addPokedex = (toPokedex) =>{
        const addPokemon = [...pokedex, toPokedex]      
        setPokedex(addPokemon)
        Swal.fire(
            'Sucesso!',
            'Pokemon adicionado na sua Pokedex',
            'success',
          )
    }

    const removePokedex = (noDex) =>{
        const removeDex = pokedex.filter(remove =>{
            return remove.id !== noDex.id
        })
        setPokedex(removeDex)
        Swal.fire(
            'Sucesso!',
            'Pokemon removido da sua Pokedex',
            'success'
          )
    }
      


    const history = useHistory()
    return (
        <CardContainer>
            <PokeImg onClick={() => goToDetails(history, name)} src={image} alt={name} className="pokemonLogo" />
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