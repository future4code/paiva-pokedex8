import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { HeaderMain, HeaderText } from "../../components/Header/Header";
import { goToLastPage, goToPokedex } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import Card from './../../components/Card/Card'
import PokemonContext from "../../global/PokemonContext";
import { DisplayHome } from "../Home/styled";

const Pokedex = () =>{
    const { pokedex, pokemon } = useContext(PokemonContext)

    const pokeCard = pokedex.map((poke) =>{
        const getType = poke.types.map((type) =>{
            return <span>{type.type.name}</span>
        })

        return (
            <Card
                name={poke.name}
                image={poke.sprites.other["official-artwork"].front_default}
                type={getType}
                poke={poke}
                dex={true}
            />
        )
    })

    const history = useHistory()
    return (
        <AppContainer>
            <HeaderMain>
                <HeaderText>
                    <h1>POKELIST</h1>
                </HeaderText>
            </HeaderMain>
            <Button variant="outlined" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
            <DisplayHome>
                {pokeCard}
            </DisplayHome>
        </AppContainer> 
    )
    ;
};

export default Pokedex