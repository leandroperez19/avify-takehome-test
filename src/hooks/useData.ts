import DataContext from "@/context/dataContext";
import { useContext } from "react";

const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within an DataProvider");
    }
    return context;
};

export default useData;
