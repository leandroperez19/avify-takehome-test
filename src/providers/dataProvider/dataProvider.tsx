import DataContext from "@/context/dataContext";
import React from "react";
import useDataHooks from "./dataProvider.hooks";

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const { data, isLoading, error, errorMessage, refetch } = useDataHooks();

    return (
        <DataContext.Provider
            value={{
                data,
                isLoading,
                error,
                errorMessage,
                refetch,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

type DataProviderProps = {
    children: React.ReactNode;
};

export default DataProvider;
