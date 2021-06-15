import styled from "styled-components";

// import Background from '../../assets/main_bg.jpg'





export const Detailsection = styled.section`
    color: #000;
    font-size: 1.6rem;
    line-height: 1.6;
    max-width: 1400px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    position: relative;

img {
    width: 35vw;
}

.imagesArea {
display: flex;
align-items: center;
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
      width: 300px;
      display: flex;
      justify-content: space-between;

      p {
          color: #b3eafe;
  }
`