import styled from "styled-components";
import { PieChartSkeletonWrapperProps } from "./pieChartSkeleton.types";
import { square } from "@/styles/mixins";

export const PieChartSkeletonWrapper = styled.div<PieChartSkeletonWrapperProps>`
    ${({ $size }) => square($size)}
    border-radius: 50%;
    background-color: #c2c2c2;
`;
