import React from 'react'
import { useParams } from 'react-router';
const DoctorDetails = () => {
    const {id} =useParams();
    
  return (
    <div>DoctorDetails</div>
  )
}

export default DoctorDetails