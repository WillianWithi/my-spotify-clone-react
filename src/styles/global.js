import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin:  0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;   
    }

    html, body, #root {
        height: 100%;
        width: auto;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        background: #181818;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
    }
`


