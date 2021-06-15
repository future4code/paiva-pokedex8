import React from 'react';
import { CardContainer } from './styles';
import Button from '@material-ui/core/Button';
function Card() {
    return (
        <CardContainer>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/405.png" alt="" className="pokemonLogo" />
            <div className="infoPoke">
                <span>123</span>
                <h1>Luxray</h1>
            </div>
            <div className="buttonArea">
                <Button variant="outlined" color="secondary">ADICIONAR</Button>
                <Button variant="outlined" color="secondary">DETALHES</Button>
            </div>
        </CardContainer>
    )
}
export default Card;