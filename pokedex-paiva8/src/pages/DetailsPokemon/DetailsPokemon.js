import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { Detailsection, InfoStatus } from './styled';
import { Header } from '../../components/Header/Header'
import { DetailContainer } from "../../components/AppContainer/AppContainer";
import { useParams } from "react-router-dom";
import PokemonContext from "../../global/PokemonContext";
import StatusPokemon from './StatusPokemon'


function DetailsPokemon() {
    const history = useHistory();
    const { pokemon, allPokemons } = useContext(PokemonContext)
    const { id } = useParams()

    const pokeFind = allPokemons.find(PokeName => PokeName.name === id)

    return (
        <DetailContainer>
            {pokeFind &&
                <Header>
                    <h1>{(pokeFind.name.toUpperCase())}</h1>
                </Header>
            }

            {pokeFind ? (
                <>
                    <Detailsection>


                        <div className="imagesArea">
                        <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_circle_bg.png" alt="BlurImage"  className="blurImage"/>

                            <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" className="spinnerImg" />
            
                            <img src={pokeFind.sprites.other["official-artwork"].front_default} alt="Luxray" className="pokemonImg" />
                            <InfoStatus className="statusInfo">
                                <div>
                                    <p>Height</p>
                                    <span>{(pokeFind.height * 0.1).toFixed(2)} M</span>
                                    <p>Type</p>
                                    <div style={{ display: "flex", flexDirection: "column" }} >
                                        {pokeFind.types.map((res => {
                                            const { type } = res
                                            return <span key={Math.random()}>{type.name}</span>
                                        }))}
                                    </div>
                                </div>
                                <div>
                                    <p>Weight</p>
                                    <span>{pokeFind.weight - 0.1} Kg</span>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <p>Ability</p>
                                        {pokeFind.abilities.map((res => {
                                            const { ability } = res
                                            return <span key={ability.slot}>{ability.name}</span>
                                        }))}

                                    </div>
                                </div>
                            </InfoStatus>
                        </div>
                    </Detailsection>
                </>
            ) : (
                <>
                    <Header>
                        <h1>Carregando...</h1>
                    </Header>
                </>
            )}

            <StatusPokemon />
            <div className="buttonSection">
                <Button variant="outlined" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
            </div>
        </DetailContainer>
    )
}

export default DetailsPokemon