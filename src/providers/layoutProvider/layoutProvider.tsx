import LayoutContext from "@/context/layoutContext";
import React from "react";
import { useLayoutHooks } from "./layoutProvider.hooks";

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
    const { sidebarOpen, setSidebarOpen, sidebarRef, sidebarToggle } =
        useLayoutHooks();

    return (
        <LayoutContext.Provider
            value={{
                sidebarOpen,
                setSidebarOpen,
                sidebarRef,
                sidebarToggle,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

type LayoutProviderProps = {
    children: React.ReactNode;
};

export default LayoutProvider;
