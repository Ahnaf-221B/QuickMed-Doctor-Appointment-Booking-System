import React from "react";

import Banner from "../../components/Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";
import CountUp from "react-countup";

import succdoc from "../../assets/success-doctor.png";
import succpat from "../../assets/success-patients.png";
import succstaff from "../../assets/success-staffs.png";
import succreview from "../../assets/success-review.png";

const Home = () => {
	const doctors = useLoaderData();

	return (
		<div className="bg-gray-50 ">
			<Banner />
			<div className="flex items-center justify-center flex-col my-10  ">
				<h1 className="font-bold text-4xl ">Our Best Doctors</h1>
				<p className="text-center text-gray-500 my-4 md:pl-42 md:pr-42 font-semibold mt-7 mb-10">
					Our platform connects you with verified, experienced doctors across
					various specialties — all at your convenience. Whether it's a routine
					checkup or urgent consultation, book appointments in minutes and
					receive quality care you can trust.
				</p>
				<Doctors doctors={doctors} />
			</div>
			<div className="flex items-center justify-center flex-col my-20">
				<h1 className="font-bold text-4xl mb-5">We Provide Best Medical Services</h1>
				<p className="text-center text-gray-500   font-semibold ">
					Our platform connects you with verified, experienced doctors across
					various specialties — all at your convenience.{" "}
				</p>
			</div>
			<div className="w-full max-w-7xl mx-auto px-12 py- rounded-lg">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{/* Total Doctors Card */}
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 flex items-center justify-center rounded-lg">
								<img src={succdoc} alt="" />
							</div>
						</div>
						<h2 className="text-5xl font-bold text-gray-900 mb-1">
							<CountUp end={199} suffix="+" duration={5} />
						</h2>
						<p className="text-gray-500">Total Doctors</p>
					</div>

					{/* Total Reviews Card */}
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<div className="w-12 h-12 flex items-start mb-4">
							<div className="flex">
								<img src={succreview} alt="" />
							</div>
						</div>
						<h2 className="text-5xl font-bold text-gray-900 mb-1">
							<CountUp end={467} suffix="+" duration={5} />
						</h2>
						<p className="text-gray-500">Total Reviews</p>
					</div>

					{/* Patients Card */}
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 flex items-center justify-center">
								<img src={succpat} alt="" />
							</div>
						</div>
						<h2 className="text-5xl font-bold text-gray-900 mb-1">
							<CountUp end={1900} suffix="+" duration={5} />
						</h2>
						<p className="text-gray-500">Patients</p>
					</div>

					{/* Total Staffs Card */}
					<div className="bg-white p-6 rounded-lg shadow-sm">
						<div className="flex items-start mb-4">
							<div className="w-12 h-12 flex items-center justify-center">
								<img src={succstaff} alt="" />
							</div>
						</div>
						<h2 className="text-5xl font-bold text-gray-900 mb-1">
							<CountUp end={300} suffix="+" duration={5} />
						</h2>
						<p className="text-gray-500">Total Stuffs</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
