import styled from "styled-components";
import StatusBackground from '../../assets/style1_bg.png';

export const Detailsection = styled.section`
    color: #000;
    font-size: 1.6rem;
    line-height: 1.6;
    max-width: 1400px;
    width: 100%;
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    height: 100vh;
    

img {
    width: 40vw;
}

.imagesArea {
display: flex;
align-items: center;
justify-content: center;
}

.spinnerImg {
    position: absolute;
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
      width: 30vw;
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
  }
`

export const StatusContainer = styled.div`
background-image: url(${StatusBackground});
background-size: 100% auto;
background-repeat: no-repeat;
height: 100vh;
position: relative;
top: 15%;
`