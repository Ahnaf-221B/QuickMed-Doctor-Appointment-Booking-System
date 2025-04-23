import React, { useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ doctors }) => {
	const [showAll, setShowAll] = useState(false);
   
	const visibleDoctors = showAll ? doctors : doctors.slice(0, 6);

	const handleToggle = () => {
		setShowAll((prev) => !prev);
	};

	return (
		<div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
				{visibleDoctors.map((doctor, index) => (
					<Doctor key={index} doctor={doctor} />
                    
				))}
			</div>

			{doctors.length > 6 && (
				<div className="text-center mt-8">
					<button
						onClick={handleToggle}
						className="btn w-56 text-white font-bold bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 rounded-full transition duration-300"
					>
						{showAll ? "Show Less" : "View All Doctors"}
					</button>
				</div>
			)}
		</div>
	);
};

export default Doctors;
