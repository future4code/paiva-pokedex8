import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { Detailsection, InfoStatus, DetailContainer } from './styled';
import { Header } from '../../components/Header/Header'
import { useParams } from "react-router-dom";
import PokemonContext from "../../global/PokemonContext";
import StatusPokemon from './StatusPokemon';
import { PokemonCircle, PokemonBackground } from '../../constants';


function DetailsPokemon() {
    const history = useHistory();
    const { pokemon, allPokemons } = useContext(PokemonContext)
    const { id } = useParams()

    const pokeFind = allPokemons.find(PokeName => PokeName.name === id)

    return (
        <DetailContainer>
            {pokeFind ? (
                <>
                    <Detailsection>
                        <header>
                            <span>Pokédex</span>
                        </header>

                        <div className="pokemon-detail_slider">
                            <div className="pokemon-slider__left">
                                <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_left_btn.png" alt="Left Arrow" />
                                <span>Voltar</span>
                            </div>

                            <div className="pokemon-detail_center">
                                <p>001</p>
                                <p>Pokemon Name</p>
                            </div>

                            <div className="pokemon-detail_right">
                                <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_right_btn.png" alt="" />
                                <span>Adicionar</span>



                            </div>
                        </div>

                        {/* <div> <h1>{(pokeFind.name.toUpperCase())}</h1></div> */}
                        <div className="imagesArea">
                            <img src={PokemonCircle} alt="BlurImage" className="blurImage" />

                            <img src={PokemonBackground} alt="Background" className="spinnerImg" />
                            z
                            <img src={pokeFind.sprites.other["official-artwork"].front_default} alt="Pokemon" className="pokemonImg" />
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
                        <div className="statusArea">
                            <div className="statusArea-leftSide">
                                <img src="" alt="" />
                            </div>

                            <div className="statusArea-rightSide">
                                {/* <h3>Status</h3> */}
                                <div>

                                </div>
                            </div>
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

            {/* <StatusPokemon /> */}
            <div className="buttonSection">
                <Button variant="outlined" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
            </div>
        </DetailContainer>
    )
}

export default DetailsPokemon