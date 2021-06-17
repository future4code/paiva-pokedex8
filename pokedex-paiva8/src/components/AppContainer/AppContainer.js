import styled from "styled-components";
import Background from '../../assets/main_bg.jpg';
import Background2 from '../../assets/list_bg.jpg';

export const AppContainer = styled.div`
    background-image: url(${Background2});
    background-position: center;
    background-color: #0a141e;
    color: white;
    overflow: auto;

    h1 {
        text-align: center;
    }
`

export const DetailContainer = styled.div`
    background-image: url(${Background});
    height: 2000px;
    background-position: top;
    position: relative;
    background-repeat: no-repeat, repeat;
    background-size: 100% 100%;
    background-color: #0a141e;
    color: white;

    h1 {
        text-align: center;
    }
`