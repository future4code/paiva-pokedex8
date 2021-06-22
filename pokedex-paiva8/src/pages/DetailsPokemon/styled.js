import styled from "styled-components";
import Background from '../../assets/list_bg.jpg';


export const DetailContainer = styled.div`
    background-image: url(${Background});
    p{
        text-shadow:
            0 0 7px #fff,
            0 0 10px #fff,
            0 0 21px #fff,
            0 0 42px #00fff7,
            0 0 82px #00fff7,
            0 0 92px #00fff7,
            0 0 102px #00fff7,
            0 0 151px #00fff7;
      }
`

export const Detailsection = styled.section`
margin-top: 5vh;
display: flex;
flex-direction: column;
color: #000;
font-size: 1.6rem;
line-height: 1.6;
width: 100%;

`
export const PokeNameDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    p, h2{
        color: #80cff4;
    }
`


export const StatusContainer = styled.div`
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
`


export const PokeDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

` 

export const AnimationBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokemonBackDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 25%;
    margin-top: auto;
    margin-bottom: auto;

`
export const PokemonImgDisplay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    display: flex;
`

export const AnimationPoke = styled.img`
    @media screen and (min-width: 845px){
    animation: rotate-anime 3s linear infinite;
    animation-name: spin;
      animation-duration: 3000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      transform: rotate(3deg);
      transform: rotate(0.3rad);
      transform: rotate(3grad);
      transform: rotate(.03turn);
      @keyframes spin {
      from {
          transform: rotate(0deg);
      }

      to {
          transform: rotate(360deg);
      }
    }
}
    
`

export const PokeImg = styled.img`
    width: 90%;
` 

export const InfoStatus = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    color: #b3eafe;
    @media screen and (max-device-width: 1200px){
        flex-direction: column;
        align-items: center;
    }
 `
export const TextInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const PokeInfo = styled.div`
    border-radius: 100px;
    padding: 1vh;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    background-color: rgba(16,20,28,0.4);
    border: 1px solid #80cff4;
    @media screen and (max-device-width: 1200px){
        width: 80%;
        margin-bottom: 30px;
    }

`

export const StatusDisplay = styled.div`
    border-radius: 100px;
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    background-color: rgba(16,20,28,0.4);
    border: 1px solid #80cff4;
    flex-wrap: wrap;
    @media screen and (max-device-width: 1200px){
        width: 80%;
    }

`
export const StatusText = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media screen and (max-device-width: 1200px){
        margin: 25px;
    }
      

`
export const FrontAndBack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: 15%;
    border: 1px solid #80cff4;
    background-color: rgba(16,20,28,0.4);
    img{
        width: 180px;
    }
    @media screen and (max-device-width: 1200px){
        flex-direction: row;
        justify-content: space-evenly;
        width: 80%;
        margin-bottom: 20px;
    }
`

