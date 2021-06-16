import styled from "styled-components";
import HeaderImg from '../../assets/pokedex_bg.png'


export const Header = styled.header`
color: black;
height: 17%;
align-items: center;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
h1 {
    font-size: 1.8vw;
}
font-size: 1rem;
`

export const HeaderMain = styled.header`
background-image: url(${HeaderImg});
background-position: top;
background-repeat: no-repeat;
color: black;
height: 15%;
text-align: center;
`

export const HeaderText = styled.div`
    font-size: 1rem;
    height: 100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        margin-top: 5%;
    }
` 