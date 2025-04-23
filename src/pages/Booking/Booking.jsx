import React from "react";
import { useState, useEffect } from "react";

const Booking = () => {
	  const [bookingData, setBookingData] = useState(
			JSON.parse(localStorage.getItem("myBooking"))
		);

      const [bookings, setBookings] = useState([]);

			useEffect(() => {
				// Retrieve all bookings from localStorage
				const storedBookings =
					JSON.parse(localStorage.getItem("myBookings")) || [];
				setBookings(storedBookings);
			}, []);

			const handleCancelAppointment = (id) => {
				// Remove the selected booking from the array
				const updatedBookings = bookings.filter((booking) => booking.id !== id);

				// Update localStorage and state
				localStorage.setItem("myBookings", JSON.stringify(updatedBookings));
				setBookings(updatedBookings);
			};

			if (bookings.length === 0) {
				return (
					<div className="bg-white p-5 lg:p-10 flex flex-col items-center justify-center rounded-2xl text-center mt-10 mb-30 mx-4 md:mx-12 lg:mx-32">
						<h1 className="text-3xl font-bold">No Appointments Found</h1>
						<button
							onClick={() => (window.location.href = "/")}
							className="btn mt-5 bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition duration-300"
						>
							View All Doctors
						</button>
					</div>
				); 
               
			}

	return (
		<div className="p-5 bg-gray-50 px-32">
			<div className="text-center space-y-3 lg:space-y-5 rounded-2xl lg:p-10 p-5">
				<h1 className="text-4xl font-bold">My Appointments</h1>
				<p>
					Our platform connects you with verified, experienced doctors across
					various specialties — all at your convenience.
				</p>
			</div>

			{bookings.map((booking) => (
				<div
					key={booking.id}
					className="flex flex-col text-center space-y-3 lg:space-y-5 bg-white rounded-2xl p-5 mt-10"
				>
					<div className="flex justify-between items-center border-b-2 border-dashed border-gray-200 pb-3">
						<div className="flex flex-col gap-4 items-start">
							<h1 className="font-bold text-3xl">{booking.name}</h1>
							<div className="flex text-md gap-1 text-[#0F0F0F50]">
								<p>{booking.education}</p>
								<p>{booking.speciality}</p>
							</div>
						</div>
						<div>
							<p className="text-[#0F0F0F50]">
								Appointment Fee: {booking.fee} Taka + Vat
							</p>
						</div>
					</div>

					<button
						onClick={() => handleCancelAppointment(booking.id)}
						className="btn transition border-red-500 rounded-full bg-white text-red-500 hover:bg-red-500 hover:text-white duration-300 hover:border-2 hover:border-red-600"
					>
						Cancel Appointment
					</button>
				</div>
			))}
		</div>
	);
};

export default Booking;
