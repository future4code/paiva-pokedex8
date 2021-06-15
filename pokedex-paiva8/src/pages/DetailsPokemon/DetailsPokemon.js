import React from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { DetailContainer, Detailsection, Header, InfoStatus } from './styled';


function DetailsPokemon() {
    const history = useHistory();

    return (
        <DetailContainer>
            <Header>
                <h1>PAGINA DE DETALHES</h1>
            </Header>
            <Detailsection>
                <div className="imagesArea">

                    <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" className="spinnerImg" />

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/405.png" alt="Luxray" className="pokemonImg" />

                </div>
                <InfoStatus className="statusInfo">
                    <div>
                        <p>Height</p>
                        <span>1.0 M</span>
                        <p>Type</p>
                        <span>Eletric</span>
                        <p>Ability</p>
                        <span>Overgrow</span>
                    </div>
                    <div>
                        <p>Weight</p>
                        <span>13.0 kg</span>
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