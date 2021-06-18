import styled from "styled-components";
import StatusBackground from '../../assets/style1_bg.png';

export const Detailsection = styled.section`
    color: #000;
    font-size: 1.6rem;
    line-height: 1.6;
    max-width: 1400px;
    /* width: 100%; */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    height: 100vh;
    

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