import useData from "@/hooks/useData";
import { capitalizeFirstLetter } from "@/utils/capitalizeText";
import {
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useTranslation } from "react-i18next";

const useTablePage = () => {
    const { data, isLoading, error } = useData();
    const { t } = useTranslation();

    const table = useReactTable({
        data: data ? data.data.generationmix : [],
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: 5,
            },
        },
        columns: [
            {
                header: t("fuel"),
                accessorKey: "fuel",
                accessorFn: ({ fuel }) => capitalizeFirstLetter(fuel),
            },
            {
                header: t("percentage"),
                accessorKey: "perc",
                accessorFn: ({ perc }) => `${perc}%`,
            },
        ],
    });

    return {
        isLoading,
        error,
        table,
    };
};

export default useTablePage;
