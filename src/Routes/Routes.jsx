import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from "../pages/Contact/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				path: "/",
				Component: Home,
                loader: ()=> fetch("/doctors.json"),
			},
			{
				path: "/blogs",
				Component: Blogs,
				loader: () => fetch("/blogdata.json"),
			},
			{
				path: "/mybooking",
			},
            {
                path: "/doctordetails/:id",
                loader: ()=> fetch("/doctors.json")
            },
			{
				path: "/contact",
				loader: () => new Promise((resolve) => setTimeout(resolve, 150)),
				element: <Contact />,
			},
		],
	},
]);