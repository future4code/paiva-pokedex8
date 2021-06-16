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
`