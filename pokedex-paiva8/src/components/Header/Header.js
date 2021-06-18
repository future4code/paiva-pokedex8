import styled from "styled-components";
import HeaderImg from '../../assets/pokedex_bg.png'


export const Header = styled.header`
color: black;
/* height: 17%; */
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
display: grid;
grid-template-columns: 20% 60% 20%;
width: 100%;
height: 100%;
.HeaderButton{
    display: flex;
    margin: auto;
    width: 50%;
}
@media screen and (max-device-width: 1053px){
    grid-template-rows: repeat(2, 85px);
    .HeaderButton{
        grid-row: 2;
        grid-column: 2;
    }
}
`

export const HeaderText = styled.div`
    background-image: url(${HeaderImg});
    background-position: center;
    grid-column: 2;
    font-size: 1rem;
    height: 85px;
    width:100%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
@media screen and (max-device-width: 1053px){
    grid-row:1;
    grid-column: 1/span 3;
    width:100%; 
}
` 