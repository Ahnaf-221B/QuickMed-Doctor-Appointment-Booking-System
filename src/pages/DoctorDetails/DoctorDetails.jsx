import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { BiRegistered } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DoctorDetails = () => {
	const { registration_number } = useParams();
	const navigate = useNavigate();

	const data = useLoaderData();
	const targetedDoctor = data.find(
		(doctor) => doctor.registration_number === registration_number
	);

	const { image, name, education, speciality, hospital, available_days, fee } =
		targetedDoctor;

	const today = new Date().toLocaleString("en-US", { weekday: "long" });
	const isAvailable = available_days.includes(today);

	const handleBookAppointment = () => {
		const existingBookings =
			JSON.parse(localStorage.getItem("myBookings")) || [];

		const isAlreadyBooked = existingBookings.some(
			(booking) => booking.id === targetedDoctor.id
		);

		if (isAlreadyBooked) {
			toast.error("You have already booked this doctor.");
			return;
		}

        

		// Create a new booking object
		const bookingData = {
			id: targetedDoctor.id,
			name: targetedDoctor.name,
			education: targetedDoctor.education,
			speciality: targetedDoctor.speciality,
			fee: targetedDoctor.fee,
			hospital: targetedDoctor.hospital,
		};

		// Add the new booking to the existing bookings array
		const updatedBookings = [...existingBookings, bookingData];

		// Save the updated bookings array to localStorage
		localStorage.setItem("myBookings", JSON.stringify(updatedBookings));

		// Navigate to the "My Booking" page
		 setTimeout(() => {
				navigate("/mybooking");
			}, 2000);

        toast.success("Appointment booked successfully!");
	};
	return (
		<div className=" lg:px-28 px-5 lg:py-10 py-5 bg-gray-50">
			<div className="text-center space-y-3 lg:space-y-5 bg-white rounded-2xl lg:p-10 p-5">
				<h1 className="text-3xl font-bold">Doctor’s Profile Details</h1>
				<p className="opacity-30 font-bold">
					Discover expert care, trusted experience, and the commitment behind
					every consultation.
				</p>
			</div>

			<div className="hero">
				<div className="flex justify-between flex-col lg:grid grid-cols-2 gap-5 lg:gap-10 p-5 my-5 bg-white rounded-2xl">
					<div className="flex justify-center">
						<img src={image} className="rounded-2xl" />
					</div>
					<div className="flex flex-col gap-3 justify-center text-center md:text-left">
						<div>
							<h1 className="text-2xl font-bold">{name}</h1>
							<p className="text-lg font-medium">{education}</p>
							<p className="text-lg font-medium pb-3">{speciality}</p>

							<div className="space-y-3">
								<p className="text-lg pb-3 border-b-2 border-dashed border-gray-200">
									<span className="font-bold pb-3 border-b-2 border-dashed border-gray-200">
										Working at
									</span>{" "}
									<br /> {hospital}
								</p>

								<p className="font-bold text-lg justify-center md:justify-start pb-3 border-b-2 border-dashed border-gray-200 flex items-center gap-1">
									<BiRegistered size={20} />
									Reg. No: {registration_number}
								</p>
							</div>
						</div>

						<p className="flex flex-col md:flex-row items-center pb-3 border-b-2 border-dashed border-gray-200 gap-2">
							<span className="font-bold text-lg ">Availability:</span>
							{available_days.map((availableDay, index) => (
								<button
									key={index}
									className="px-2 py-1 mr-4 bg-[#FFA00020] rounded-full text-[#FFA000]"
								>
									{availableDay}
								</button>
							))}
						</p>

						<p className="text-lg">
							<span className="font-bold">Consultation Fee: </span>
							<span className="text-blue-600 font-bold">Taka: {fee}</span>{" "}
							<span className="opacity-38">(incl. Vat)</span>{" "}
							<span className="text-medium text-blue-600">
								Per consultation
							</span>
						</p>

						<div className="flex gap-3 pt-3">
							{/* <button onClick={() => handleDoctor(id)} className='btn'>Book Appointment Now</button> */}
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col text-center space-y-3 lg:space-y-5 bg-white rounded-2xl lg:p-10 p-5">
				<div className="pb-3 border-b-2 border-dashed border-gray-200">
					<h1 className="text-2xl font-bold">Doctor’s Profile Details</h1>
				</div>
				<div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between text-lg font-bold pb-3 border-b-2 border-dashed border-gray-200">
					<p>Availability</p>
					<p
						className={`text-sm font-semibold px-2 py-1 rounded-full ${
							isAvailable
								? "bg-green-100 text-green-600"
								: "bg-red-100 text-red-600"
						}`}
					>
						{isAvailable
							? "Doctor Available Today"
							: "Doctor Unavailable Today"}
					</p>
				</div>

				<div className="pb-5">
					<p className="text-sm font-semibold px-2 py-1 rounded-full text-[#FFA000] bg-orange-50 flex gap-2 justify-center">
						<MdErrorOutline size={20} />
						{isAvailable
							? `Due to high patient volume, we are currently accepting appointments for today. We appreciate your understanding and cooperation.`
							: `Due to high patient volume, we aren't currently accepting appointments for today. We appreciate your understanding and cooperation.`}
					</p>
				</div>
				<ToastContainer />
				<button
					disabled={!isAvailable}
					onClick={() => {
						handleBookAppointment();
					}}
					className="btn transition rounded-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 duration-300 hover:border-2 hover:border-blue-600"
				>
					Book Appointment Now
				</button>
			</div>
		</div>
	);
};

export default DoctorDetails;
