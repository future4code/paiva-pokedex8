import React, { useContext }  from 'react'
import { useHistory, useParams } from "react-router-dom";
import { AppContainer } from '../../components/AppContainer/AppContainer';
import { HeaderText, HeaderMain } from '../../components/Header/Header';
import { goToPokedex, goToDetails } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import PokemonContext from '../../global/PokemonContext';
import Card from './../../components/Card/Card'
import { DisplayHome } from './styled';

const Home = () => {
    const { pokemon, pokedex } = useContext(PokemonContext)

    const pokeCard = pokemon.map((poke) =>{
        const getType = poke.types.map((type) =>{
            return <span>{type.type.name}</span>
        })

        return (
            <Card
                name={poke.name}
                image={poke.sprites.other["official-artwork"].front_default}
                type={getType}
                poke={poke}
                dex={false}
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
            <Button variant="outlined" color="secondary" onClick={() => goToPokedex(history)}>Pokedex</Button>
            <DisplayHome>
                {pokeCard}
            </DisplayHome>
        </AppContainer> 
    )
    ;
};

export default Home
