import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: Root,
       
            children: [
            {
                index: true,
                path: "/",
                Component: Home,

            },
            {
                path: "/blogs",
                Component: Blogs,
                loader: () => fetch("/blogdata.json"),
            }
        ],
    }
])