import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { AppContainer } from '../../components/AppContainer/AppContainer';
import { HeaderText, HeaderMain } from '../../components/Header/Header';
import { goToPokedex, goToDetails } from '../../routes/coordinator';
import Button from '@material-ui/core/Button';

const Home = () => {
    const history = useHistory()
    return (
        <AppContainer>
            <HeaderMain>
                <HeaderText>
                    <h1>POKELIST</h1>
                </HeaderText>
            </HeaderMain>
            <Button variant="outlined" color="secondary" onClick={() => goToPokedex(history)}>Pokedex</Button>
            <Button variant="outlined" color="secondary" onClick={()=> goToDetails(history)} >Detalhes</Button>
        </AppContainer> 
    )
    ;
};

export default Home
