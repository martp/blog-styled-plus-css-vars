import { DefaultTheme } from 'styled-components';

const colors = {
    light: 'var(--color-light-secondary)',
    dark: 'var(--color-dark-secondary)',
    primary: 'var(--color-primary)',
}

export const themes = {
    auto: {
        colors: {
            ...colors,
            background: 'var(--background-color)',
            backgroundSecondary: 'var(--background-color--secondary)',
            font: 'var(--font-color)',
            fontSecondary: `var(--font-color--secondary)`
        }  
    } as DefaultTheme,
    light: {
        colors: {
            ...colors,
            background: '#fff',
            backgroundSecondary: 'rgba(0, 0, 0, 0.05)',
            font: 'rgba(0, 0, 0, 0.8)',
            fontSecondary: `rgba(0, 0, 0, 0.55)`
        }  
    } as DefaultTheme,
    dark: {
        colors: {
            ...colors,
            background: 'rgba(0, 0, 0, 0.9)',
            backgroundSecondary: 'rgba(255, 255, 255, 0.05)',
            font: 'rgba(255, 255, 255, 0.8)',
            fontSecondary: `rgba(255, 255, 255, 0.55)`
        }  
    } as DefaultTheme
};