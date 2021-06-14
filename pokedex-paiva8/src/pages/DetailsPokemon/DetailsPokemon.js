import React from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";


const DetailsPokemon = () =>{
    const history = useHistory()

    return(
        <div>
            <h1>PAGINA DE DETALHES</h1>
            <button onClick={()=> goToLastPage(history)}>Voltar</button>
        </div>
    )
}

export default DetailsPokemon