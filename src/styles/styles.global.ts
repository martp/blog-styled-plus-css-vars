import { createGlobalStyle } from 'styled-components';
import { base } from './styles.base';

export const GlobalStyles = createGlobalStyle`

    :root {

        --color-primary: #0b7bff;
        --color-light: #ffffff;
        --color-light-secondary: #f2f2f2;
        --color-dark: #191919;
        --color-dark-secondary: #252525;

        --background-color: var(--color-light);
        --background-color--secondary: var(--color-light-secondary);
        --font-color: rgba(0, 0, 0, 0.8);
        --font-color--secondary: rgba(0, 0, 0, 0.55);

        @media ${base.media.colorScheme.dark} {
            :root {
                --background-color: var(--color-dark);
                --background-color--secondary: var(--color-dark-secondary);
                --font-color: rgba(255, 255, 255, 0.8);
                --font-color--secondary: rgba(255, 255, 255, 0.55);
            }
        }
        
    }

    body {
        font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.font};
    }
    
`;