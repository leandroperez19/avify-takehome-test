import React from "react";
import { NavbarWrapper } from "./navbar.styled";
import logo from "@/assets/static/logo.png";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import { IoMenu } from "@/assets/icons";
import { useScreen } from "@/hooks/useScreen";
import { sections } from "../../sections";
import { Link, useNavigate } from "react-router-dom";
import useLayout from "@/hooks/useLayout";
import useNavbar from "./navbar.hooks";
import { useTranslation } from "react-i18next";

const DesktopLinks: React.FC = () => {
    const {
        t,
        i18n: { resolvedLanguage, changeLanguage },
    } = useTranslation();

    return (
        <div className="desktop-links flex items-center text-white text-lg font-light gap-[35px]">
            {sections.map((section) => (
                <Link to={section.route} key={section.i18nKey}>
                    {t(section.i18nKey)}
                </Link>
            ))}
            <span
                className="uppercase cursor-pointer"
                onClick={() =>
                    resolvedLanguage === "en"
                        ? changeLanguage("es")
                        : changeLanguage("en")
                }
            >
                {resolvedLanguage}
            </span>
        </div>
    );
};

const Navbar: React.FC = () => {
    const { isMobile } = useScreen(1024);
    const { sidebarToggle } = useLayout();
    const { nav } = useNavbar();
    const navigate = useNavigate();

    return (
        <NavbarWrapper ref={nav}>
            <div className="content">
                <div className="left">
                    <div
                        className="logo-container"
                        onClick={() => navigate("/")}
                    >
                        <Image alt="logo" src={logo} />
                    </div>
                </div>
                <div className="right">
                    {isMobile ? (
                        <Button
                            className="px-2"
                            size="xs"
                            customCssClass="flex"
                            color="transparent"
                            onClick={sidebarToggle}
                        >
                            <IoMenu className="text-3xl text-white" />
                        </Button>
                    ) : (
                        <DesktopLinks />
                    )}
                </div>
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;
