import React from "react";

const TableSkeleton: React.FC = () => {
    return (
        <div className="global_fade overflow-hidden rounded-lg shadow-lg shadow-[#0000003f]">
            <div className="bg-[#e3e3e3] h-[76px]"></div>
            <div className="h-full bg-[#f5fcfb] p-4 grid gap-4">
                <div className="rounded-md h-6 w-full bg-[#e3e3e3]" />
                <div className="rounded-md h-6 w-full bg-[#e3e3e3]" />
                <div className="rounded-md h-6 w-full bg-[#e3e3e3]" />
                <div className="rounded-md h-6 w-full bg-[#e3e3e3]" />
            </div>
            <div className="bg-[#e3e3e3] h-[64px]"></div>
        </div>
    );
};

export default TableSkeleton;
