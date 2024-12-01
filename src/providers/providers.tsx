import React from "react";
import ThemesProvider from "./themeProvider/themeProvider";
import LayoutProvider from "./layoutProvider/layoutProvider";
import DataProvider from "./dataProvider/dataProvider";

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemesProvider>
            <DataProvider>
                <LayoutProvider>{children}</LayoutProvider>
            </DataProvider>
        </ThemesProvider>
    );
};

type ProvidersProps = {
    children: React.ReactNode;
};

export default Providers;
