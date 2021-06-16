import React, { useContext } from "react";
import { useHistory } from "react-router";
import { goToLastPage } from "../../routes/coordinator";
import Button from '@material-ui/core/Button';
import { Detailsection, InfoStatus } from './styled';
import { Header } from '../../components/Header/Header'
import { DetailContainer } from "../../components/AppContainer/AppContainer";
import { useParams } from "react-router-dom";
import PokemonContext from "../../global/PokemonContext";


function DetailsPokemon() {
    const history = useHistory();
    const { pokemon } = useContext(PokemonContext)
    const { id } = useParams()

    const pokeFind = pokemon.find(PokeName => PokeName.name === id)

    const pokeType = pokeFind.types.map((type) => {
        const types = type.type["name"]
        return <span>{types}</span>
    })
    const type1 = pokeFind.types[0].type.name
    const abilities1 = pokeFind.abilities[0].ability.name

    console.log(pokeFind.abilities)

    for (let i = 0; i < pokeFind.lenght; i++) {
        console.log(pokeFind.abilities[i])
    }

    return (
        <DetailContainer>
            <Header>
                <h1>PAGINA DE DETALHES</h1>
            </Header>
            <Detailsection>
                <div className="imagesArea">
                    <img src="https://sg.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" className="spinnerImg" />

                    <img src={pokeFind.sprites.other["official-artwork"].front_default} alt="Luxray" className="pokemonImg" />
                </div>
                <InfoStatus className="statusInfo">
                    <div>
                        <p>Height</p>
                        <span>{(pokeFind.height * 0.1).toFixed(2)} M</span>
                        <p>Type</p>
                        <div style={{ display: "flex", flexDirection: "column" }} >
                            {pokeFind.types.map((res => {
                                const { type } = res
                                console.log(type.name)
                                return <span key={Math.random()}>{type.name}</span>

                            }))}
                        </div>

                    </div>
                    <div>
                        <p>Weight</p>
                        <span>{pokeFind.weight - 0.1} Kg</span>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p>Ability</p>
                            {pokeFind.abilities.map((res => {
                                const { ability } = res
                                return <span key={ability.slot}>{ability.name}</span>
                            }))}

                        </div>
                    </div>
                </InfoStatus>
                <div className="buttonSection">
                    <Button variant="outlined" color="secondary" onClick={() => goToLastPage(history)}>Voltar</Button>
                </div>
            </Detailsection>
        </DetailContainer >
    )
}

export default DetailsPokemon