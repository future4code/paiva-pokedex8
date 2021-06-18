import styled from "styled-components";
import StatusBackground from '../../assets/style1_bg.png';
import Background from '../../assets/main_bg.jpg';

export const DetailContainer = styled.div`
    background-image: url(${Background});
    background-position: top;
    background-repeat: no-repeat,repeat;
    background-size: 100% auto;
    background-color: #0a141e;
    position: relative;
    height: 200vh;
    min-width: 950px;
    max-width: 1400px;
    margin: 0 auto;
`

export const Detailsection = styled.section`
color: #000;
font-size: 1.6rem;
line-height: 1.6;
width: 100%;
margin: 0 auto;

  header {
    display: flex;
    color: #000;
    font-size: 1.6rem;
    text-align: center;
    max-height: 10vw;
    min-height: 88px;
    align-items: center;
    justify-content: center;
    
  }  
  @media(min-width: 1000px) {
        header {
            height: 20vh;
        }
    }

.pokemon-detail__header {
    margin-top: 1%;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: 50%;
    transform: translate(0 -50%);
span {
    font-size: 2vw !important;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: inline-block;
}
}


.pokemon-detail_slider {
display: flex;
align-items: center;
justify-content: space-between;
color: #b3eafe;
text-align: center;
position: relative;
width: 100%;


.pokemon-slider__left {
background-image: url("https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_pc_left.png");
background-size: contain;
background-repeat: no-repeat;
width: 30%;
min-height: 68.5px;
position: relative;
z-index: 101;


img {
    left: 5%;
    width: 15%;
    position: absolute;
    cursor: pointer;

}
}

.pokemon-detail_center {
position: absolute;
z-index: 100;
left: 0;
right: 0;
text-align: center;

p {
    :first-child {
        line-height: 0;
        font-size: 2rem;
    }
    :last-child{
        font-size: 2.1rem;
    }
}
}

.pokemon-detail_right {
    background-image: url("https://sg.portal-pokemon.com/play/resources/pokedex/img/arrow_pc_right.png");
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 68.5px;
    position: relative;
    width: 30%;
    z-index: 101;
    text-align: center;
    span {
left: 10%;
position: absolute;
    }

    img {
        right: 5%;
        width: 15%;
        cursor: pointer;
        position: absolute;
    }

}
}

img {
    width: 30vw;
}

.blurImage{
      position: absolute;
      z-index: 1;
  }

.imagesArea {
display: flex;
align-items: center;
justify-content: center;
margin-top: 45px;

}

.spinnerImg {
    position: absolute;
    z-index: 0;
    width: 40vw;
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
  .pokemonImg {
      position: relative;
      width: 25vw;
      z-index: 1000;
  }

  .buttonSection{
display: flex;
justify-content: center;
flex-direction: column;
position: absolute;
width: 50px;
bottom: 20%;
left: 1%;
  }

.statusArea {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.statusArea-leftSide {

}

.statusArea-rightSide {
width: 100%;

}

@media(min-width: 1090px) {
        .imagesArea {
            margin-top: 5%;
        }
    }
`

export const InfoStatus = styled.div`
      position: absolute;
      color: white;
      right: 8%;
      text-align: center;
      width: 20%;
      display: flex;
      justify-content: space-between;

      p {
          color: #b3eafe;
          font-size: 2.1vw;
  }
  span {
      font-size: 1.8vw;
  }
`

export const StatusContainer = styled.div`
height: 100vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const StatusInfoPoke = styled.div`
flex: 1;
`

export const AttacksInfoPoke = styled.div`
background-image: url(${StatusBackground});
background-size: 100% auto;
background-repeat: no-repeat;
flex: 1;

`