import React from "react";
import { BoxProps } from "./box.types";
import { BoxWrapper } from "./box.styled";

const Box: React.ForwardRefExoticComponent<BoxProps> = React.forwardRef<
    HTMLDivElement,
    BoxProps
>(({ children, className = "p-4", radius = "16px", shadow = false }, ref) => {
    return (
        <BoxWrapper
            ref={ref}
            className={className}
            $radius={radius}
            $shadow={shadow}
        >
            {children}
        </BoxWrapper>
    );
});

export default Box;
