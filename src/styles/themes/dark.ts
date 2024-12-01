import { DefaultTheme } from "styled-components";
import colors from "@styles/constants/colors";

const darkTheme: DefaultTheme = {
    type: "dark",
    palette: {
        text: {
            primary: colors.almostBlack,
            secondary: colors.avifyGray,
            tertiary: colors.avifyRed,
        },
        common: {
            white: colors.white,
            black: colors.black,
        },
        page: {
            primaryBorder: colors.softGray,
            bodyColor: colors.avifyVeryLightBlue,
            scrollbarBg: colors.avifyTranslucentBlue,
            scrollbarThumb: colors.avifyBlue,
        },
    },
    input: {
        primary: {
            borderColor: colors.opaqueGray,
            background: colors.transparent,
            color: colors.black,
            borderOnFocus: colors.black,
            labelColor: colors.avifyLightGray,
            labelColorFocus: colors.opaqueGray,
            dangerColor: colors.red,
        },
    },
    button: {
        primary: {
            background: colors.avifyBlue,
            color: colors.avifyAlmostWhite,
            hoverColor: colors.avifyAlmostWhite,
            hoverBackground: colors.avifyBlue,
            focusColor: colors.avifyAlmostWhite,
            focusBackground: colors.avifyBlue,
            borderColor: colors.avifyBlue,
            shadowColor: colors.avifyTranslucentBlue,
        },
        secondary: {
            background: colors.white,
            color: colors.avifyOrangeRed,
            hoverColor: colors.avifyOrangeRed,
            hoverBackground: colors.lightBlueGray,
            focusColor: colors.avifyRed,
            focusBackground: colors.lightBlueGray,
            borderColor: colors.lightBlueGray,
            shadowColor: colors.transparent,
        },
        transparent: {
            background: colors.transparent,
            color: colors.black,
            hoverColor: colors.black,
            hoverBackground: colors.avifyLightTransparent,
            focusColor: colors.black,
            focusBackground: colors.avifyLightTransparent,
            borderColor: colors.transparent,
            shadowColor: colors.shadow,
        },
    },
    navbar: {
        backgroundColor: colors.avifyRed,
    },
    sidebar: {
        backgroundColor: colors.white,
        sectionColor: colors.almostBlack,
        sectionBgHover: colors.lightBlueGray,
    },
    modal: {
        primary: {
            background: colors.white,
            color: colors.black,
            itemHover: colors.veryBrightGray,
        },
    },
    box: {
        background: colors.white,
        color: colors.avifyDarkerGray,
    },
    table: {
        background: colors.avifyTableWhite,
        bodyBackground: colors.white,
    },
    toggle: {
        background: colors.anotherGray,
        ball: colors.white,
        toggledBackground: colors.avifyRed,
    },
};

export default darkTheme;
