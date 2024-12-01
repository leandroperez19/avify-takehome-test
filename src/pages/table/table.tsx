import React from "react";
import { TableWrapper } from "./table.styled";
import useTablePage from "./table.hooks";
import ErrorBox from "@/components/errorBox/errorBox";
import Table from "@/components/table/table";
import TableSkeleton from "@/components/skeleton/tableSkeleton/tableSkeleton";
import { useTranslation } from "react-i18next";

const TablePage: React.FC = () => {
    const { error, isLoading, table } = useTablePage();
    const { t } = useTranslation();

    if (error)
        return (
            <TableWrapper>
                <div className="content">
                    <ErrorBox />
                </div>
            </TableWrapper>
        );

    return (
        <TableWrapper>
            <div className="content">
                <h1 className="text-primary font-bold text-lg md:text-2xl lg:text-[32px]">
                    {t("main_title")}
                </h1>
                <h2 className="mt-4 text-secondary text-base lg:text-2xl">
                    {t("table")}
                </h2>
                <div className="mt-4 lg:mt-8">
                    {isLoading ? (
                        <div className="h-[40dvh]">
                            <TableSkeleton />
                        </div>
                    ) : (
                        <Table
                            table={table}
                            isFetching={isLoading}
                            pagination={{
                                canNext: table.getCanNextPage(),
                                canPrev: table.getCanPreviousPage(),
                                handleNextPage: () => table.nextPage(),
                                handlePrevPage: () => table.previousPage(),
                            }}
                        />
                    )}
                </div>
            </div>
        </TableWrapper>
    );
};

export default TablePage;
