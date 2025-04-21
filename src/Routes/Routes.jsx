import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Navbar from "../components/Navbar/Navbar";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: Root,
        errorElement: <div>Something went wrong</div>,

               children: [
            {
                index: true,
                path: "/",
               

            },
        ],
    }
])