import { createGlobalStyle } from 'styled-components';
import { base } from './styles.base';

export const GlobalStyles = createGlobalStyle`

    :root {
        --background-color: #fff;
        --font-color: rgba(0, 0, 0, 0.8);
        --font-color--secondary: rgba(0, 0, 0, 0.55);
    }

    @media ${base.media.colorScheme.dark} {
        :root {
            --background-color: rgba(0, 0, 0, 0.9);
            --font-color: rgba(255, 255, 255, 0.8);
            --font-color--secondary: rgba(255, 255, 255, 0.55);
        }
    }

    body {
        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.font};
    }
    
`;