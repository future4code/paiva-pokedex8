import styled from "styled-components";
import Background from '../../assets/background-detail.png';
import Background2 from '../../assets/list_bg.jpg'

export const AppContainer = styled.div`
    background-image: url(${Background2});
    background-position: center;
    background-color: #0a141e;
    height: 100vh;
    color: white;
    overflow: auto;

    h1 {
        text-align: center;
    }
`

export const DetailContainer = styled.div`
    background-image: url(${Background});
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #0a141e;
    height: 100vh;
    color: white;
    overflow: hidden;

    h1 {
        text-align: center;
    }
`