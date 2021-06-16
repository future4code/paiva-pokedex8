import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { Detailsection, InfoStatus } from './styled';
import {Header} from '../../components/Header/Header'
import { DetailContainer } from "../../components/AppContainer/AppContainer";
import { useParams } from "react-router-dom";
import PokemonContext from "../../global/PokemonContext";


function DetailsPokemon() {
    const history = useHistory();
    const { pokemon } = useContext(PokemonContext)
    const {id} = useParams()

    const pokeFind = pokemon.find(PokeName => PokeName.name === id)

    const pokeType = pokeFind.types.map((type) =>{
            const types = type.type["name"]
            return <span>{types}</span>
        })
    
    const pokeMoves = pokeFind.moves.map((moves) =>{
        const move = moves["move"]["name"]
        return <li>{move}</li>
    })


    return (
        <DetailContainer>
            <Header>
                <h1>PAGINA DE DETALHES</h1>
            </Header>
            <Detailsection>
                <div className="imagesArea">

                    <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" className="spinnerImg" />

                    <img src={pokeFind.sprites.other["official-artwork"].front_default} alt="Luxray" className="pokemonImg" />

                </div>
                <InfoStatus className="statusInfo">
                    <div>
                        <p>Height</p>
                        <span>{(pokeFind.height*0.1).toFixed(2)} M</span>
                        <p>Type</p>
                        <span>{pokeType}</span>
                        <p>Ability</p>
                        <ul>{pokeMoves}</ul>
                    </div>
                    <div>
                        <p>Weight</p>
                        <span>{pokeFind.weight}</span>
                        <p>Category</p>
                        <span>Seed Pokemon</span>
                    </div>
                </InfoStatus>
                <div className="buttonSection">
                    <Button variant="outlined" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
                </div>
            </Detailsection>
        </DetailContainer>
    )
}

export default DetailsPokemon