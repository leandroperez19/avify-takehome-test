import { desktop } from "@/styles/constants/sizes";
import { flex, flexCenter, square } from "@/styles/mixins";
import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    height: 60px;
    width: 100%;
    background-color: ${({ theme }) => theme.navbar.backgroundColor};
    position: fixed;
    ${flex("center")}
    z-index: 1500;

    &.navbar-transparent {
        background-color: transparent;

        .content {
            background-color: ${({ theme }) => theme.navbar.backgroundColor};
            border-radius: 24px;
            padding: 6px 12px;
        }
    }

    @media (width >= ${desktop}) {
        height: 80px;
    }

    .content {
        width: 90%;
        margin-inline: auto;
        max-width: 1920px;
        transition: all 0.3s ease;

        ${flex("center", "space-between")}

        .left {
            .logo-container {
                background-color: white;
                ${square("36px")};
                border-radius: 50%;
                ${flexCenter()};
                padding: 8px;

                @media (width >= ${desktop}) {
                    ${square("50px")}
                }
            }
        }
    }
`;
