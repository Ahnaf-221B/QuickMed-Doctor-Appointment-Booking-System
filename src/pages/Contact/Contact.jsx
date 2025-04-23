import React from "react";
import errorpic from "../../assets/error.jpg";
import Navbar from "../../components/Navbar/Navbar";

import { Link } from "react-router";
const Contact = () => {
	return (
		<>
		
			<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
				<img className="w-3/12 rounded-full" src={errorpic} alt="" />
				<h1 className="font-bold text-5xl mt-5 mb-5">404 - Page Not Found</h1>
				<h3 className="font-semibold font-2xl ">
					Ooops! The page you are looking for does not exist
				</h3>
				<Link className="btn btn-primary mt-5" to="/">
					Go Back Home
				</Link>
			</div>
		</>
	);
};

export default Contact;
