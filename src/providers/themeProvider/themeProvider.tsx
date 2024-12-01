import { ThemeProvider } from "styled-components";
import GlobalStyles from "@styles/globalStyles";
import ThemeContext from "@/context/themeContext";
import { useInitThemeProvider } from "./themeProvider.hooks";
import React from "react";

const ThemesProvider: React.FC<ThemesProviderProps> = ({ children }) => {
    const { currentTheme, toggleTheme } = useInitThemeProvider();

    return (
        <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

type ThemesProviderProps = {
    children: React.ReactNode;
};

export default ThemesProvider;
