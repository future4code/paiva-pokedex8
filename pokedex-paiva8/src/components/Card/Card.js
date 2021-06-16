import React from 'react';
import { CardContainer, PokeImg, TypeText } from './styles';
import Button from '@material-ui/core/Button';
import { goToDetails } from '../../routes/coordinator';
import { useHistory, useParams } from "react-router-dom";

function Card(props) {
    const { name, type, image } = props

    const history = useHistory()
    return (
        <CardContainer>
            <PokeImg src={image} alt={name} className="pokemonLogo" />
            <div className="infoPoke">
                <h1>{(name).toUpperCase()}</h1>
            </div>

            <div className="pokeType">
                <div classname="pokeAlign">
                    <TypeText>{type}</TypeText>
                </div>
            </div>

            <div className="buttonArea">
                <Button onClick={() => goToDetails(history, name)} variant="outlined" color="secondary">DETALHES</Button>
                <Button variant="contained" color="secondary">ADICIONAR</Button>
            </div>
        </CardContainer>
    )
}
export default Card;