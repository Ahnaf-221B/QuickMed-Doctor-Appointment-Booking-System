import React from 'react'
import Banner from '../../components/Banner/Banner'
import Doctors from '../Doctors/Doctors'
import { useLoaderData } from 'react-router'
const Home = () => {
  const doctors =useLoaderData()
  
  return (
		<div className='bg-gray-50'>
			<Banner />
			<div className='flex items-center justify-center flex-col my-10  '>
				<h1 className='font-bold text-3xl '>Our Best Doctors</h1>
				<p className='text-center text-gray-500 my-4 pl-42 pr-42 font-semibold mt-10 mb-10'>
					Our platform connects you with verified, experienced doctors across
					various specialties — all at your convenience. Whether it's a routine
					checkup or urgent consultation, book appointments in minutes and
					receive quality care you can trust.
				</p>
        	<Doctors doctors={doctors} />
			</div>
		
		</div>
	);
}

export default Home