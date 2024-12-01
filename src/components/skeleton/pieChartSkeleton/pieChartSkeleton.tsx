import React from "react";
import { PieChartSkeletonWrapper } from "./pieChartSkeleton.styled";
import { PieChartSkeletonProps } from "./pieChartSkeleton.types";

const PieChartSkeleton: React.FC<PieChartSkeletonProps> = ({ size }) => (
    <PieChartSkeletonWrapper $size={size} className="global_fade" />
);

export default PieChartSkeleton;
