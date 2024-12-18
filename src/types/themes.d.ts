import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        type: "light" | "dark";
        palette: {
            text: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
            common: {
                white: string;
                black: string;
            };
            page: {
                primaryBorder: string;
                bodyColor: string;
                scrollbarBg: string;
                scrollbarThumb: string;
            };
        };
        input: {
            primary: {
                borderColor: string;
                background: string;
                color: string;
                borderOnFocus: string;
                labelColor: string;
                labelColorFocus: string;
                dangerColor: string;
            };
        };
        button: {
            primary: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
            secondary: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
            transparent: {
                color: string;
                background: string;
                hoverBackground: string;
                hoverColor: string;
                focusColor: string;
                focusBackground;
                borderColor: string;
                shadowColor: string;
            };
        };
        navbar: {
            backgroundColor: string;
        };
        sidebar: {
            backgroundColor: string;
            sectionColor: string;
            sectionBgHover: string;
        };
        modal: {
            primary: {
                background: string;
                color: string;
                itemHover: string;
            };
        };
        box: {
            background: string;
            color: string;
        };
        table: {
            background: string;
            bodyBackground: string;
        };
        toggle: {
            background: string;
            ball: string;
            toggledBackground: string;
        };
    }
}
