import React from "react";
import Box from "../box/box";
import Image from "../image/image";
import sadFace from "@/assets/static/sad-face.png";
import { ErrorBoxProps } from "./errorBox.types";
import { useTranslation } from "react-i18next";

const ErrorBox: React.FC<ErrorBoxProps> = ({ text = "generic_error" }) => {
    const { t } = useTranslation();

    return (
        <Box className="p-6 flex-center-col text-center">
            <Image alt="sad-face" src={sadFace} className="h-14" />
            <p>{t(text)}</p>
        </Box>
    );
};

export default ErrorBox;
