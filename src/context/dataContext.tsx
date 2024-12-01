import { generationResponse } from "@/services/generationService/generationService.types";
import { createContext } from "react";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "react-query";

const DataContext = createContext<DataContextProps | null>(null);

export type DataContextProps = {
    data: generationResponse | null;
    isLoading: boolean;
    errorMessage: string | null;
    error: unknown;
    refetch: <TPageData>(
        options?: RefetchOptions & RefetchQueryFilters<TPageData>
    ) => Promise<QueryObserverResult<unknown, unknown>>;
};

export default DataContext;
