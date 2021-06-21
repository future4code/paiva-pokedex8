import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContainer, PokedexDisplay } from "./styled";
import { HeaderMain, HeaderText } from "../../components/Header/Header";
import { goToLastPage, goToPokedex } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import Card from './../../components/Card/Card'
import PokemonContext from "../../global/PokemonContext";
import { DisplayHome } from "../Home/styled";
import { colorType, TypeSpan } from "../../components/Card/styles";

const Pokedex = () =>{
    const { pokedex, pokemon } = useContext(PokemonContext)

    const pokeCard = pokedex.map((poke) =>{
        const getType = poke.types.map((type) =>{
            return <TypeSpan color={colorType[type.type.name]}>{type.type.name}</TypeSpan>
        })

        return (
            <Card
                name={poke.name}
                image={poke.sprites.other["official-artwork"].front_default}
                type={getType}
                poke={poke}
                isOnPokedex={true}
                viewFromHome={false}
            />
        )
    })

    const history = useHistory()
    return (
        <PokedexDisplay>
            <AppContainer>
                <HeaderMain>
                    <Button className="HeaderButton" variant="outlined" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
                    <HeaderText>
                        <h1>POKEDEX</h1>
                    </HeaderText>
                </HeaderMain>
                <DisplayHome>
                    {pokeCard.length === 0 ? (<div><h1>Sua Pokedex está vazia</h1></div>) : pokeCard}
                </DisplayHome>
            </AppContainer> 
        </PokedexDisplay>
    )
    ;
};

export default Pokedex