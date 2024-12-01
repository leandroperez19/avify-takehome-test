import Default from "@/layouts/default/default";
import Home from "@/pages/home/home";
import Individual from "@/pages/individual/individual";
import NotFound from "@/pages/notFound/notFound";
import TablePage from "@/pages/table/table";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/individual",
                element: <Individual />,
            },
            {
                path: "/table",
                element: <TablePage />,
            },
        ],
    },
]);

export const Router: React.FC = () => <RouterProvider router={router} />;
