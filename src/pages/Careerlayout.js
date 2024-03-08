import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Careerlayout() {
  return (
    <div className='careers-layout'>
    <h2>Careers</h2>
    <p>Sirf career pe focuse kr bhidu baki sab maya jaal hai tu carrer mai safal to tera life chalega tan-tana-tan</p>
      <Outlet />
  </div>
  )
}
