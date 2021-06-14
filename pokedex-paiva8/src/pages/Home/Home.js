import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import { goToPokedex, goToDetails } from '../../routes/coordinator';


const Home = () => {
    const history = useHistory()
    return (
        <div>
            <button onClick={() => goToPokedex(history)}>Pokedex</button>
            <button onClick={()=> goToDetails(history)} >Detalhes</button>
        </div> 
    )
    ;
};

export default Home
