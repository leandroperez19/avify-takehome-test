import React from "react";

const RowSkeleton: React.FC = () => {
    return (
        <div className="flex justify-between items-center scroll-py-1">
            <div className="global_fade w-[15%] min-w-[20px] max-w-[70px] h-4 rounded-sm bg-[#c3c3c3]" />
            <div className="global_fade w-[15%] min-w-[20px] max-w-[70px] h-4 rounded-sm bg-[#c3c3c3]" />
        </div>
    );
};

export default RowSkeleton;
