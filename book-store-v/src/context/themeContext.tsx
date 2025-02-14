import { createContext, ReactNode, useEffect, useState } from "react";
import { getTheme, ThemeName } from "../style/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/global";

const DEFAULT_THEME_NAME : ThemeName = 'light';
const THEME_LOCALSTORAGE_KEY: string = 'book_store_theme';

interface State {
    themeName: ThemeName;
    toggleTheme: () => void;
}

export const state = {
    themeName: DEFAULT_THEME_NAME,
    toggleTheme: () => {}
};

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({children}: {children : ReactNode} ) => {
    const [themeName, setThemeName] = useState<ThemeName>(DEFAULT_THEME_NAME);

    const toggleTheme = () => {
        const newThemeName : ThemeName = themeName === 'light' ? 'dark' : 'light';
        setThemeName(newThemeName);

        localStorage.setItem(THEME_LOCALSTORAGE_KEY, newThemeName);
    }

    useEffect(()=>{
        const savedThemeName : ThemeName = (localStorage.getItem(THEME_LOCALSTORAGE_KEY) as ThemeName) || DEFAULT_THEME_NAME;

        setThemeName(savedThemeName || DEFAULT_THEME_NAME);
        
    }, []);

    return (
        <ThemeContext.Provider value={{themeName, toggleTheme}}>
            <ThemeProvider theme={getTheme(themeName)}>
            <GlobalStyle themeName={themeName} />
            {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

