import styled from "styled-components";
import error from '../../assets/list_bg.jpg'

export const ErrorDisplay = styled.div`
    background-image: url(${error});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const ErrorButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
`