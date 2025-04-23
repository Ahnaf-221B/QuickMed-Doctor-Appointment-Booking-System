import React from "react";
import { NavLink } from "react-router";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	const links = (
		<>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-green-500 pb-1"
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/mybooking"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-green-500 pb-1"
				}
			>
				My Booking
			</NavLink>
			<NavLink
				to="/blogs"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-green-500 pb-1"
				}
			>
				Blogs
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-green-500 pb-1"
				}
			>
				Contact Us
			</NavLink>
		</>
	);
	return (
		<footer className="footer footer-horizontal footer-center text-base-content rounded p-10 bg-white mt-10">
			<div className="flex items-center ">
				<img
					src="/logo.png"
					alt="Logo"
					className="w-6 h-6 md:w-8 md:h-8 rounded-full"
				/>
				<a className="font-semibold text-lg md:text-2xl">QuickMed</a>
			</div>
			<div className="border-b-2 border-[#0F0F0F20] border-dashed md:w-3/4 pb-6">
				<nav className="grid grid-flow-col gap-10  ">{links}</nav>
			</div>

			<nav>
				<div className="grid grid-flow-col gap-20">
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook
							size={30}
							className="text-blue-600 hover:text-blue-800"
						/>
					</a>

					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin
							size={30}
							className="text-blue-700 hover:text-blue-900"
						/>
					</a>

					{/* Twitter */}
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaTwitter size={30} className="text-sky-500 hover:text-sky-700" />
					</a>

					{/* YouTube */}
					<a
						href="https://youtube.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaYoutube size={30} className="text-red-600 hover:text-red-800" />
					</a>
				</div>
			</nav>
			<aside>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by QuickMed 
				</p>
			</aside>
		</footer>
	);
};

export default Footer;
