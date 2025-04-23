import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
	    const navigation = useNavigation();
			const isLoading = navigation.state === "loading";
	return (
		<div className="bg-gray-50">
			<Navbar />
			{isLoading && (
				<div className="w-full flex justify-center bg-[#EFEFEF] items-center py-10">
					<span className="loading loading-bars loading-xl my-4"></span>
				</div>
			)}
			<main>
				<Outlet></Outlet>
			</main>
			
			  {location.pathname !== "/contact" && <Footer />}
		</div>
	);
};

export default Root;