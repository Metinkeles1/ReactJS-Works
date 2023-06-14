import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className='left'>
                <div className='logo'>
                    <NavLink to="/">eCommerce</NavLink>
                </div>
            </div>
            <div className='right'>

            </div>


            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
            </nav>

            <main className="container">
                <Outlet />
            </main>
        </div>
    )
}

export default Navbar