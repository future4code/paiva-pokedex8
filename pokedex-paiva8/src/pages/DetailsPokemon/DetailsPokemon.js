import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToLastPage, removePokedex } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { Detailsection, InfoStatus, DetailContainer, AnimationPoke, PokeImg, TextInfo, PokeInfo, PokeNameDetail, PokeDisplay, AnimationBack, PokemonBackDisplay, PokemonImgDisplay, FrontAndBack } from './styled';
import { HeaderMain, HeaderText} from '../../components/Header/Header'
import { useParams } from "react-router-dom";
import PokemonContext from "../../global/PokemonContext";
import StatusPokemon from './StatusPokemon';
import { PokemonCircle, PokemonBackground } from '../../constants';
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { colorType, TypeSpan } from "../../components/Card/styles";
import {addPokedex} from '../../components/Card/Card'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


function DetailsPokemon() {
    const history = useHistory();
    const { pokemon, pokedex, setPokedex } = useContext(PokemonContext)
    const { id } = useParams()

    const pokeFind = (pokemon.find(PokeName => PokeName.name === id) || (pokedex.find(PokeName => PokeName.name === id)))
    const AddOrRemove = () =>{
        if (pokedex.find(PokeName => PokeName.name === id)){
            return true
        }else{
            return false
        }
    }
    const pad = "0000"

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

    return (
        <DetailContainer>
            {pokeFind ? (
                <>
                    <AppContainer>
                        <HeaderMain>
                            <Button className="HeaderButton" variant="contained" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
                                <HeaderText>
                                    <h1>DETALHES</h1>
                                </HeaderText>
                            <Button className="DetailButton" onClick={ AddOrRemove() ?  ()=>removePokedex(pokeFind) : ()=>addPokedex(pokeFind) }variant="contained" color="secondary">{AddOrRemove() ? ("Remover") :("Adicionar") }</Button>
                        </HeaderMain>
                        <Detailsection>
                        <PokeNameDetail>
                            <p>{(pad.substring(0 , pad.length - (""+pokeFind.id).length)+pokeFind.id)}</p>
                            <h2>{pokeFind.name.toUpperCase()}</h2>
                        </PokeNameDetail>
                        <div>
                            <div>
                                <PokeDisplay>
                                    <AnimationBack>
                                        <AnimationPoke src={PokemonBackground} alt="Background" className="spinnerImg" />
                                    </AnimationBack>
                                    <PokemonBackDisplay>
                                        <img src={PokemonCircle} alt="Background" className="backPoke" />
                                    </PokemonBackDisplay>
                                    <PokemonImgDisplay>
                                        <PokeImg src={pokeFind.sprites.other["official-artwork"].front_default} alt="Pokemon" className="pokemonImg" />
                                    </PokemonImgDisplay>
                                </PokeDisplay>
                            </div>
                            <InfoStatus>
                                <FrontAndBack>
                                        <img src={pokeFind.sprites.front_default}></img>
                                        <img src={pokeFind.sprites.back_default}></img>
                                </FrontAndBack>
                                <PokeInfo>
                                    <TextInfo>
                                        <p>Height</p>
                                        <span>{(pokeFind.height * 0.1).toFixed(2)} M</span>
                                        <p>Type</p>
                                        <div style={{ display: "flex", flexDirection: "column" }} >
                                            {pokeFind.types.map((res => {
                                                const { type } = res
                                                return <TypeSpan color={colorType[type.name]} key={Math.random()}>{type.name}</TypeSpan>
                                            }))}
                                        </div>
                                    </TextInfo>
                                    <TextInfo>
                                        <p>Weight</p>
                                        <span>{pokeFind.weight - 0.1} Kg</span>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <p>Ability</p>
                                            {pokeFind.abilities.map((res => {
                                                const { ability } = res
                                                return <span key={ability.slot}>{ability.name}</span>
                                            }))}
                                        </div>
                                    </TextInfo>
                                </PokeInfo>
                                <StatusPokemon pokemon={pokeFind}/>
                            </InfoStatus>
                        </div>
                        </Detailsection>
                    </AppContainer>
                </>
            ) : (
                <>
                    <HeaderMain>
                        <h1>Carregando...</h1>
                    </HeaderMain>
                </>
            )}
        </DetailContainer>
    )
}

export default DetailsPokemon