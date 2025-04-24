import doc1 from "../../assets/banner-img-1.png";
import doc2 from "../../assets/doctor-img-2.jpg";

const Banner = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-12 md:py-6">
			{/* Main content - lowered with top padding */}
			<div className="max-w-7xl md:max-w-[1400px] mx-auto border-4 border-white md:p-6  rounded-xl shadow-lg ">
				{/* Hero section */}
				<div className="text-center mb-12 mt-12">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
						Dependable Care, Backed by Trusted <br /> Professionals.
					</h1>
					<p className="text-gray-600 md:max-w-3xl mx-auto mb-8 text-sm md:text-base">
						Our platform connects you with verified, experienced doctors across
						various specialties — all at your convenience. Whether it's a
						routine checkup or urgent consultation, book appointments in minutes
						and receive quality care you can trust.
					</p>

					{/* Search bar */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-4xl mx-auto">
						<div className="relative w-full">
							<input
								type="text"
								placeholder="Search any doctor..."
								className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 op"
							/>
						</div>
						<button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full w-45 h-10 items-center flex justify-center">
							Search Now
						</button>
					</div>
				</div>

				{/* Doctor images section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					{/* First doctor placeholder */}
					<div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
						<div className="text-gray-400">
                            <img  src={doc1} alt="" />
                        </div>
					</div>

					{/* Second doctor placeholder */}
					<div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center  ">
						<div className="text-gray-400">
                            <img className="md:h-[350px] md:w-[620px] h-[250px] w-[450px]" src={doc2} alt="" />
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
