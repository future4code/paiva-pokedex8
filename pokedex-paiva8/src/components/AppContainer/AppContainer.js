import styled from "styled-components";
import Background2 from '../../assets/list_bg.jpg';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: white;
    background-image: url(${Background2});
    background-position: center;
    background-color: #0a141e;
    h1 {
        text-align: center;
    }
`
