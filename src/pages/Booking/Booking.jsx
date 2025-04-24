import React from "react";
import { useState, useEffect } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
	Cell,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
		y + height / 3
	}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
		x + width
	}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props;

	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Booking = () => {
	const [] = useState(
		JSON.parse(localStorage.getItem("myBooking"))
	);

	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		// Retrieve all bookings from localStorage
		const storedBookings = JSON.parse(localStorage.getItem("myBookings")) || [];
		setBookings(storedBookings);
	}, []);

	const handleCancelAppointment = (id) => {
		const updatedBookings = bookings.filter((booking) => booking.id !== id);

		// Show toast immediately
		toast.error("Appointment Cancelled Successfully", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Slide,
		});

		// Delay update so toast has time to show
		setTimeout(() => {
			localStorage.setItem("myBookings", JSON.stringify(updatedBookings));
			setBookings(updatedBookings);
		}, 2000); 
	};

	const chartData = bookings.map((booking) => ({
		name: booking.name,
		fee: booking.fee,
	}));

    

	const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

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
		<>
		<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					transition={Slide}
				/>
				<div className="p-5 bg-gray-50 px-32">
			<div className="mb-10">
				<h2 className="text-2xl font-bold text-center mb-5">
					Appointment Statistics
				</h2>
				
				<ResponsiveContainer width="100%" height={300}>
					<BarChart
						data={chartData}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar
							dataKey="fee"
							shape={<TriangleBar />}
							label={{ position: "top" }}
						>
							{chartData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={colors[index % colors.length]}
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
			
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
		</>
		
	);
};

export default Booking;
