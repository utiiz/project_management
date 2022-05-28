import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.primary};
        color: ${({theme}) => theme.textColor};
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'PT Sans', 'Roboto', sans-serif;
        transition: all 0.2s linear;
    }

    /* total width */
    *::-webkit-scrollbar {
        background-color: transparent;
        width: 16px;
    }

    /* background of the scrollbar except button or resizer */
    *::-webkit-scrollbar-track {
        background-color: transparent;
    }

    /* scrollbar itself */
    *::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colorGray};
        border-radius: 16px;
        border: 4px solid ${({theme}) => theme.primary};
    }

    /* set button(top and bottom of the scrollbar) */
    *::-webkit-scrollbar-button {
        display:none;
    }
`
