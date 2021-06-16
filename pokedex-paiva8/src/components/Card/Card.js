import React from 'react';
import { CardContainer, PokeImg, TypeText } from './styles';
import Button from '@material-ui/core/Button';
import { goToDetails } from '../../routes/coordinator';
import { useHistory, useParams } from "react-router-dom";

function Card(props) {
    const history = useHistory()
    return (
        <CardContainer>
            <PokeImg src={props.image} alt="" className="pokemonLogo" />
            <div className="infoPoke">
                <TypeText>{(props.type)}</TypeText>
                <h1>{(props.name).toUpperCase()}</h1>
            </div>
            <div className="buttonArea">
                <Button onClick={()=> goToDetails(history, props.name)} variant="outlined" color="secondary">DETALHES</Button>
                <Button variant="contained" color="secondary">ADICIONAR</Button>
            </div>
        </CardContainer>
    )
}
export default Card;