import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            light: string,
            dark: string,
            background: string,
            backgroundSecondary: string,
            font: string,
            fontSecondary: string
        };
    }
}