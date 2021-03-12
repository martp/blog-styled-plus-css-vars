import React, { ReactNode, useState, createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { themes } from '../../styles/styles.themes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/styles.global';

export type ThemeType = 'light' | 'dark' | 'auto';

export interface ThemeContextType {
    themeType: ThemeType,
    theme: DefaultTheme,
    setTheme: (theme: ThemeType) => void
}; 

export const ThemeContext = createContext<ThemeContextType>({
    themeType: 'auto',
    theme: themes.auto,
    setTheme: (theme: ThemeType) => {}
}); 

interface ThemeProps {
    children: ReactNode
}

const Theme = (props: ThemeProps) => {
    const { children } = props;
    const [theme, setTheme] = useState(themes.auto);
    const [themeType, setThemeType] = useState<ThemeType>('auto');
    const newContext: ThemeContextType = {
        themeType: themeType,
        theme: themes.auto,
        setTheme: (theme: ThemeType) => {
            setThemeType(theme);
            if (theme === 'auto') {
                setTheme(themes.auto)
            } else if (theme === 'light') {
                setTheme(themes.light)
            } else if (theme === 'dark') {
                setTheme(themes.dark)
            }
        }
    }; 
    return (
        <ThemeContext.Provider value={newContext}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}; 

export default Theme;