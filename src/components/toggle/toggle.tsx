import React from "react";
import { ToggleProps } from "./toggle.types";
import { ToggleWrapper } from "./toggle.styled";

const Toggle: React.FC<ToggleProps> = ({ onChange, toggled = false }) => {
    return (
        <ToggleWrapper $toggled={toggled} onClick={onChange}>
            <div className="ball" />
        </ToggleWrapper>
    );
};

export default Toggle;
