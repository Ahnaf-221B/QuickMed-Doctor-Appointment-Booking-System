import React from 'react'
import { FaRegRegistered } from "react-icons/fa";
const Doctor = ({doctor}) => {
    const {
			image,
			name,
			education,
			speciality,
			experience,
			registration_number,
           available_days,
		} = doctor;
       const today= new Date().toLocaleString("en-US", {weekday:"long"});
       const isAvailable = available_days.includes(today);
  return (
		<div className="card bg-white w-96 shadow-sm p-6 ">
			<figure className="p-4 bg-gray-300  mx-auto rounded-lg">
				<img className=" " src={image} alt="Shoes" />
			</figure>
			<div className="card-body">
				<div className='flex  items-center gap-4'>
					<span
						className={`text-sm font-semibold px-3 py-2 rounded-full ${
							isAvailable
								? "bg-green-100 text-green-600"
								: "bg-red-100 text-red-600"
						}`}
					>
						{isAvailable ? "Available" : "Unavailable"}
					</span>

					<button className="px-2 py-1 bg-[#176AE530] rounded-full">
						{experience}
					</button>
				</div>

				<h2 className="card-title text-2xl font-bold">{name}</h2>
				<div className=" h-8 font-semibold border-b-2 border-dashed border-[#F0F0F0]">
					{education}, {speciality}
				</div>
				<div className="flex items-center gap-2 mt-4">
					<FaRegRegistered />
					<p>
						<span className="">Reg No:</span> {registration_number}
					</p>
				</div>

				<div>
					<button className="btn btn-primary mt-4 w-full bg-white font-bold text-blue-700 rounded-full transition duration-300">
						View Details
					</button>
				</div>
			</div>
		</div>
	);
}

export default Doctor