import React from 'react';
import { StatusContainer, StatusInfoPoke, AttacksInfoPoke, PokeInfo, TextInfo, StatusDisplay, StatusText, StatusHead } from './styled';

function StatusPokemon(props) {

    const getPokemon = props.pokemon
    const getStatus = getPokemon.stats.map((poke) =>{
        const name = poke.stat.name
        const value = poke.base_stat
        const status = {name, value}
        return(
            <StatusText>
                <p>{status.name}</p>
                <span>{status.value}</span>
            </StatusText>
        )
    })

    return (
        <StatusDisplay>
            {getStatus}
        </StatusDisplay>
    )
}
export default StatusPokemon;