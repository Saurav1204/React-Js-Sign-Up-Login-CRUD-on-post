import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';
export default function Rootlayout() {
  return (
    <div className='root-layout'>
       <header>
      <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="about">About</NavLink>
         <NavLink to="help">Help</NavLink>
         <NavLink to="careers">Careers</NavLink>
      </nav>
    </header>
    
    <main>
     <h2>das</h2>
        <Outlet />
    </main>
    </div>
  )
}
