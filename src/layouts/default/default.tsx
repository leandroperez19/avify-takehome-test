import React from "react";
import { Outlet } from "react-router-dom";
import { DefaultWrapper } from "./default.styled";
import Navbar from "./components/navbar/navbar";
import useLayout from "@/hooks/useLayout";
import Sidebar from "./components/sidebar/sidebar";

const Default: React.FC = () => {
    const { sidebarOpen } = useLayout();

    return (
        <DefaultWrapper>
            <Navbar />
            {sidebarOpen && <Sidebar />}
            <main>
                <Outlet />
            </main>
        </DefaultWrapper>
    );
};

export default Default;
