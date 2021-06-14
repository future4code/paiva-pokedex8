import React from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";


const Pokedex = () =>{
    const history = useHistory()

    return(
        <div>
            <h1>POKEDEX</h1>
            <button onClick={()=> goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default Pokedex