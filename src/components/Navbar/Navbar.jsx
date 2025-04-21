import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
	const links = (
		<>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-blue-500 pb-1"
				}
			>
				Home
			</NavLink>
			<NavLink
				to="/mybooking"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-blue-500 pb-1"
				}
			>
				My Booking
			</NavLink>
			<NavLink
				to="/blogs"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-blue-500 pb-1"
				}
			>
				Blogs
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) =>
					isActive
						? "border-b-2 border-black text-black font-semibold pb-1"
						: "text-gray-700 hover:text-blue-500 pb-1"
				}
			>
				Contact Us
			</NavLink>
		</>
	);

	return (
		<div className="navbar  border-b-2 border-[#0F0F0F30] px-6 lg:px-12 bg-gray-50">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>

					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{links}
					</ul>
				</div>

				<div className="flex items-center gap-2">
					<img
						src="/logo.png"
						alt="Logo"
						className="w-4 h-4 md:w-8 md:h-8 rounded-full"
					/>
					<a className=" font-semibold text-lg md:text-2xl">QuickMed</a>
				</div>
			</div>

			<div className="navbar-center hidden lg:flex">
				<div className="flex gap-10 items-center">{links}</div>
			</div>

			<div className="navbar-end ">
				<a className="btn w-20 h-8 md:w-25 md:h-10 md:btn md:rounded-full text-[12px] bg-[#176AE5] md:bg-[#176AE5] rounded-full text-white md:text-white">
					Emergency
				</a>
			</div>
		</div>
	);
};

export default Navbar;
