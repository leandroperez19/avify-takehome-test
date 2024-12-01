import styled from "styled-components";
import { ToggleWrapperProps } from "./toggle.types";
import { square } from "@/styles/mixins";

export const ToggleWrapper = styled.div<ToggleWrapperProps>`
    width: 40px;
    height: 20px;
    border-radius: 16px;
    background-color: ${({ theme, $toggled }) =>
        $toggled ? theme.toggle.toggledBackground : theme.toggle.background};
    cursor: pointer;
    padding: 2px;
    transition: all 0.3s ease;
    position: relative;

    .ball {
        ${square("16px")};
        border-radius: 50%;
        background-color: ${({ theme }) => theme.toggle.ball};
        transition: all 0.3s ease;
        position: absolute;
        left: ${({ $toggled }) =>
            $toggled ? "calc(100% - 16px - 2px)" : "2px"};
    }
`;
