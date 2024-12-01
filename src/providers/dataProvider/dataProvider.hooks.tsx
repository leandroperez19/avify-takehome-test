import { getGeneration } from "@/services/generationService/generationService";
import { useQuery } from "react-query";

const useDataHooks = () => {
    const {
        data: res,
        error,
        isLoading,
        refetch,
    } = useQuery({
        queryFn: getGeneration,
        queryKey: ["get-generation"],
        refetchOnWindowFocus: false,
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    return {
        data,
        errorMessage,
        error,
        isLoading,
        refetch,
    };
};

export default useDataHooks;
