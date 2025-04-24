import React from "react";
import { Link, useParams } from "react-router";
import { LuCirclePlus } from "react-icons/lu";

const ErrorDoctor = () => {
	const { registration_number } = useParams();

	return (
		<div className="bg-[#EFEFEF] lg:px-28 px-5 lg:py-10 py-5">
			<div className="flex flex-col items-center justify-center text-center space-y-3 lg:space-y-5 bg-white rounded-2xl lg:p-10 p-5">
				<h1 className="text-3xl font-bold">No Doctor Found!!!</h1>
				<p className="opacity-30 font-bold">
					No doctor found with this registration no.:
				</p>
				<p className="flex items-center gap-2 font-bold">
					<LuCirclePlus size={20} /> {registration_number}
				</p>

				<div>
					<Link to="/">
						<button className="btn w-56 text-white font-bold bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 rounded-full transition duration-300">
							View All Doctors
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorDoctor;
