import React from 'react';
import { CardContainer } from './styles';
import Button from '@material-ui/core/Button';
import { goToDetails } from '../../routes/coordinator';
import { useHistory, useParams } from "react-router-dom";

function Card(props) {
    const history = useHistory()
    return (
        <CardContainer>
            <img src={props.image} alt="" className="pokemonLogo" />
            <div className="infoPoke">
                <span>{props.type}</span>
                <h1>{props.name}</h1>
            </div>
            <div className="buttonArea">
                <Button variant="outlined" color="secondary">ADICIONAR</Button>
                <Button onClick={()=> goToDetails(history, props.name)} variant="outlined" color="secondary">DETALHES</Button>
            </div>
        </CardContainer>
    )
}
export default Card;