import React from "react";
import { RowProps } from "./row.types";

const Row: React.FC<RowProps> = ({ leftItem, rightItem }) => {
    return (
        <div className="flex justify-between items-center">
            <div>{leftItem}</div>
            <div>{rightItem}</div>
        </div>
    );
};

export default Row;
