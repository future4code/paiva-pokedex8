import React, { useContext }  from 'react'
import { useHistory, useParams } from "react-router-dom";
import { AppContainer } from '../../components/AppContainer/AppContainer';
import { HeaderText, HeaderMain } from '../../components/Header/Header';
import { goToPokedex, goToDetails } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';
import PokemonContext from '../../global/PokemonContext';
import Card from './../../components/Card/Card'
import { DisplayHome, HomeDisplay, NavPages} from './styled';
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core';
import { colorType, TypeSpan } from '../../components/Card/styles';




const Home = () => {
    const { pokemon, pokedex, pagination, setPagination } = useContext(PokemonContext)

    const handleChange = (event, value) => {
        setPagination(value);
    };

    const onPokedex = (poke) => {
        const index = pokedex.findIndex((item) => {
            return item.name === poke.name
         })
         return index > -1
     }

    const pokeCard = pokemon.map((poke) =>{
        const onDex = onPokedex(poke)
        const getType = poke.types.map((type) =>{
            return <TypeSpan color={colorType[type.type.name]}>{type.type.name}</TypeSpan>
        })

        return (
            <Card
                name={poke.name}
                image={poke.sprites.other["official-artwork"].front_default}
                type={getType}
                poke={poke}
                isOnPokedex={onDex}
                viewFromHome={true}
            />
        )
    })

    const useStyles = makeStyles(() => ({
        ul: {
          "& .MuiPaginationItem-root": {
            color: "#fff"
          }
        }
      }));

    const classes = useStyles()

    
    const history = useHistory()
    return (
        <HomeDisplay>
            <AppContainer>
                <HeaderMain>
                <Button className="HeaderButton" variant="contained" color="secondary" onClick={() => goToPokedex(history)}>Pokedex</Button>
                    <HeaderText>
                        <h1>POKELIST</h1>
                    </HeaderText>
                </HeaderMain>
                <DisplayHome>
                    {pokeCard}
                </DisplayHome>
            </AppContainer> 
            <NavPages>
                <Pagination classes={{ul: classes.ul}} color="secondary" count={56} page={pagination} onChange={handleChange} />
            </NavPages>
        </HomeDisplay>
    )
    ;
};

export default Home
