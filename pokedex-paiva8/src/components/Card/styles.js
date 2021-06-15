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

.infoPoke {
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: start;

    span {
        font-size: 1.3rem;
    }
    h1 {
        font-weight: bold;
    }
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