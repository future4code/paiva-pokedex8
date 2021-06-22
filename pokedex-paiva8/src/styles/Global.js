import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;

}
html, #root {
    max-width: 100vw;
    min-height: 100vh;
}
body {
    width: 100%;
    height: 100%;
}
`

export default Global;