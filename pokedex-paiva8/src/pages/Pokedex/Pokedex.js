import React from "react";
import { useHistory } from "react-router";
import { AppContainer } from "../../components/AppContainer/AppContainer";
import { HeaderMain, HeaderText } from "../../components/Header/Header";
import { goToLastPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';

const Pokedex = () =>{
    const history = useHistory()

    return(
        <AppContainer>
            <HeaderMain>
                <HeaderText>
                    <h1>POKEDEX</h1>
                </HeaderText>
            </HeaderMain>
            <Button variant="outlined" color="secondary"  onClick={()=> goToLastPage(history)}>Voltar</Button>
        </AppContainer>
    )
}

export default Pokedex