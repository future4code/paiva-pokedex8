import styled from "styled-components";
import Background from '../../assets/cardbackground.png'

export const CardContainer = styled.div`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: 100% 100%;
width: 350px;
height: 500px;
color: white;
text-align: center;
display: flex;
flex-direction: column;
padding: 25px;
img{
    transition: transform .5s
}
:hover>img{
    transform: scale(1.2);
}
:hover h1{
    transition: text-shadow .5s;
    text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 25px #fff,
            0 0 40px #00fff7,
            0 0 55px #00fff7,
            0 0 70px #00fff7,
            0 0 80px #00fff7,
            0 0 120px #00fff7;
    }


.infoPoke {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: start;
    margin-top: 5%;

    span {
        font-size: 1.3rem;
    }
    h1 {
        font-weight: bold;
    }
}

.pokeType {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex: 1;
}

.pokemonLogo {
margin: 10px auto;
width: 80%;
}

.buttonArea {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: space-around;

button {
    height: 40px;
}
}
`
export const PokeImg = styled.img`
:hover{
    cursor: pointer;
}
`

export const TypeText = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    font-size: 1.2rem;
    color: white;
    width: 60%;
    flex: 1;
    text-transform: uppercase;
    background-color: ${props => props.color};
 
`
export const colorType = {
    grass: "#96c44e",
    flying: "#b2babd",
    water: "#32bad9;",
    poison: "#b97fc9",
    fire: "#fd7d24",
    bug: "#729f3f",
    normal: "#808080",
    ground: "#E7BD6B",
    fairy:"#E397D1",
    electric:"#E5C531",
    fighting: "#CB5F48",
    psychic:"#E5709B",
    rock:"#B2A061",
    ghost:"#846AB6",
    dragon:"#6A7BAF",
    dark: "#736C75 ",
    steel:"#89A1B0",
    ice: "#70CBD4 ",
  };

  export const TypeSpan = styled.span`
    background-color: ${props => props.color};
    padding: 8px;
    border-radius: 20px;
    color: white;
`
