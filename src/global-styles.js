import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-height: 100%;
        overflow-x: hidden;
        overscroll-behavior: none;
    }
`